function gcd(a, b) {
    let rem = a % b;
    if (rem === 0) {
        return b;
    }
    else {
        return gcd(b, rem)
    }
}

// use the fact that the gcd of A & B
// can be used to generate new gcd with A & B,
// thus possibly reducing A & B to 1 or some
// other number
function remPrimes(n, gcdAB) {
    let gcdN = gcd(n, gcdAB);

    while (gcdN != 1){
        n /= gcdN;
        gcdN = gcd(n, gcdN);
    }

    return n;
}

// Time complexity (according to codility):
// O(Z * log(max(A) + max(B))**2)
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
                remA = remPrimes(a, gcdAB),
                remB = remPrimes(b, gcdAB);

            if (remA === 1 && remB === 1) {
                count++;
            }
        }
    }

    return count;
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
                    // divide by j as much as possible
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
