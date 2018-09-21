function solution(A) {
    let N = A.length,
        pairs = {};

    for(let i = 0; i < N; i++) {
        if (pairs[A[i]]) {
            delete pairs[A[i]];
        }
        else {
            pairs[A[i]] = true;
        }
    }

    for(let prop in pairs) {
        return +prop;
    }
}
