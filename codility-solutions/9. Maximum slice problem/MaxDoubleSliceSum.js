function solution(A) {
    let n = A.length
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
