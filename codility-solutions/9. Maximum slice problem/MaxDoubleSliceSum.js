// Time complexity: O(N);
// Space complexity: O(3N) = O(N);
function solution(A) {
    let n = A.length,
        dsEnd = n - 1,
        lrSlices = [0],
        rlSlices = [0],
        lrSlice = 0,
        rlSlice = 0;

    // the first and the last element are always excluded
    for (let i = 1; i < dsEnd; i++) {
        lrSlice = Math.max(0, lrSlice + A[i]);
        lrSlices[i] = lrSlice;
        rlSlice = Math.max(0, rlSlice + A[dsEnd - i]);
        rlSlices[dsEnd - i] = rlSlice;
    }

    // pad with zeroes - Y might be right next to X or Z
    // like this:  [(skip 1) 2 3 -5]
    // or [1 2 3 (skip -5)]
    lrSlices.push(0);
    rlSlices.push(0);
    let maxDoubleSlice = 0;
    for (let i = 0; i < lrSlices.length - 2; i++) {
        let lrs = lrSlices[i],
            rls = rlSlices[i + 2];

        maxDoubleSlice = Math.max(maxDoubleSlice, lrs + rls);
    }

    return maxDoubleSlice;
}

// This below will never pass with 100%
// because finding the maxSlice and then excluding the min value
// may only work well if all the numbers were positive or 0
function solutionNotWorking(A) {
    let n = A.length,
        maxEnding = 0,
        maxSlice = 0,
        start = 1,
        end = 1,
        bestStart = 1,
        bestEnd = 1;

    // since X can be 0, but the first element
    // can be only X + 1 just start from 1
    // in the same way for Z just end at n - 1
    // then just find the max slice sum
    // and the start & end indexes of the slice
    for (let i = 1; i < n - 1; i++) {
        maxEnding += A[i];
        end = i;

        if (maxEnding < 0) {
            maxEnding = 0;
            start = i;
        }

        if (maxEnding > maxSlice) {
            maxSlice = maxEnding;
            bestStart = start;
            bestEnd = end;
        }
    }

    // if the elements of the slice are less than 3
    // there is no such slice so return 0
    if (bestEnd - bestStart < 2) {
        return 0;
    }

    // find the min element for the max slice
    // such that at least the first and the last element
    // are excluded, since X < Y < Z
    let min = A[bestStart + 1];
    for (let i = bestStart + 1; i <= bestEnd - 1; i++) {
        if (min > A[i]) {
            min = A[i];
        }
    }

    return maxSlice - min;
}
