// worst-case time complexity: O(sqrt(N)),
// however this is true only for scenarios where
// one of the numbers is a prime number and the other one is 2
function solution(N) {
    let start = Math.floor(Math.sqrt(N)),
        a, b;

    for(let i = start; i > 0; i--){
        let rem = N % i;

        if(rem === 0) {
            a = N / i;
            b = i;
            break;
        }
    }

    return 2 * (a + b);
}