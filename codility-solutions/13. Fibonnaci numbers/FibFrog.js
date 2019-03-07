function genFibs(n) {
    let a = [];
    a[0] = 0;
    a[1] = 1;

    for (let i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2];
    }

    return a;
}

// time complexity: O(N * log(N))
// that is because we iterate through all leaves in groups
// (to avoid unnecessary moves we mark the previously visited)
// and for each leaf we test with all the possible Fibonacci
// numbers, which are log(N)
function solution(A) {
    // enough so that the last fib number is just before 100,000
    let fn = 26,
        f = genFibs(fn),
        leaves = A,
        n = A.length,
        visited = [],
        current = new Set(),
        next = new Set(),
        jumps = 0;

    current.add(-1); // the frog is starting from pos -1
    leaves[n] = 1; // the frog can always jump on the other end

    // jump until reaching N or until there are no leaves to jump on
    while (!current.has(n) && current.size > 0) {
        // try to make a jump; if next is empty
        // we'll return -1 anyway
        // if there's at least one leaf the frog jumped
        // so jumps increases
        jumps++;

        // from the current positions jump to all possible
        // next positions that have not been visited
        [...current].map(pos => {
            // check for all possible fib jumps
            // the third fibonacci number is 1
            // so start from it
            for (let i = 2; i < fn; i++) {
                let j = f[i],
                    nextPos = pos + j;

                if (leaves[nextPos] && !visited[nextPos]) {
                    next.add(nextPos);
                    visited[nextPos] = true;
                }
            }
        });

        // prepare next and current
        current = new Set([...next]);
        next = new Set();
    }

    // no leaves found to jump on next
    // so the frog cannot finish
    // hence return -1
    if (current.size === 0) {
        return -1;
    }

    // the loop has finished and there are next
    // possible jumps, so one of them is N
    return jumps;
}
