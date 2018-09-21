function solution(N, A) {
    let last_glob_min = 0,
        max = 0,
        counters = [];

    for(let i = 0; i < N; i++){
        counters[i] = 0;
    }

    for(let i = 0; i < A.length; i++){
        let action = A[i] - 1;
        if (action === N){
            last_glob_min = max;
        }
        else {
            let current_c = counters[action];

            if (current_c < last_glob_min){
                current_c = last_glob_min + 1;
            }
            else {
                current_c++;
            }

            //console.log(current_c)
            if (current_c > max) {
                max = current_c;
            }

            counters[action] = current_c;
        }

        //console.log(last_glob_min);
    }

    for(let i = 0; i < N; i++){
        if(counters[i] < last_glob_min){
            counters[i] = last_glob_min;
        }
    }

    return counters;
}
