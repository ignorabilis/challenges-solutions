function solution(A) {
    // with the observation that the min average can only be 2
    // or 3 elements we can traverse the whole array and find
    // the min average in O(N) time, O(1) space

    let n = A.length,
        avg_min = Infinity,
        avg_min_pos = -1;

    for (let i = 0; i < n - 2; i++){
        let avg_2 = (A[i] + A[i + 1]) / 2;
        let avg_3 = (A[i] + A[i + 1] + A[i + 2]) / 3;

        if(avg_2 < avg_min){
            avg_min = avg_2;
            avg_min_pos = i;
        }

        if(avg_3 < avg_min){
            avg_min = avg_3;
            avg_min_pos = i;
        }
    }

    // check the last two elements, since they are left unchecked
    let avg_last = (A[n - 2] + A[n - 1]) / 2;
    if(avg_last < avg_min){
        avg_min = avg_last;
        avg_min_pos = n-2;
    }

    return avg_min_pos;
}
