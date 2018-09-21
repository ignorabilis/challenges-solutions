function solution(X, A) {
    let expected = new Map(),
        n = A.length;

    for(let i = 1; i <= X; i++){
        expected.set(i, i);
    }

    for(let i = 0; i < n; i++){
        expected.delete(A[i]);

        if (expected.size === 0) {
            return i;
        }
    }

    return -1;
}
