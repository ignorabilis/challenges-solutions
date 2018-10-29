function solution(A) {
    let n = A.length,
        peaks = [];

    // the possible number of peaks is n - 2 since
    // the first and the last cannot be peaks
    for(let i = 1; i < n - 1; i++){
        if(A[i - 1] < A[i] && A[i] > A[i + 1]){
            peaks.push(i);
        }
    }

    if(peaks.length === 0){
        return 0;
    }

    // start backwards - we are searching for the largest
    // so no need to go through all possible block sizes -
    // we just need to find the biggest one for which each block
    // has a peak
    for(let size = peaks.length; size >= 0; size--){
        if(n % size === 0){
            let block_size = n / size,
                found = [],
                found_count = 0;

            // for each peak just check the block id
            // if the block id is unvisited mark as true
            // and increase count
            for(let j = 0; j < peaks.length; j++){
                let block_id = Math.floor(peaks[j] / block_size);
                if(!found[block_id]){
                    found[block_id] = true;
                    found_count++;
                }
            }

            if(found_count === size){
                return size;
            }
        }
    }

    return 0;
}


// OVERLY COMPLICATED
// Only 90% - one perf test fails (returns a wrong value)
// Time complexity (according to codility): O(N * log(log(N)))
// no need to use prev/next in calcPeaks,
// just use i - 1 and i + 1; no need to explicitly calc all divs,
// just check those on the fly;
// no need for prefix sums - just remember the id of each peak
// and then based on that id find in which block it is
function calcPeaks(A, n) {
    // skip the first element as it cannot be a peak
    let peaks = [0],
        p_peaks = [0],
        prev = A[0],
        next = A[2];

    // skip the last element as it cannot be a peak
    for (let i = 1; i < n - 1; i++) {
        let curr = A[i];
        if (curr > prev && curr > next) {
            peaks[i] = 1;
            p_peaks[i] = p_peaks[i - 1] + 1;
        }
        else {
            peaks[i] = 0;
            p_peaks[i] = p_peaks[i - 1];
        }

        prev = A[i];
        next = A[i + 2];
    }

    peaks[n - 1] = 0;
    p_peaks[n - 1] = p_peaks[n - 2];

    return {peaks: peaks, p_peaks: p_peaks};
}

const sort_fn = (a, b) => {
    return a > b;
};

function calcDivs(n) {
    let mult = 1,
        divs = [];

    while (mult * mult < n) {
        if (n % mult === 0) {
            let mult2 = n / mult;
            divs.push(mult);
            divs.push(mult2);
        }

        mult++;
    }

    if (mult * mult === n) {
        divs.push(mult);
    }

    divs.sort(sort_fn);
    return divs;
}

function calcLargestDiv(peak_count, divs) {
    let i = divs.length - 1,
        largest_div = divs[i];

    while (peak_count < largest_div) {
        i--;
        largest_div = divs[i];
        divs.pop();
    }

    return divs;
}

function solution2(A) {
    let n = A.length,
        {peaks, p_peaks} = calcPeaks(A, n),
        divs = calcDivs(n),
        peak_count = p_peaks[n - 1];

    calcLargestDiv(peak_count, divs);
    let m = divs.length;
    if (m === 0) {
        return 0;
    }

    for (let i = m - 1; i >= 0; i--) {
        let block_count = divs[i],
            step = n / block_count,
            block_had_peak = 0;

        for (let j = 0; j < n; j += step) {
            let end = p_peaks[j + step - 1],
                start = j - 1 < 0 ? 0 : p_peaks[j - 1];

            if ((end - start) > 0) {
                block_had_peak++;
            }
        }

        if (block_count === block_had_peak) {
            return block_count;
        }
    }

    return 0;
}
