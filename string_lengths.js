const array = ['apple', 'pear', 'bananas', 'watermelon', 'mango', 'pear', 'apple', 'bananas', 'pear', 'strawberry', 'pineapple'];


  
const res = array.reduce((acc,curr)=> (acc[curr]=curr.length,acc),{});
console.log(res)

 
