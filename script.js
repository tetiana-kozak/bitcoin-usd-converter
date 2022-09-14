        // Simple Distance Converter

// document.getElementById('convert').addEventListener('submit', function(event){
//     event.preventDefault();

//     const distance = parseFloat(document.getElementById('distanceValue').value);
//     const answer = document.getElementById('answer') 

//     if ( distance >= 0 ) {
        
//         answer.innerHTML = `<p class="answerValue"> ${distance} miles = ${(distance * 1.609344).toFixed(3)} kilometers</p>`


//     } else {
//         answer.innerHTML = `<p class="answerValue">Provide a number more than 0</p>`
//     }
// })


        // Advanced Distance Converter

const bitcoinPriceElement = document.getElementById('bitcoin-price')
const usdValueElement = document.getElementById('usd-value')
const bitcoinValueElement = document.getElementById('answer') 

let bitcoinPrice = null;
let usdValue = null;
let bitcoinValue = null;

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

// function validateValue(value, type) {
//   if (!isNaN(value)) {
//     console.log('typeof Number(value) :>> ', typeof Number(value));
//     console.log('number :>> ', Number(value));
//     return value
//   } else {
//     if (type === 'BitcoinPrice') {
//       bitcoinValueElement.innerText = ''      
//     } 
//     if (type === 'UsdValue') {
//       usdValueElement.innerText = ''      
//     } 
//   }  
// }

function calculateBitcoinValue() {
  if (bitcoinPrice && usdValue) {
    bitcoinValue = (usdValue / bitcoinPrice).toFixed(7)
    bitcoinValueElement.innerText = `You can buy ${bitcoinValue} BTC`    
  }
}




