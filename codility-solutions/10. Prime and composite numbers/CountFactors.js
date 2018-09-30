// time complexity: O(sqrt(N))
function solution(N) {
    let i = 1,
        d_count = 0;

    while (i * i < N) {
        let rem = N % i;
        if (rem === 0) {
            d_count += 2;
        }

        i++;
    }

    if (i * i === N) {
        d_count++;
    }

    return d_count;
}
