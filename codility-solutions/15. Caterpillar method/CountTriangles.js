function solution(A) {
    let n = A.length,
        triangles = 0;

    A.sort((a, b) => a - b);
    for (let p = 0; p < n - 2; p++) {
        let r = p + 2;
        for (let q = p + 1; q < n - 1; q++) {
            let pq = A[p] + A[q];
            // find the biggest possible r for which A[p] + A[q] is still larger
            while (pq > A[r] && r < n) {
                r++;
            }
            // we have reached the largest possible r
            // everything between r and q minus 1 is a triangle
            triangles += r - q - q;
        }
    }

    return triangles;
}


// Time complexity: O(N^2);
// Only 90% - one perf test fails (times out);
// Needs to be a real caterpillar for q & r in order to be optimal
function countTriangles(A) {
    let n = A.length,
        triangles = 0;

    A.sort((a, b) => a - b);
    for (let p = 0; p < n - 2; p++) {
        for (let q = p + 1; q < n - 1; q++) {
            for (let r = q + 1; r < n; r++) {
                let pq = A[p] + A[q];
                if (pq <= A[r]) {
                    break;
                }
                else {
                    triangles++;
                }
            }
        }
    }

    return triangles;
}
