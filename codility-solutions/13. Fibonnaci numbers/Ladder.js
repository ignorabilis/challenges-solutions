function genRemFibs(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;

    // we don't count the first two Fibonacci numbers
    // so we use n + 2
    for (let i = 2; i < n + 2; i++) {
        // the observation is that powers of 2 are just left shifts
        // (1 << 1) === 2
        // (1 << 2) === 4
        // (1 << 3) === 8 etc.
        // then modulo (%) of a power of 2 is just (x & (y - 1))
        // where y is a power of 2
        // finally the remainders of the previous two Fibonacci numbers
        // for any power of 2 if summed and divided by a lower power of 2
        // would give the proper result;
        // e.g.: 2^10 then 2^5
        // 1597 % 1024 = 573
        // then 573 % 32 = 29, which is the same as 1597 % 32 = 29
        // so we just record the remainders, otherwise we'll get an overflow
        // the 27th Fibonacci number is > 100 000, imagine the 50 000th Fibonacci...
        f[i] = (f[i - 1] + f[i - 2]) & ((1 << 30) - 1);
    }

    return f;
}

// the possible combinations of 1s and 2s are just the next Fibonacci number
// so 1 -> 1,
//    2 -> 2,
//    3 -> 3,
//    4 -> 5,
//    5 -> 8,
//    6 -> 13, etc.
// ---------------
// 1 (1)
// 1
// ---------------
// 2 (2)
// 1 1
// 2
// ---------------
// 3 (3)
// 1 1 1
// 1 2
// 2 1
// ---------------
// 4 (5)
// 1 1 1 1
// 2 1 1
// 1 2 1
// 1 1 2
// 2 2
// ---------------
// 5 (8)
// 1 1 1 1 1
// 2 1 1 1
// 1 2 1 1
// 1 1 2 1
// 1 1 1 2
// 2 2 1
// 2 1 2
// 1 2 2
// ---------------
// 6 (13)
// 1 1 1 1 1 1
// 2 1 1 1 1
// 1 2 1 1 1
// 1 1 2 1 1
// 1 1 1 2 1
// 1 1 1 1 2
// 2 2 1 1
// 2 1 2 1
// 2 1 1 2
// 1 2 1 2
// 1 1 2 2
// 1 2 2 1
// 2 2 2
function solution(A, B) {
    let L = A.length,
        F = genRemFibs(L),
        result = [];

    A.map((a, i) => {
        let b = B[i],
            // exclude the first two Fibonacci numbers, so + 2
            // and the array starts from 0 and not 1 so - 1
            combination = a + 2 - 1,
            f = F[combination],
            p = ((1 << b) - 1);

        result[i] = f & p;
    });

    return result;
}
