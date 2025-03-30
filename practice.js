//Data structures:
console.log("Hello, World!");

const allStudents=["vijay","ajith","rajini","kamal","simbu","rajini"]

function checkStudent(allStudents,Student){
  for (let i=0;i<allStudents.length-1;i++){
    if(allStudents[i]===Student){
      console.log(`${Student} is there`) 
    }
  }
}

checkStudent(allStudents,'rajini')



// -------custom Array---------


class MyArray {
  constructor(){
    this.length=0
    this.data={}
  }
  push(item){
    this.data[this.length]=item
    this.length++
    return this.length
  }
  get(item){
    return this.data[item]
  }
  pop(){
    const lastElemant=this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--

    return lastElemant
  }
  shift(){
    const firstelement=this.data[0]
    const len=this.length
    for (let i=0; i<len-1;i++){
      this.data[i]=this.data[i+1]
    }
    this.length--
    delete this.data[this.length-1]
    return firstelement}
  delete(id){
    const len=this.length-1
    for (let i=id; i<len;i++){
      this.data[i]=this.data[i+1]
    }
    delete this.data[len]
    this.length--

  }
}

const mine= new MyArray();
const mine2= new MyArray();
mine.push("hi-0")
mine.push("hello-1")
mine.push("hello-2")
mine.push("hello-3")
mine.push("hello-4")
mine.push("hello-5")
mine.push("hello-6")
mine.push("hello-7")
//console.log("mine------>",mine)
console.log(mine)
mine2.push("hiii")
mine2.push("hiii-1")
mine2.push("hiii-2")
mine2.push("hiii-3")
mine2.push("hiii-4")


//Reverse a string and palindrome
let word="Racecar"

function palindrome(word) {
   return word.toLowerCase().split("").reverse().join("")===word.toLowerCase()?"palindrome":'not palindrome'
}


function reversestr(word){
  let lowercaseword=word.toLowerCase()
  let reversed=''
  console.log(lowercaseword)
  for (let index = lowercaseword.length-1; index >=0; index--) {
    reversed =reversed+ lowercaseword[index];
    console.log(reversed)
  }
}
//reversestr(word)
console.log(word)



//Reverse a interger
const number=105

function reverseNumber(number) {
  let reverseNumber=number.toString().split("").reverse().join("")
  reverseNumber=parseInt(reverseNumber)
  console.log(reverseNumber,"-------",typeof(reverseNumber)) 
  return reverseNumber*Math.sign(number)
}
//console.log(reverseNumber(number))


let sentence="naa than daw leo daas"

function sentencecapitalized(sentence) {
    let capitalized=sentence.split(" ")
    let answerArray=[]
    for (let index = 0; index < capitalized.length; index++) {
      let word=capitalized[index].split("")
      let firstletter=word.shift().toUpperCase()
      answerArray.push(firstletter+word.join(""))
    }
    return answerArray.join(" ")
}

console.log(sentencecapitalized3(sentence))
sentencecapitalized3(sentence)

function sentencecapitalized2(sentence) {
  let capitalized=sentence.split(" ")
  let answerArray=capitalized.map((word)=>{
    let word2=word.split('')
    let firstletter=word2.shift().toUpperCase()

    return firstletter+word2.join('')
  })
  return answerArray.join(" ")
}


function sentencecapitalized3(sentence) {
  return sentence.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1))
.join(" ")
}

console.log(sentencecapitalized3(sentence))



//FizzBuzz
const number=15

function Fizzbuzz(n) {
  console.log(n)

  let i=1
  while(i<=n){
    if (i%3===0 && i%5===0 ) {
      console.log('fizzBuzz')
    }
     else if (i%5===0) {
      console.log('Buzz')
    }
    else if (i%3===0) {
      console.log('fizz')
    }
     else {
      console.log(i)
    }
    i++
  }
  
}
Fizzbuzz(number)


//max-price
const price=[7,1,5,3,6,4]

function maxProfit(price) {
  let minprice=Infinity
  let maxprofit=0
  for (let index = 0; index < price.length; index++) {
    let currentprice=price[index]
    minprice=Math.min(minprice,currentprice)
    profit=currentprice-minprice
    maxprofit=Math.max(maxprofit,profit)

  }
  console.log(maxprofit)
}

maxProfit(price) 


//chuncked array
const array1=[1,2,3,4,5,6,7,8,9,3,3]

function chunkedarray(array,size) {
  let chunked=[]
  for (let index = 0; index <= array.length-1; index=index+size){
    let chunk=array.slice(index,index+size)
    chunked.push(chunk)
  }
  return chunked
}
//console.log(chunkedarray(array,3))

// two sum

const twosumarray=[1,3,7,9,2]

function twosum(array,target) {
  let answer=[]
  for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
          if(array[i]+array[j]===target){
            answer.push(i,j)

          }
          
        }
  }
  return answer
}
console.log(twosum(twosumarray,11))



class Node{
  constructor(value){
    this.head=value
    this.next=null
  }
}

class Linkedlist{
  constructor(value){
    this.head=new Node(value)
    this.tail=this.head
    this.length=1
  }
  push(value){
    let newNode=new Node(value)
    if(!this.head){
      this.head=newNode
      this.tail=newNode


    }
    this.tail.next=newNode
    this.tail=newNode
    this.length=this.length+1
  }
  pop(){
    if(!this.length){
      return undefined
    }
    let temp=this.head
    let prev=this.head
    while(temp.next){
      prev=temp
      temp=prev.next
    }
    this.tail=prev
    this.tail.next=null
    this.length--
    if(this.length===0){
      this.head=null
      this.tail=null
    }

    return temp
  }
}


const myLinkedlist=new Linkedlist("first")
myLinkedlist.push('second')
myLinkedlist.push('third')
myLinkedlist.push('forth')
myLinkedlist.pop()
myLinkedlist.pop()


console.log(myLinkedlist)


