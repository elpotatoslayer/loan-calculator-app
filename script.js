document.getElementById('loan-form').addEventListener("submit", calculateResult);

function calculateResult(e){
  e.preventDefault();

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totlaPaymant = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const mothly = (principle*x*calculatedInterest) / (x-1);
  
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.fix(2);
    totlaPaymant.value = (monthly*calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principle).toFixed(2);
  } else {
    showError('Please check details passed in!!')
  }

} 




