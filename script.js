const arr1 = ['a', 'b', 'c'];
const arr2 = ['A', 'B', 'C'];
const arr3 = ['1', '2', '3'];
const arr4 = ['!', '@', '#'];
const final = [];
var bArr1 = true;
var bArr2 = false;
var bArr3 = true;
var bArr4 = false;

// final.push(...arr1, ...arr2, ...arr3, ...arr4);

// for (i = 0; i < final.length; i++) {
//     console.log(final[i]);
// }

function bArr1Check() {
    if (bArr1 === true) {
        final.push(...arr1);
        bArr2Check();
    } else {
        bArr2Check();
    }
}
function bArr2Check() {
    if (bArr2 === true) {
        final.push(...arr2);
        bArr3Check();
    } else {
        bArr3Check();
    }
}
function bArr3Check() {
    if (bArr4 === true) {
        final.push(...arr4);
        bArr4Check();
    } else {
        bArr4Check();
    }
}
function bArr4Check() {
    if (bArr4 === true) {
        final.push(...arr4);
        console.log(final);
    } else {
       console.log(final);
    }
}

bArr1Check();