// import { Fraction } from 'fractional';
// import getlowestfraction from 'fraction'

document.getElementById('qua-form').addEventListener('submit', function(e){
    document.getElementById('result').style.display = 'none';
    document.getElementById('result2').style.display = 'none';
    setTimeout(calculateResult, 3000);
      e.preventDefault();
  });
  
  function calculateResult()
  {
    console.log('Calculating...');
    // UI Vars
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const x1 = document.getElementById('x1');
    const x2 = document.getElementById('x2');
    const Answer = document.getElementById('answer');

    const A= (a.value);
    const B = (b.value);
    const C =  (c.value);
    // const ANSWER =  (Answer.value);

    const general = ((B * B) - (4 * A * C));

    //Math.sqrt

  //   if (isFinite(general)) {
  //     x1.value = ((- B + Math.sqrt(general)) / (2 * A)) . toFixed(2);
  //     x2.value = ((- B - Math.sqrt(general)) / (2 * A)) . toFixed(2);

  //     document.getElementById('result').style.display = 'block';
  // }
  if (general>0) {
    x1.value = ((- B + Math.sqrt(general)) / (2 * A)) . toFixed(2);
    x2.value = ((- B - Math.sqrt(general)) / (2 * A)) . toFixed(2);

    document.getElementById('result').style.display = 'block';

    // console.log("fraction", (new Fraction(x1.value)))
//     var decimal = x1.value,
//     numerator = decimal,
//     denominator = 1;

// while (numerator % 1) numerator *= 10;
// denominator = numerator / decimal;

// console.log(numerator + " / " + denominator);
// console.log("lowest value", getlowestfraction(x1.value))

// var eps = 1.0E-15,
//     var h, h1, h2, k, k1, k2, a, x;

//     x = x1.value,
//     a = Math.floor(x),
//     h1 = 1,
//     k1 = 0,
//     h = a,
//     k = 1;

//     while (x-a > eps*k*k) ;
//         x = 1/(x-a);
//         a = Math.floor(x);
//         h2 = h1; h1 = h;
//         k2 = k1; k1 = k;
//         h = h2 + a*h1;
//         k = k2 + a*k1;
    
//     console.log("smallest", h + "/" + k);
}


  else if(general<0) {
    let realPart = (-B / (2 * A)).toFixed(2);
    let imagPart = (Math.sqrt(-general) / (2 * A)).toFixed(2);

    // result
    Answer.value = `x1: ${realPart} + ${imagPart}i \nx2: ${realPart} - ${imagPart}i`;
    

    document.getElementById('result2').style.display = 'block';

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
    
    // else {
      
    //     showError('Please check your numbers');
    //   }
    }
    // Show Error
function showError(error){
    // Hide results
    document.getElementById('result').style.display = 'none';
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }