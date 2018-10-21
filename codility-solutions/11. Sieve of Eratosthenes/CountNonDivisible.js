// Utility for getting all divisors
// Time complexity: O(sqrt(N))
function divisors(N) {
    let i = 1,
        divs = [];

    while (i * i < N) {
        let rem = N % i;
        if (rem === 0) {
            divs.push(i);
            divs.push(N / i);
        }

        i++;
    }

    if (i * i === N) {
        divs.push(i);
    }

    return divs;
}

// Time complexity: O(N * log(N))
// The non divisors count is actually
// all the elements minus the occurrences
// of each divisor
// There are at most log(N) divisors
// so iterating through all elements and their
// divisors is N * log(N)
function solution(A) {
    let occ = new Map(),
        n = A.length,
        nonDivsCounts = [];

    for (let i = 0; i < n; i++) {
        let el = A[i],
            elCount = occ.get(el);

        if (elCount === undefined) {
            occ.set(el, 1);
        }
        else {
            occ.set(el, ++elCount);
        }
    }

    for (let i = 0; i < n; i++) {
        let el = A[i],
            divs = divisors(el),
            divsCount = 0;

        for (let j = 0; j < divs.length; j++) {
            let divisor = divs[j],
                divCount = occ.get(divisor);

            divsCount += divCount === undefined ? 0 : divCount;
        }

        nonDivsCounts[i] = n - divsCount;
    }

    return nonDivsCounts;
}
