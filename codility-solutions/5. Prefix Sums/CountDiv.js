function solution(A, B, K) {
    if (B === 0){
        return 1;
    }

    if (K > B){
        return 0;
    }

    let start = A;
    let delta = Math.ceil(A / K),
        K2 = delta * K;
    if (K2 > A){
        start = K2;
    }

    let count = Math.floor((B - start) / K);

    if ((start % K) === 0){
        count++;
    }

    return count;
}
