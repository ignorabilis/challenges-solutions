function solution(A) {
    let N = A.length,
        left_sums = {},
        right_sums = {};

    for(let i = 1; i < N; i++) {
        let j = N - i,
            prev_left = left_sums[i-1] === undefined ? 0 : left_sums[i-1],
            prev_right = right_sums[j+1] === undefined ? 0 : right_sums[j+1];
        left_sums[i] = A[i-1] + prev_left;
        right_sums[j] = A[j] + prev_right;
    }

    let min_diff;
    for(let i = 1; i < N; i++){
        let temp_diff = Math.abs(left_sums[i] - right_sums[i]);

        if(undefined === min_diff){
            min_diff = temp_diff;
        }
        else if (temp_diff < min_diff){
            min_diff = temp_diff;
        }
    }

    return min_diff;
}