// window.addEventListener('load', function() {
//   console.log("Hello World!");
//
//   //this is to manipulate the DOM
//   function calculate() {
//     let totalBill = document.getElementById("total-bill").value;
//     //console.log(document.getElementById("total-bill").value);
//     console.log(document.getElementById("total-bill").value);
//   }
//
//   let submitButton = document.querySelector("#calculate-button");
//   //let submitButton = document.getElementById("calculate-button");
//   // console.log(submitButton);
//
//   submitButton.onClick = calculate();
// });

window.addEventListener('load', function() {
 //console.log("Hello World");

// This is to manipulate the DOM
//okay, so now, let's actually calculate the tip...

 function calculate() {
   let  totalBill = document.getElementById("total-bill").value;
   console.log(document.getElementById("total-bill").value);

   let totalTip = totalBill * (20/100);
   //Let's assume 20% is the tip percentage

   let partySize = document.getElementById("party-size").value;

   let tipPerPerson = totalTip / partySize;

   //convert tipPerPerson to a more formatted version of itself, like instead of
   // $40 it needs to say $40.00...

   //tipPerPerson = tipPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

   if(tipPerPerson !== 0)
   {
     document.getElementById("tip-per-person").innerHTML = `The total tip per person is: $${tipPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

   }

   
   console.log("$" + tipPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

 }


 document.getElementById("calculate-button").onclick = function (event) { 
 
  event.preventDefault();
  calculate(); 

};

});
