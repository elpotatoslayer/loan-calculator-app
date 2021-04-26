document.getElementById('loan-form').addEventListener("submit", calculateResult);

function calculateResult(e){
  e.preventDefault();
  console.log('Hey..')
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const mothlyPayment = document.getElementById('mothly-payment');
  const totlaPaymant = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principle = parseFloat(amount.value);
}




