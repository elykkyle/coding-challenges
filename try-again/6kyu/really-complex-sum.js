/*
https://www.codewars.com/kata/5a981424373c2e479c00017f

DESCRIPTION:
Your program will receive an array of complex numbers represented as strings. Your task is to write the complexSum function which have to return the sum as a string.

Complex numbers can be written in the form of a+bi, such as 2-3i where 2 is the real part, 3 is the imaginary part, and i is the "imaginary unit".

When you add two complex numbers, the real and the imaginary part needs to be added separately,so for example 2+3i + 5-i = (2+5)+(3i-i) = 7+2i

Both the complex and the imaginary part can be 0, so 123, -2i or i are also complex numbers.

Complex numbers must be returned in their shortest form, so e.g. 0+1*i should be just i, and 10+0i should be 10. This is also how you will get them!

For simplicity, the coefficients will always be integers. If the array is empty, return 0.
*/

/* function complexSum(arr) {
  const symbols = /\+|-/;
  let realSum = 0;
  let iSum = 0;
  arr.forEach((el) => {
    const mid = el.search(symbols);
    if (mid != -1) {
      const realNum = parseInt(el.slice(0, mid));
    }

    let op = el.slice(mid, mid + 1);
    let iNum = el.slice(mid + 1);
    iNum === 'i' ? (iNum = 1) : (iNum = parseInt(iNum.slice(0, -1)));
    if (op === '+') {
      iSum += iNum;
    } else if (op === '-') {
      iSum -= iNum;
    }
    realSum += realNum;
  });
  return `${realSum}${iSum > 0 ? '+' : ''}${iSum > 1 ? iSum : ''}${
    iSum != 0 ? 'i' : ''
  }`;
}


 */

console.log(complexSum(['2+3i', '3-i'])); // "5+2i"
console.log(complexSum(['0'])); // "0"

///From Code Wars:
function complexSum(arr) {
  let pattern1 = /^(-)?(\d*)?i/;
  let pattern2 = /(-)?(\d*)?([-+])?(\d*)?i/;

  let realSum = 0,
    imgSum = 0,
    realStr = '',
    imgStr = '',
    result = '';
  for (let i = 0; i < arr.length; i++) {
    let strNum = arr[i],
      realNum = 0,
      imgNum = 0;
    if (strNum.indexOf('i') !== -1) {
      // contains imaginary part
      let parts;
      if ((parts = strNum.match(pattern1))) {
        // imaginary part only
        imgNum = Number((parts[1] ? '-' : '') + (parts[2] ? parts[2] : '1'));
      } else {
        // real and imaginary parts
        parts = strNum.match(pattern2);
        realNum = Number((parts[1] === '-' ? '-' : '') + parts[2]);
        imgNum = Number(
          (parts[3] === '-' ? '-' : '') + (parts[4] ? parts[4] : '1')
        );
      }
    } else {
      // real part only
      realNum = Number(strNum);
    }
    //console.log("real " + realNum);
    //console.log("img " + imgNum);
    realSum += realNum;
    imgSum += imgNum;
  }
  console.log('real ' + realSum);
  console.log('img ' + imgSum);
  if (!realSum && !imgSum) return '0';
  if (realSum) {
    realStr += realSum;
  }
  if (imgSum) {
    imgStr +=
      (imgSum > 0 && realSum ? '+' : '') +
      (Math.abs(imgSum) === 1 ? imgSum.toString().replace('1', '') : imgSum) +
      'i';
  }
  result = realStr + imgStr;
  return result;
}
