function solution(A) {
    A.sort((a,b) => a - b);

    let n = A.length,
        max_last = A[n - 1] * A[n - 2] * A[n - 3],
        // if the first two numbers are negative
        // they could still yield a higher product
        max_first = A[0] * A[1] * A[n - 1];

    return Math.max(max_first, max_last);
}
