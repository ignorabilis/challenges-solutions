function solution(A) {
    let el_count = new Map(),
        el_pos = new Map(),
        n = A.length;

    for (let i = 0; i < n; i++) {
        let curr_el = A[i],
            curr_count = el_count.get(curr_el);

        if (curr_count) {
            el_count.set(curr_el, ++curr_count);
        }
        else {
            el_count.set(curr_el, 1);
            el_pos.set(curr_el, i);
        }
    }

    let leader,
        l_count = 0,
        half = Math.floor(n / 2);

    for (let [key, value] of el_count) {
        if (value > l_count) {
            l_count = value;
            leader = key;
        }
    }

    if (l_count > half) {
        return el_pos.get(leader);
    }
    else {
        return -1;
    }
}
