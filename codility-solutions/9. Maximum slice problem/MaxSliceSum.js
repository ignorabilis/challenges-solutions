// max slice of a negative array
// is only one element, the one closer to 0
function solution(A) {
    let n = A.length,
        max_ending = A[0],
        max_slice = A[0];

    for(let i = 1; i < n; i++){
        // just take the element here instead of 0;
        // that way if all the elements are negative
        // we'll end up with the max negative element
        // which is also the max for the array
        max_ending = Math.max(A[i], max_ending + A[i]);
        max_slice = Math.max(max_slice, max_ending);
    }

    return max_slice;
}
