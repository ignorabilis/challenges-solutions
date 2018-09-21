function solution(A) {
    let min = 1,
        perm_map = {},
        n = A.length;

    for(let i = 0; i < n; i++){
        if (A[i] > n + 1){
            return 0;
        }

        perm_map[A[i]] = A[i];
    }

    for(let i = min; i < (min + n); i++){
        if(perm_map[i] === undefined){
            return 0;
        }
    }

    return 1;
}