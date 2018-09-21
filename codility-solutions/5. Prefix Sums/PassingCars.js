function solution(A) {
    let n = A.length,
        total_pairs = 0,
        current_zeroes = 0;

    for(let i = 0; i < n; i++){
        if(A[i] === 0){
            current_zeroes++;
        }
        else {
            total_pairs += current_zeroes;
        }

        if(total_pairs > 1000 * 1000 * 1000){
            return -1;
        }
    }

    return total_pairs;
}
