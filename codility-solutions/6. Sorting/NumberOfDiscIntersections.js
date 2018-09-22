// the idea here is that we get the ranges instead of the circles
// then we sort the start & end of these ranges
// we then iterate through the starts
// for each start we add one circle; for each end we subtract one
function solution(A) {
    let n = A.length,
        start_r = [],
        end_r = [];

    for (let i = 0; i < n; i++) {
        let start = i - A[i],
            end = i + A[i];

        start_r[i] = start;
        end_r[i] = end;
    }

    let sort_fn = (a, b) => a - b;
    start_r.sort(sort_fn);
    end_r.sort(sort_fn);

    let j = 0,
        circles = 0,
        intersections = 0;

    const ten_mil = 1000 * 1000 * 10;

    for (let i = 0; i < n; i++) {
        let start = start_r[i],
            end = end_r[j];

        // find which circles no longer contain start
        while (start > end) {
            j++;
            circles--;
            end = end_r[j];
        }

        intersections = intersections + circles;
        circles++;

        if (ten_mil < intersections) {
            return -1;
        }
    }

    return intersections;
}
