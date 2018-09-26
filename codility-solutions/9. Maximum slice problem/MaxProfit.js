function solution(A) {
    let m = A.length;

    if (m < 2){
        return 0;
    }

    let n = m - 1,
        profits = [];

    for (let i = 0; i < n; i++){
        profits[i] = A[i + 1] - A[i];
    }

    let max_ending = 0,
        max_slice = 0;

    for(let i = 0; i < n; i++){
        max_ending = Math.max(0, max_ending + profits[i]);
        max_slice = Math.max(max_slice, max_ending);
    }

    return max_slice;
}
