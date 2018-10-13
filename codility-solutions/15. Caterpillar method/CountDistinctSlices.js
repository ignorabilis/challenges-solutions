const upper = 1000 * 1000 * 1000;

// time complexity: O(N)
// Note that M is not used - this is because a map is used
// if we were to use an array M would be needed
function solution(M, A) {
    let n = A.length,
        elements = new Map(),
        disCount = 0,
        distinct = 0,
        front = 0;

    for (let back = 0; back < n; back++) {
        while (front < n && !elements.get(A[front])) {
            elements.set(A[front], true);
            disCount++;
            distinct += disCount;
            front++;
            
            if (distinct >= upper) {
                return upper;
            }
        }

        disCount--;
        elements.set(A[back], false);
    }

    return distinct;
}