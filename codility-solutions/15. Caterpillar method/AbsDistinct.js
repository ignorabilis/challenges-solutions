function solution(A) {
    let dist = new Map(),
        n = A.length;

    for (let i = 0; i < n; i++) {
        let absVal = Math.abs(A[i]),
            exVal = dist.get(absVal);
        if (exVal === undefined) {
            dist.set(absVal, 1);
        }
        else {
            dist.set(absVal, ++exVal);
        }

    }

    return dist.size;
}
