function nearestPow2(aSize) {
    return Math.pow(2, Math.floor(Math.log(aSize) / Math.log(2)));
}

function solution(N) {
    let nearest = nearestPow2(N),
        largest_gap = 0,
        current_gap = 0;

    for (let i = nearest; i >= 1; i = i / 2) {
        let diff = N - i;
        if (diff >= 0) {
            N = diff;
            if (current_gap > largest_gap) {
                largest_gap = current_gap;
            }
            current_gap = 0;
        }
        else {
            current_gap++;
        }
    }

    return largest_gap;
}
