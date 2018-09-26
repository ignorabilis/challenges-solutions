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
        l_count = 0;

    for (let [key, value] of el_count) {
        if (value > l_count) {
            l_count = value;
            leader = key;
        }
    }


    let equi = 0,
        curr_l_count = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] === leader) {
            curr_l_count++;
        }

        let curr = i + 1,
            rem = n - curr,
            h_curr = Math.floor(curr / 2),
            h_rem = Math.floor(rem / 2),
            rem_l_count = l_count - curr_l_count;

        // optimization - not needed, but it is obvious that 
        // once there are no remaining leaders equi leaders cannot be added
        if (rem_l_count === 0) {
            break;
        }

        if (curr_l_count > h_curr && rem_l_count > h_rem) {
            equi++;
        }

        //console.log(curr_l_count, rem_l_count)
    }

    return equi;
}
