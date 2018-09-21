function solution(A) {
    let l = A.length,
        eles = {};

    for(let i = 1; i <= l; i++){
        eles[i] = true;
    }

    for(let i = 0; i < l; i++){
        delete eles[A[i]];
    }

    for (let prop in eles) {
        if (eles[prop]) {
            return +prop;
        }
    }

    return l + 1;
}