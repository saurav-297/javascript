// const x =2;
// let y = 3;
// const sum=x+y;
// console.log(sum)
// let name = "saurav";
// let age = 25;
// console.log(`hello my name is ${name} and my age is ${age}`);
// let user = 
// [{
//     company_name : "Trends",
//     designed_by:"ambani ka nana",
//     since:"after the loss of dheeeru bhai",
//     turn_over:5000000000,
//     address: {
//     Building_name:"trends mall",
//     near:"opposite silver mall"    


//     }
//  },
//  {
//         company_name : "TCS",
//     designed_by:"TATA groups",
//     since:"jb hm paida nhi hue the ",
//     turn_over:80000000000000000000000,
//     address: {
//     Building_name:"IT park",
//     near:"Bhawarkuwa road" ,
//     }

//  }
// ]
   


  
// console.log(user);
// let new_Name=[
//     first_name="saurav",
//     last_name="kumar"
// ]
// function reverse(index,array,value){
//     console.log(index,array,value);

// }
// new_Name.map(reverse)

// let date= new Date()
// console.log(date.toString());
let product=[{
    name:"ankush",
    sname:"saxena"
}
,
{
    name:"prateek",
    sname:"yadav"
}
]
function count(value,index,array){
    console.log(value,index,array);

}
// function kap(callfun)
// {
//     for(let i = 0 ;i<product.length;i++)
//     {
//         let value=product[i]
//         let index=i
//         let array=product
//         callfun(value,index,array)
//     }
// }
product.map(count)