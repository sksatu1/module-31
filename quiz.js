// 2
const items = {
    phone: 'samsung', watch: 'casio'
};
items.watch = 'titan';
// console.log(items);

// 3
// console.log(min( [1,3,2 ])) ? function min(nums) {  return Math.min(nums) }

// 4
// const cube = x => x * x * x; console.log(cube(2))


// 5
// const [a, b] = [1, 2, 3, 4, 45, 5]; console.log(a + b);


// 6
/* const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y); */


// 7
const nums = [1, 2, 3, 4, 5]; let output = nums.filter(n => n % 2); console.log(output);

// 8
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const bigFriend = friends.find(friend => friend.length == 5);
console.log(bigFriend);