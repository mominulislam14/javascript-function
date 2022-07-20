// [function using-01]


// let car = {
//         brand: "Toyota",
//         model: "Corolla",
//         price: 3000000,
//         color: "White",
//         specifications: {
//              engine: "V6",
//              transmission: "Automatic",
//              mileage: "10KMPL",
//              fuel: "Petrol"
//          },
//          comment: function() {
//              console.log(`The car is a ${this.brand} Brand which milege is ${this.specifications.mileage} is so cool`);
//          }
//      }
    
//      console.log(car["model"])
//      console.log(car.comment())


// [function using-02]

// function add(){
//     x = 10;
//     y = 15;
//     console.log(x+y);
// }
// add();


// [function using-03]

// function add(){
//     x = 10;
//     y = 25;
//     return x+y;
// }
// // console.log(add());

// let a = add();
// console.log(a);

// [function using-04]

// function add(x,y){
//     // x = 10;
//     // y = 25;
//     return x+y;
// }
// let a = add(40,50);
// console.log(a);


// [function using-05]

function add(...x){
    var sum = 0;
    x.forEach(function(x){
        sum = sum + x;
    })
    console.log(sum);
}
add(4,4,5,6);

// [function using-06]

//let add = (...x) => {
    //     // x is array
    //     var sum = 0;
    //     x.forEach(function(x) {
    //         sum = sum + x;
    //     })
    //     console.log(sum);
    // }
    // add(1,3, 4, 5, 6, 7, 8, 9, 10);
    
//[function using-06]

    // let ourCustomFun = x => {
    //     console.log("Hello World " + x);
    // }
    // ourCustomFun("JS")
