function solution(A) {
    let size = A.length,
        all = {};

    for (let i = 0; i <= size; i++) {
        all[A[i]] = A[i];
    }

    for (let i = 1; i <= size; i++) {
        if (!all[i]) {
            return i;
        }
    }

    return size + 1;
}
