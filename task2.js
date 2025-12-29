
const we = {are: {the: {best: "Koda"}}}
const {are:{the:{best}}} = we
console.log(best)

const hello = { 
    world: "Hello World"
}
const {world} = hello
console.log(world)

const obj = { str: [0,1,2,[0,[0,1,{man: [{tech: {academy: "Tech Academy"}},1]}]]]}
const {academy} = obj.str[3][1][2].man[0].tech
console.log(academy)

const my = [{favourite: [0,1,2,{fruit: {is: "Apple"}}]},1]
const {is} = my[0].favourite[3].fruit
console.log(is)

// const num = {
//     first: [0,16],
//     second: [0,1,16]
// }
// console.log(num.first[1]+num.second[2])





