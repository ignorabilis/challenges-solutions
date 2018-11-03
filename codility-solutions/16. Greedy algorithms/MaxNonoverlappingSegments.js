// Time complexity: O(N)
function solution(A, B) {
    let n = A.length,
        prevA = A[0],
        prevB = B[0],
        nonOverlap = 1;

    if (n === 0) {
        return 0;
    }

    for(let i = 1; i < n; i++){
        let currA = A[i],
            currB = B[i];

        if(!((prevA <= currA && currA <= prevB) ||
            (currA <= prevA && prevA <= currB))) {
            nonOverlap++;

            prevA = currA;
            prevB = currB;
        }
    }

    return nonOverlap;
}
