//1.
function betweenNum(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(betweenNum(1, 4));
console.log(betweenNum(5, 10));

//2.
function createPhoneNumber(numbers) {
  let one = "";
  let two = "";
  let three = "";

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      one += numbers[i];
    } else if (i < 6) {
      two += numbers[i];
    } else {
      three += numbers[i];
    }
  }
  return `(${one}) ${two}-${three}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//3.
function reverseMessage(str) {
  return str.split("").reverse().join("");
}

console.log(reverseMessage("Good Bye"));

//4.
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
const sum2 = sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0)
console.log(sum);
console.log(sum2);

//5.
function isPow(n) {
  let ans = -1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (i * i === n) {
      ans = (i + 1) * (i + 1);
      break;
    }
  }

  return ans;
}

const result = isPow(121); // 144
const result2 = isPow(10); // -1
const result3 = isPow(9); // 16
console.log(result);
console.log(result2);
console.log(result3);
