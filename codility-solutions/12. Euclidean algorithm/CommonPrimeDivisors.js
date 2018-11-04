function gcd(a, b) {
    let rem = a % b;
    if (rem === 0) {
        return b;
    }
    else {
        gcd(b, rem)
    }
}

function solution(A, B) {
    let n = A.length,
        count = 0;

    for (let i = 0; i < n; i++) {
        let a = A[i],
            b = B[i];
        if (a === b) {
            count++;
        }
        else {
            let gcdAB = gcd(a, b),
                remA = a / gcdAB,
                remB = b / gcdAB,
                gcdRemA = gcd(a, remB),
                gcdRemB = gcd(b, remA);
        }
    }
}

function findPrimes() {

}

// Only 92% - one perf test fails (times out)
// Time complexity (according to codility):
// O(Z * log(max(A) + max(B))**2) or O(Z * (max(A) + max(B))**(1/2))
function commonPrimes(A, B) {
    let n = A.length,
        count = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] === B[i]) {
            count++;
        }
        else {
            let bigger = A[i] > B[i] ? A[i] : B[i],
                a = A[i],
                b = B[i];

            for (let j = 2; j * j <= bigger; j++) {
                let remA = a % j,
                    remB = b % j;
                if (remA === 0 && remB === 0) {
                    // divide by j do otkat
                    while (a % j === 0) {
                        a /= j;
                    }
                    while (b % j === 0) {
                        b /= j;
                    }

                    if (a === b) {
                        count++;
                        break;
                    }
                }

                // one of the numbers has a prime divisor
                // that the other does not have
                else if ((remA === 0 && remB != 0)
                    || remA != 0 && remB === 0) {
                    break;
                }
            }
        }
    }

    return count;
}
