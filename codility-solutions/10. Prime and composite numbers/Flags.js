function solution(A) {
    let n = A.length,
        peaks = [];

    // the possible number of peaks is n - 2 since
    // the first and the last cannot be peaks
    for (let i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length === 0) {
        return 0;
    }

    // the observation here is that for 100 elements
    // one can set only 10 flags; i.e. 11 flags would need at least 121 elements
    // note that for [0 1 0 0 0 1 0 0 0 1 0 0 0 1 0] one can set 4 flags
    // all elements are 15, which means Math.floor(Math.sqrt(n)) will return 3
    // and there can actually be 4 flags
    let maxPossibleFlags = Math.min(peaks.length, Math.floor(Math.sqrt(n)) + 1);
    for (let size = maxPossibleFlags; size > 0; size--) {

        let lastPeak,
            flagsSet = 0;
        for (let j = 0; j < peaks.length; j++) {
            let currentPeak = peaks[j];
            if (lastPeak === undefined ||
                (currentPeak - lastPeak) / size >= 1) {
                lastPeak = peaks[j];
                flagsSet++;
            }

            // check if all flags are set immediately
            // since we can continue setting flags
            if (size === flagsSet) {
                return flagsSet;
            }
        }
    }

    return 0;
}
