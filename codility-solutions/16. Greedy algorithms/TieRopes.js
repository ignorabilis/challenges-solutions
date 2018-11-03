// Time complexity: O(N)
function solution(K, A) {
    let n = A.length,
        currRope = 0,
        ropes = 0;

    for(let i = 0; i < n; i++){
        currRope += A[i];

        if(currRope >= K){
            currRope = 0;
            ropes++;
        }
    }

    return ropes;
}
