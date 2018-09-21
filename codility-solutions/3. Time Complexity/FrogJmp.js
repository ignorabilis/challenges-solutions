function solution(X, Y, D) {
    let diff = Y - X;

    if (diff === 0){
        return 0;
    }

    return Math.ceil(diff / D);
}
