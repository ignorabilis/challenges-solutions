function peek(st){
    return st[st.length - 1]
}

function solution(S) {
    let n = S.length,
        st = [],
        stn_count = 0;

    for(let i = 0; i < n; i ++){
        let last_height = peek(st);

        // there are either no stones or they are too big => unsuitable
        while (last_height > S[i]) {
            last_height = st.pop();
            last_height = peek(st);
        }

        if(S[i] === last_height){
            // do nothing as the current stone is good enough
        }
        else {
            // the stone is larger or there is no stone
            // so add a new stone
            st.push(S[i]);
            stn_count++;
        }
    }

    return stn_count;
}
