// time complexity: O(log(N + M))
// the observation is that if there are 5 chocolates
// and we eat every fifth then we are going to eat only one;
// if there are 10 we are going to eat 2 of them
// the first and the fifth, etc. So it's basically N / gcd;
// if gcd is one we are going to eat all of them
function gcd(a, b){
    if (a % b === 0) {
        return b;
    }
    else {
        return gcd(b, a % b);
    }
}

function solution(N, M) {
    let gcd_res = gcd(N, M);

    return N / gcd_res;
}