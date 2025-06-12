function array_cal(n, arr) {
    let new_arr = [];
    let carry = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let val = ((n * arr[i]) + carry);
        new_arr.unshift(val % 100000);
        // val %= 10;
        carry = Math.floor(val / 100000);


    }
    while (carry != 0) {
        new_arr.unshift(carry % 100000);
        carry = Math.floor(carry / 100000);
    }
    return new_arr;
}
let myArr = [1];
function solve() {

    for (let i = 1; i <= 100; i++) {
        myArr = array_cal(i, myArr);
        // console.log(myArr)
    }
    // const res = myArr;
    
//   myArr = myArr.map(element => element.toString().padStart(5,'0'));

    for(let h = 1;h<myArr.length;h++){
        let str = myArr[h].toString();
        while(str.length<5){
            str = '0' + str;
        }
        myArr[h] = str;
    }
    return myArr.join('');
}

function to_cal_digits(num){
    let con = 0;
    while(num>0){
        con++;
        num = num/10;
    }
    // console.log(con);
    return con;
}
console.log(solve());


