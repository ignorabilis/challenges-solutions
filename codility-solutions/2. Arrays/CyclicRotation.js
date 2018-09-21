function solution(A, K) {
    let N = A.length,
        disp = K % N,
        diff = N - disp,
        disp_arr = [];

    for (let i = 0; i < N; i++) {
        let pos = i + disp;

        if (pos >= N){
            pos = i - diff;
        }

        disp_arr[pos] = A[i];
    }

    return disp_arr;
}
