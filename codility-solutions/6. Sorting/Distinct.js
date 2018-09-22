// does not use sorting;
// perf is O(N), space is O(N) (worst case)
function solution_alt(A) {
    let n = A.length,
        occ = new Map();

    for (let i = 0; i < n; i++) {
        let dis = occ.get(A[i]);

        if (dis) {
            occ.set(A[i], ++dis);
        }
        else {
            occ.set(A[i], 1);
        }
    }

    return occ.size;
}

// uses sorting
// perf is O(N*log(N) + N), space is O(1)
function solution(A) {
    A.sort((a, b) => a - b)

    let n = A.length,
        prev,
        dis = 0;

    for (let i = 0; i < n; i++) {
        if (prev !== A[i]) {
            prev = A[i];
            dis++;
        }
    }

    return dis;
}
