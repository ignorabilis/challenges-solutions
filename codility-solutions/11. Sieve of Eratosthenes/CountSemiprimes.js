// Utility for finding semiprimes
function isSemiprime(N) {
    let count = 0;

    // just divide the number by 2, then 3, then 5, etc.
    // as much as possible; this way we are dividing only on
    // prime numbers
    for (let i = 2; i * i <= N && count < 2; i++) {
        while (N % i === 0) {
            N /= i;
            count++;
        }
    }

    // the remaining number is a large (> sqrt(N))
    // prime number
    if (N > 1) {
        count++;
    }

    return count === 2;
}

// Time complexity: O(N * log(log(N)) + M)
function solution(N, P, Q) {
    // make a prefix sum array of all semiprimes
    // so a semiprimes array looks like:
    // [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1 ]
    // and PS semiprimes looks like:
    // [ 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 9, 10 ]
    let semiprimesPS = [0];

    for (let i = 1; i <= N; i++) {
        let prev = semiprimesPS[i - 1],
            isSemi = isSemiprime(i) ? 1 : 0;

        semiprimesPS.push(prev + isSemi);
    }

    let M = P.length,
        queries = [];
    for (let j = 0; j < M; j++) {
        let res = semiprimesPS[Q[j]] - semiprimesPS[P[j] - 1];
        queries.push(res);
    }

    return queries;
}
