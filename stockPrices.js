
const best = (arr) => {
    let num = 0;
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(num < (arr[j] - arr[i]) && arr[j] > arr[i]){
                num = arr[j] - arr[i];
            }
        }
    }
    return num;
}

console.log(best([2, 3, 10, 6, 4, 8, 1]))