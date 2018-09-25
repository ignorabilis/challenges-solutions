function solution(S) {
    let n = S.length,
        st = [];

    for(let i = 0; i < n; i ++){
        let br = S[i],
            br_p;

        if('(' === br){
            st.push(br);
        }
        else {
            br_p = st.pop();

            if('(' === br_p && ')' === br) {
                // ps - this block here obviously does nothing
            }
            else {
                return 0;
            }
        }
    }

    return st.length > 0 ? 0 : 1;
}
