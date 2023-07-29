// ques- 7- Reversing an array using Reduce method

const reversedArr = arr.reduce((acc, current) => {
    return [current, ...acc];
  }, []);
  
  console.log(reversedArr);

// Q9. What will the code below output to the console and why?

var arr1 = "john".split(''); 

var arr2 = arr1.reverse();

var arr3 = "jones".split('');

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
//array 1: length=5 last=j,o,n,e,s

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//index.js:1997 array 2: length=5 last=j,o,n,e,s



// Q11. Check the below given code, if there are any issues, fix them and explain the output

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {

  if (num % 2 === 0) {

    acc.evens.push(num);

  } else {

    acc.odds.push(num);

  }

  return acc;

});



console.log(result);


//Solution of ans -11 iis


const result2 = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.evens.push(num);
    } else {
      acc.odds.push(num);
    }
    return acc;
  }, { evens: [], odds: [] });
  
  console.log(result2);


