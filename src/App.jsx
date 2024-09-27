import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const animationDuration = 2000
const accessKey = "a3d55ebe7fa60871e37b3d1d89173bd0"
// const exampleOfFetchedDataFromTheAPI = {
//   "success": true,
//   "timestamp": 1727416804,
//   "base": "EUR",
//   "date": "2024-09-27",
//   "rates": {
//     "AED": 4.100571,
//     "AFN": 76.306346,
//     "ALL": 98.854631,
//     "AMD": 430.909955,
//     "ANG": 2.009314,
//     "AOA": 1049.529799,
//     "ARS": 1079.835571,
//     "AUD": 1.623396,
//     "AWG": 2.012325,
//     "AZN": 1.907497,
//     "BAM": 1.95492,
//     "BBD": 2.251067,
//     "BDT": 133.230048,
//     "BGN": 1.95526,
//     "BHD": 0.420792,
//     "BIF": 3233.045166,
//     "BMD": 1.116408,
//     "BND": 1.432655,
//     "BOB": 7.703465,
//     "BRL": 6.071363,
//     "BSD": 1.114888,
//     "BTC": 0.0000170739,
//     "BTN": 93.319543,
//     "BWP": 14.583438,
//     "BYN": 3.648026,
//     "BYR": 21881.589527,
//     "BZD": 2.247269,
//     "CAD": 1.506346,
//     "CDF": 3198.508198,
//     "CHF": 0.947545,
//     "CLF": 0.036652,
//     "CLP": 1011.351632,
//     "CNY": 7.830146,
//     "CNH": 7.8117,
//     "COP": 4651.52355,
//     "CRC": 585.341846,
//     "CUC": 1.116408,
//     "CUP": 29.584802,
//     "CVE": 110.216391,
//     "CZK": 25.141759,
//     "DJF": 198.528886,
//     "DKK": 7.456465,
//     "DOP": 67.050429,
//     "DZD": 147.765715,
//     "EGP": 54.002833,
//     "ERN": 16.746114,
//     "ETB": 133.208351,
//     "EUR": 1,
//     "FJD": 2.445158,
//     "FKP": 0.85021,
//     "GBP": 0.834219,
//     "GEL": 3.042223,
//     "GGP": 0.85021,
//     "GHS": 17.589085,
//     "GIP": 0.85021,
//     "GMD": 76.474354,
//     "GNF": 9628.753415,
//     "GTQ": 8.618199,
//     "GYD": 233.255038,
//     "HKD": 8.686115,
//     "HNL": 27.696785,
//     "HRK": 7.590468,
//     "HTG": 147.275047,
//     "HUF": 395.900603,
//     "IDR": 16911.621865,
//     "ILS": 4.138529,
//     "IMP": 0.85021,
//     "INR": 93.427968,
//     "IQD": 1460.510081,
//     "IRR": 47006.343043,
//     "ISK": 150.703962,
//     "JEP": 0.85021,
//     "JMD": 175.052796,
//     "JOD": 0.7912,
//     "JPY": 163.281325,
//     "KES": 143.827017,
//     "KGS": 94.010461,
//     "KHR": 4530.002126,
//     "KMF": 493.591774,
//     "KPW": 1004.766233,
//     "KRW": 1474.244194,
//     "KWD": 0.340895,
//     "KYD": 0.929061,
//     "KZT": 533.977758,
//     "LAK": 24618.70134,
//     "LBP": 99838.2796,
//     "LKR": 334.186626,
//     "LRD": 216.292671,
//     "LSL": 19.170902,
//     "LTL": 3.296462,
//     "LVL": 0.675304,
//     "LYD": 5.277578,
//     "MAD": 10.783448,
//     "MDL": 19.416089,
//     "MGA": 5044.775095,
//     "MKD": 61.531483,
//     "MMK": 3626.04843,
//     "MNT": 3793.553073,
//     "MOP": 8.93438,
//     "MRU": 44.107547,
//     "MUR": 51.075716,
//     "MVR": 17.136914,
//     "MWK": 1933.247377,
//     "MXN": 21.908718,
//     "MYR": 4.60909,
//     "MZN": 71.339832,
//     "NAD": 19.170644,
//     "NGN": 1844.495295,
//     "NIO": 41.030985,
//     "NOK": 11.795193,
//     "NPR": 149.311149,
//     "NZD": 1.771247,
//     "OMR": 0.429761,
//     "PAB": 1.114888,
//     "PEN": 4.182118,
//     "PGK": 4.431046,
//     "PHP": 62.469146,
//     "PKR": 309.60728,
//     "PLN": 4.27559,
//     "PYG": 8708.003495,
//     "QAR": 4.063808,
//     "RON": 4.975941,
//     "RSD": 117.083232,
//     "RUB": 103.20637,
//     "RWF": 1506.935394,
//     "SAR": 4.187585,
//     "SBD": 9.269216,
//     "SCR": 16.163531,
//     "SDG": 671.52052,
//     "SEK": 11.32328,
//     "SGD": 1.435315,
//     "SHP": 0.85021,
//     "SLE": 25.506903,
//     "SLL": 23410.504035,
//     "SOS": 637.218966,
//     "SRD": 34.098999,
//     "STD": 23107.383901,
//     "SVC": 9.755392,
//     "SYP": 2805.007589,
//     "SZL": 19.162377,
//     "THB": 36.216479,
//     "TJS": 11.856699,
//     "TMT": 3.918591,
//     "TND": 3.389405,
//     "TOP": 2.614734,
//     "TRY": 38.161159,
//     "TTD": 7.567662,
//     "TWD": 35.402413,
//     "TZS": 3055.450287,
//     "UAH": 45.901156,
//     "UGX": 4117.147329,
//     "USD": 1.116408,
//     "UYU": 47.128793,
//     "UZS": 14223.599538,
//     "VEF": 4044245.285725,
//     "VES": 41.10553,
//     "VND": 27469.20971,
//     "VUV": 132.542157,
//     "WST": 3.123109,
//     "XAF": 655.66783,
//     "XAG": 0.035211,
//     "XAU": 0.000419,
//     "XCD": 3.017147,
//     "XDR": 0.824836,
//     "XOF": 655.656089,
//     "XPF": 119.331742,
//     "YER": 279.492761,
//     "ZAR": 19.223197,
//     "ZMK": 10049.01009,
//     "ZMW": 29.34953,
//     "ZWL": 359.482801
//   }
// }


function App() {
  const [exampleOfFetchedDataFromTheAPI, setExampleOfFetchedDataFromTheAPI ] = useState( {
    "success": true,
    "timestamp": 1727416804,
    "base": "EUR",
    "date": "2024-09-27",
    "rates": {
      "AED": 4.100571,
      "AFN": 76.306346,
      "ALL": 98.854631,
      "AMD": 430.909955,
      "ANG": 2.009314,
      "AOA": 1049.529799,
      "ARS": 1079.835571,
      "AUD": 1.623396,
      "AWG": 2.012325,
      "AZN": 1.907497,
      "BAM": 1.95492,
      "BBD": 2.251067,
      "BDT": 133.230048,
      "BGN": 1.95526,
      "BHD": 0.420792,
      "BIF": 3233.045166,
      "BMD": 1.116408,
      "BND": 1.432655,
      "BOB": 7.703465,
      "BRL": 6.071363,
      "BSD": 1.114888,
      "BTC": 0.0000170739,
      "BTN": 93.319543,
      "BWP": 14.583438,
      "BYN": 3.648026,
      "BYR": 21881.589527,
      "BZD": 2.247269,
      "CAD": 1.506346,
      "CDF": 3198.508198,
      "CHF": 0.947545,
      "CLF": 0.036652,
      "CLP": 1011.351632,
      "CNY": 7.830146,
      "CNH": 7.8117,
      "COP": 4651.52355,
      "CRC": 585.341846,
      "CUC": 1.116408,
      "CUP": 29.584802,
      "CVE": 110.216391,
      "CZK": 25.141759,
      "DJF": 198.528886,
      "DKK": 7.456465,
      "DOP": 67.050429,
      "DZD": 147.765715,
      "EGP": 54.002833,
      "ERN": 16.746114,
      "ETB": 133.208351,
      "EUR": 1,
      "FJD": 2.445158,
      "FKP": 0.85021,
      "GBP": 0.834219,
      "GEL": 3.042223,
      "GGP": 0.85021,
      "GHS": 17.589085,
      "GIP": 0.85021,
      "GMD": 76.474354,
      "GNF": 9628.753415,
      "GTQ": 8.618199,
      "GYD": 233.255038,
      "HKD": 8.686115,
      "HNL": 27.696785,
      "HRK": 7.590468,
      "HTG": 147.275047,
      "HUF": 395.900603,
      "IDR": 16911.621865,
      "ILS": 4.138529,
      "IMP": 0.85021,
      "INR": 93.427968,
      "IQD": 1460.510081,
      "IRR": 47006.343043,
      "ISK": 150.703962,
      "JEP": 0.85021,
      "JMD": 175.052796,
      "JOD": 0.7912,
      "JPY": 163.281325,
      "KES": 143.827017,
      "KGS": 94.010461,
      "KHR": 4530.002126,
      "KMF": 493.591774,
      "KPW": 1004.766233,
      "KRW": 1474.244194,
      "KWD": 0.340895,
      "KYD": 0.929061,
      "KZT": 533.977758,
      "LAK": 24618.70134,
      "LBP": 99838.2796,
      "LKR": 334.186626,
      "LRD": 216.292671,
      "LSL": 19.170902,
      "LTL": 3.296462,
      "LVL": 0.675304,
      "LYD": 5.277578,
      "MAD": 10.783448,
      "MDL": 19.416089,
      "MGA": 5044.775095,
      "MKD": 61.531483,
      "MMK": 3626.04843,
      "MNT": 3793.553073,
      "MOP": 8.93438,
      "MRU": 44.107547,
      "MUR": 51.075716,
      "MVR": 17.136914,
      "MWK": 1933.247377,
      "MXN": 21.908718,
      "MYR": 4.60909,
      "MZN": 71.339832,
      "NAD": 19.170644,
      "NGN": 1844.495295,
      "NIO": 41.030985,
      "NOK": 11.795193,
      "NPR": 149.311149,
      "NZD": 1.771247,
      "OMR": 0.429761,
      "PAB": 1.114888,
      "PEN": 4.182118,
      "PGK": 4.431046,
      "PHP": 62.469146,
      "PKR": 309.60728,
      "PLN": 4.27559,
      "PYG": 8708.003495,
      "QAR": 4.063808,
      "RON": 4.975941,
      "RSD": 117.083232,
      "RUB": 103.20637,
      "RWF": 1506.935394,
      "SAR": 4.187585,
      "SBD": 9.269216,
      "SCR": 16.163531,
      "SDG": 671.52052,
      "SEK": 11.32328,
      "SGD": 1.435315,
      "SHP": 0.85021,
      "SLE": 25.506903,
      "SLL": 23410.504035,
      "SOS": 637.218966,
      "SRD": 34.098999,
      "STD": 23107.383901,
      "SVC": 9.755392,
      "SYP": 2805.007589,
      "SZL": 19.162377,
      "THB": 36.216479,
      "TJS": 11.856699,
      "TMT": 3.918591,
      "TND": 3.389405,
      "TOP": 2.614734,
      "TRY": 38.161159,
      "TTD": 7.567662,
      "TWD": 35.402413,
      "TZS": 3055.450287,
      "UAH": 45.901156,
      "UGX": 4117.147329,
      "USD": 1.116408,
      "UYU": 47.128793,
      "UZS": 14223.599538,
      "VEF": 4044245.285725,
      "VES": 41.10553,
      "VND": 27469.20971,
      "VUV": 132.542157,
      "WST": 3.123109,
      "XAF": 655.66783,
      "XAG": 0.035211,
      "XAU": 0.000419,
      "XCD": 3.017147,
      "XDR": 0.824836,
      "XOF": 655.656089,
      "XPF": 119.331742,
      "YER": 279.492761,
      "ZAR": 19.223197,
      "ZMK": 10049.01009,
      "ZMW": 29.34953,
      "ZWL": 359.482801
    }
  })

  // фетчим данные о валютах с API когда копмпонент залетает на страницу
  useEffect(()=>{
    fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}`).then(res => res.json()).then(data=> setExampleOfFetchedDataFromTheAPI({...data}))
  },[])

  

  const changeCurrenciesButton = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false);
  // чтобы сделать запуска нимации кнопки поменять валюты местами
  const ifTheAnimationShouldBeInitiated = isAnimating ? "active" : "" 


  const [currencyNames, setCurrencyNames] = useState([...Object.keys(exampleOfFetchedDataFromTheAPI.rates)])
  const [currencyCoefficients, setCurrencyCoefficients] = useState(exampleOfFetchedDataFromTheAPI.rates)


  const [currencyFrom, setCurrencyFrom] = useState(currencyNames[47])
  const [currencyTo, setCurrencyTo] = useState(currencyNames[27])
  const [amounOfTheCurrencyFrom,setAmounOfTheCurrencyFrom] = useState(1)
  const [amounOfTheCurrencyTo,setAmounOfTheCurrencyTo] = useState(1)
  const [isFromCurrencyBeingUsed, setIsFromCurrencyBeingUsed] = useState(false)


  
  

  // чтобы конвертировать из валюты в валюту по коэффициэнтам
  useEffect(handleTheConvertion,[amounOfTheCurrencyFrom,amounOfTheCurrencyTo, currencyFrom, currencyTo])




  function handleSetCurrencyFrom(event){
    setCurrencyFrom(event.target.value)
    
  }
  function handleSetCurrencyTo(event){
    setCurrencyTo(event.target.value)
    
  }
 
  function handleChangeCurrencyAmountFrom(event){
    setAmounOfTheCurrencyFrom(event.target.value)
    setIsFromCurrencyBeingUsed(true)
    
  }

  function handleChangeCurrencyAmountTo(event){
    setAmounOfTheCurrencyTo(event.target.value)
    setIsFromCurrencyBeingUsed(false)
  }
 

  function startSwitchCurrenciesAnimation(event){
    
    // меняем местами валюты из и в заодно (это функция этой кнопки)
    const button = event.target


    setIsAnimating(isAnimatingPrev => isAnimatingPrev = true)
    button.disabled = true

    // что бы не было технических шоколадок - работаем с предыдущими значениями а не с данными на данный момент: 
    //тут мы меняем местами валюты тип как фича
    setCurrencyFrom(currencyFromPrev => currencyFromPrev = currencyTo)
    setAmounOfTheCurrencyFrom(amounOfTheCurrencyFromPrev=> amounOfTheCurrencyFromPrev = amounOfTheCurrencyTo)

    setCurrencyTo(currencyToPrev => currencyToPrev = currencyFrom)
    setAmounOfTheCurrencyFrom(amounOfTheCurrencyToPrev=> amounOfTheCurrencyToPrev = amounOfTheCurrencyFrom)

    setTimeout(()=>{
      setIsAnimating(isAnimatingPrev => isAnimatingPrev = false)
      button.disabled = false // снимаем disabled чтобы можно было играть анимацию снова
    },+animationDuration)
    


  }

  function handleTheConvertion(){
    if(isFromCurrencyBeingUsed){
      console.log(currencyCoefficients[currencyTo])
          const convertedToAnotherCurrency = (currencyCoefficients[currencyTo] / currencyCoefficients[currencyFrom]) *  amounOfTheCurrencyFrom
          console.log(convertedToAnotherCurrency)

          setAmounOfTheCurrencyTo(convertedToAnotherCurrency)
    }
    else{
      console.log(currencyCoefficients[currencyTo])
          const convertedToAnotherCurrency = (currencyCoefficients[currencyFrom] / currencyCoefficients[currencyTo]  ) *  amounOfTheCurrencyTo
          console.log(convertedToAnotherCurrency)

          setAmounOfTheCurrencyFrom(convertedToAnotherCurrency)
    }

  }


  return (

    <div className='converter-app'>
      <div className="converter-app__how-much-block converter-how-much-block">
        <input onChange={()=> handleChangeCurrencyAmountFrom(event)}  value={amounOfTheCurrencyFrom} type="number" min={1} className='converter-how-much-block__input'/>
        <select value={currencyFrom} onChange={handleSetCurrencyFrom} className='converter-how-much-block__select'>
          {currencyNames.map((elem,index)=> <option key={elem} value={elem} className="converter-how-much-block__option">{elem}</option>)}
        </select>
      </div>
      <button ref={changeCurrenciesButton} className={`converter-app__switch-currencies  ${ifTheAnimationShouldBeInitiated}`} onClick={()=>startSwitchCurrenciesAnimation(event)}>👇👆</button>
      <div className="converter-app__how-much-block converter-how-much-block">
        <input onChange={()=> handleChangeCurrencyAmountTo(event)}  value={amounOfTheCurrencyTo} min={1}  type="number" className='converter-how-much-block__input'/>
        <select value={currencyTo} onChange={handleSetCurrencyTo} className='converter-how-much-block__select'>
         {currencyNames.map((elem,index)=> <option key={elem} value={elem} className="converter-how-much-block__option">{elem}</option>)}
        </select>
      </div>
    </div>
  )
}

export default App
