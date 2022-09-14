const bitcoinPriceElement = document.getElementById('bitcoin-price')
const usdValueElement = document.getElementById('usd-value')
const bitcoinValueElement = document.getElementById('bitcoin-value') 

let bitcoinPrice = '';
let usdValue = '';
let bitcoinValue = '';

bitcoinPriceElement.addEventListener('input', updateBitcoinPrice);

usdValueElement.addEventListener('input', updateUsdValue);

function updateBitcoinPrice(e) {
  bitcoinPrice = e.target.value
  calculateBitcoinValue()
}

function updateUsdValue(e) {
  usdValue = e.target.value
  calculateBitcoinValue()
}

function calculateBitcoinValue() {
  if (bitcoinPrice === '' || usdValue === '') {
    bitcoinValueElement.innerText = `Please, fill all inputs`      
  } else {
    bitcoinValue = (usdValue / bitcoinPrice).toFixed(7)
    bitcoinValueElement.innerText = `You can buy ${bitcoinValue} BTC`   
  }
}
