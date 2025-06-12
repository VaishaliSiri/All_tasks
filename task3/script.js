function array_cal(n, arr) {
    let new_arr = [];
    let carry = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let val = ((n * arr[i]) + carry);
        new_arr.unshift(val % 10);
        // val %= 10;
        carry = Math.floor(val / 10);


    }
    while (carry != 0) {
        new_arr.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return new_arr;
}
let myArr = [1];
function solve() {

    for (let i = 1; i <= 100; i++) {
        myArr = array_cal(i, myArr);
        
    }
    // const res = myArr;
    
    return myArr.join('');
}


console.log(solve());


