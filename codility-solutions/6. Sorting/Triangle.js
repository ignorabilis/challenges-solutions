function solution(A) {
    let n = A.length;
    A.sort((a,b) => a - b);

    for(let i = 0; i < n; i++){
        // not enought elements to make a triangle
        if (n - i < 3){
            return 0;
        }

        // when summed negative numbers become smaller,
        // zero + next number is at most === to the number after next number
        // so the smallest possible number that forms a triangle is 1
        if(A[i] < 1){
            continue;
        }

        let p = i,
            q = i + 1,
            r = i + 2,
            sum_pq = A[p] + A[q],
            sum_qr = A[q] + A[r],
            sum_rp = A[r] + A[p];

        if (sum_pq > A[r] && sum_qr > A[p] && sum_rp > A[q]){
            return 1;
        }
    }

    // the for loop won't be hit if there are 0 elements
    return 0;
}
