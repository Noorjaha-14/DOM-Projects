//1.
// let btn=document.createElement('button');
// btn.innerText="click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector('body').prepend(btn);

//2.
// let pa=document.querySelector('p');
// console.log(pa);
// //pa.getAttribute("class");
// //pa.setAttribute("class","newpara");
// pa.classList.add("newpara");

// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const div = document.querySelector('#box');

//console.log(btn);

                   //Event Object (e)
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);   //position  
    

//     //console.log('Button was Clicked')
// }

                 //Event Handling
// btn2.ondblclick = () => {
//     console.log('Button was Clicked 2x')
// }
// div.onmouseover = () => {
//     console.log('You are inside div')
// }


                   //Event Listeners
// btn1.addEventListener("click",()=>{
//     console.log("Button-1 Clicked-1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("Button-1 Clicked-2");
// });

// btn1.addEventListener("click",()=>{
//     console.log("Button-1 Clicked-3");
// });

// const clicked3=()=>{
//     console.log("Button-1 Clicked-3");   //storing in same location
// }

// btn1.addEventListener("click",clicked3);
// btn1.removeEventListener('click',clicked3);



//Q.Create a toggle button that changes the screen to dark-mode when clicked 7 Light-Mode when Clicked again.

// const btn=document.createElement('button');
// console.log(btn);
// btn.innerText="change Mode";
// btn.style.backgroundColor="purple";
// btn.style.color="white";
// btn.style.borderRadius="5px";
// document.body.append(btn);

// let currmode="light";

// btn.addEventListener('click',()=>{
//     if(currmode === 'light'){
//         currmode ='dark';
//        // document.body.style.backgroundColor="black";
//         document.body.classList.add('dark');  //using classlist we can also do same (style.css)
//         document.body.classList.remove('light');
//     }
//     else{
//         currmode ='light';
//          //document.body.style.backgroundColor="white";
//          document.body.classList.add('light');
//          document.body.classList.add('dark');
//     }
//     console.log(currmode);
// })


                      //classes & Objects
// const student ={
//     fullname:'Noorjaha',
//     marks:95.6,
//     printmarks:function(){
//         console.log("marks=",this.marks);  //student.marks
//     },
// };
// console.log(student.fullname);
// console.log(student.marks);

// //prototype
// const employee={
//     calctax1(){
//     console.log("Tax rate is 10%");
// },

// };

// const noora={
//     salary:1000000,
//     calctax2:function(){
//       console.log("Tax rate is 20%");
//  }
// };

// const noora2={
//     salary:1000000,
// };

// const noora3={
//     salary:1000000,
// };
// noora.__proto__ = employee;
// noora2.__proto__ = employee;
// noora3.__proto__ = employee;

//classes & objects
//class car{
    //constructor
//     constructor(brand,mileage){
//         console.log("Creating new objects");
//         this.brand=brand;
//         this,mileage=mileage;
//     }
//     start(){
//     console.log("start");
// }
// stop(){
//     console.log("stop");
// }
// setBrand(brand){
//     this.brand=brand;
// }
//}
//syntax of creating objects
//syntax:- let myobj=new Myclass();
// let BMW=new car("BMW",10);
// console.log(BMW);
//BMW.setBrand('BMW');
// let fortuner=new car("fortuner",20); //constructor
// console.log(fortuner)
//fortuner.setBrand('for');

//Inheritance
// class parent{
//     hello(){
//         console.log("Inheritance");
//     }
// }
// class child extends parent{}
// let obj=new child();

class person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}
class Engineer extends person{
    work(){
        console.log("solve Problems");
    }
}
let Nooraobj=new Engineer();
