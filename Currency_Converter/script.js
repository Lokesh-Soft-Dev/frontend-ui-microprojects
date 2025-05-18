const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const result = document.getElementById('result');

// Hardcoded exchange rates (example values)
const exchangeRates = {
  USD: { INR: 83, EUR: 0.92 },
  INR: { USD: 0.012, EUR: 0.011 },
  EUR: { USD: 1.09, INR: 90 }
};

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    result.textContent = `${amount.toFixed(2)} ${from} = ${amount.toFixed(2)} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = amount * rate;
  result.textContent = `${amount.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`;
});
