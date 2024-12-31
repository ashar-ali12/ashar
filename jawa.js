// alert("HELLO WORLD");

// console.log("HELLO ASHAR");
// console.log(1+7);
// console.log(9);
// console.log(12);

// var txt1 = 9;
// var txt2 = 12;

// console.log("THE SOME OF", txt1 , "AND" , txt2 , "IS" , txt1 + txt2);
// console.log("THE SUB OF", txt1 , "AND" , txt2 , "IS" , txt1 - txt2);
// console.log("THE MULT OF", txt1 , "AND" , txt2 , "IS" , txt1 * txt2);
// console.log("THE DIVIDE OF", txt1 , "AND" , txt2 , "IS" , txt1 / txt2);
// console.log("THE POWER OF", txt1 , "AND" , txt2 , "IS" , txt1 ** txt2);
// console.log("THE REMINDER OF", txt1 , "AND" , txt2 , "IS" , txt1 % txt2);

// var numb1 = prompt("Enter First Number:");
// var numb2 = prompt("Enter second Number:");

// console.log(`The Sum Of ${numb1}& ${numb2} is: ${Number(numb1) + Number(numb2)}`);
// console.log(`The Sub Of ${numb1}& ${numb2} is: ${Number(numb1) - Number(numb2)}`);
// console.log(`The mul Of ${numb1}& ${numb2} is: ${Number(numb1) * Number(numb2)}`);
// console.log(`The divide Of ${numb1}& ${numb2} is: ${Number(numb1) / Number(numb2)}`);
// console.log(`The power Of ${numb1}& ${numb2} is: ${Number(numb1) ** Number(numb2)}`);
// console.log(`The reminder Of ${numb1}& ${numb2} is: ${Number(numb1) % Number(numb2)}`);


// document.getElementById("hr").innerHTML=`<p>The Sum Of ${numb1} & ${numb2} is ${Number(numb1) + Number(numb2)}`;
// document.getElementById("hr1").innerHTML = `<p>The Sub Of ${numb1} & ${numb2} is ${Number(numb1) - Number(numb2)}</p>`
// document.getElementById("hr2").innerHTML = `<p>The ul Of ${numb1} & ${numb2} is ${Number(numb1) * Number(numb2)}</p>`

// var marks = 30;
// var marks = prompt("Enter First marks:");
// if(marks > 50){
//     document.getElementById("hr").innerHTML = "congrate you are pass";

// }else{
//         document.getElementById("hr").innerHTML = "congrate you are fail";

// }

// var age = prompt("Enter First age:");
//     document.getElementById("hr1").innerHTML = "you can drive"
// // var age = 10;
// if(age > 18){
//     console.log("You can drive");
// }else{
//         document.getElementById("hr1").innerHTML = "you can't drive"
//     console.log("You can not drive");
// }

// var marks = prompt("enter marks to check grade");
//  if(marks > 80){
//     document.getElementById("grade").innerHTML = "Grade A";
//  }else if(marks > 60){
//         document.getElementById("grade").innerHTML = "Grade B";
//  }else if(marks > 50){
//         document.getElementById("grade").innerHTML = "Grade C";
//  }else{
//            document.getElementById("grade").innerHTML = "Grade F";
//  }
// function add(numb1 , numb2 , numb3){
//        var x = numb1
//        var y = numb2
//        var z = numb3;
// console.log(x + y + z);
// }
// add(34 , 6, 10);

// add(30, 10, 20);

// add(10, 5, 5)
// function sub(numb1 , numb2 , numb3){
//        var x = numb1
//        var y = numb2
//        var z = numb3;
// console.log(x - y - z);
// }
// add(34 , 6, 10);

// add(30, 10, 20);

// add(10, 5, 5)
// function mul(numb1 , numb2 , numb3){
//        var x = numb1
//        var y = numb2
//        var z = numb3;
// console.log(x * y * z);
// }
// // add(34 , 6, 10);

// // add(30, 10, 20);

// // add(10, 5, 5)
// function add(){
//        var x = prompt("ENTER NUMBER 1:");
//        var y = prompt("ENTER NUMBER 2:");

//        console.log(Number(x) + Number(y))
// }\for(let x = 0; x<200; x++){
// for(let x = 0; x<200; x++){
// console.log("Hello World...", x);
// }

// let y = 0;
// while (y < 7) {
//     console.log("while loop...", y);
//     y++;
// }

// let z = 0;

// do {
//     console.log("Do-while loop", z)
//     z++
// } while (z < 4) 
function TableGen(){

    document.getElementById("table_outpout").innerHTML="";
    let TableOf = prompt('enter num')
    let till = prompt("Genrate table till")

    let TableOf = prompt("Enter Number: ");
    for(let x=1; x<11; x++){
           document.getElementById("table_outpout").innerHTML += `${TableOf} x ${x} =${TableOf * x} <br>`
    }
}