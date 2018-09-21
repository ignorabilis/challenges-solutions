function solution(S, P, Q) {
    const n = S.length,
        m = P.length,
        nuc_count = 4,
        ps = [];
    for(let i = 0; i < n; i++){
        let col;
        ps[i] = [];
        switch (S[i]) {
            case 'A':
                col = 0;
                break;
            case 'C':
                col = 1;
                break;
            case 'G':
                col = 2;
                break;
            case 'T':
                col = 3;
                break;
        }
        for (let j = 0; j < nuc_count; j++){
            let inc = j === col ? 1 : 0,
                prev = i === 0 ? 0 : ps[i - 1][j];
            ps[i][j] = prev + inc;
        }
    }

    let q = [];
    for(let i = 0; i < m; i++){
        let start = P[i],
            end = Q[i];

        for(let j = 0; j < nuc_count; j++){
            let ps_start = start === 0 ? 0 : ps[start - 1][j],
                ps_end = ps[end][j],
                oc = ps_end - ps_start;

            if(oc > 0){
                q[i] = j + 1;
                break;
            }
        }
    }

    return q;
}
