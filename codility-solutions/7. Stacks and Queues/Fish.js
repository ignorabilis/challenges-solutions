function solution(A, B) {
    let upstream = [],
        downstream = [],
        n = A.length;

    for(let i = 0; i < n; i++){
        let current_fish = A[i],
            stream = B[i] === 1 ? downstream : upstream,
            enemy_stream = B[i] === 1 ? upstream : downstream,
            enemy_fish = enemy_stream.pop();

        //console.log(current_fish, enemy_fish)

        // if 1 (downstream) we only add the fish
        // because it cannot meet with fish that already
        // flew upstream
        if(enemy_fish && B[i] === 0){
            while(enemy_fish !== undefined && current_fish > enemy_fish){
                enemy_fish = enemy_stream.pop();
            }

            // all enemy_fish have been eaten by the current_fish
            if(enemy_fish === undefined){
                stream.push(current_fish);
            }
            else {
                enemy_stream.push(enemy_fish);
            }
        }
        else {
            stream.push(current_fish);
            if(enemy_fish !== undefined){
                enemy_stream.push(enemy_fish);
            }
        }

        //console.log(upstream, downstream);
    }

    return upstream.length + downstream.length;
}
