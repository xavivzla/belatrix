import React, { useState, useEffect, Fragment } from 'react'
import { Hero } from '../components/Hero'
import ApiFetch from '../utils/api.fecth'

import '../assets/scss/App.scss'
import { Header } from '../components/Header';
// import { Alert } from '../components/Alert'

const App = () => {
  const [quantity, setQuantity] = useState('')
  const [divisa, setDivisa] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  const getCurrentDivisa = () => ApiFetch.listDivisas()
  useEffect( () => {
    getCurrentDivisa()
    .then((data) => {
      setDivisa(data.rates.USD)
    })
  }, []);


  function calculate(from = 'EUR', to = 'USD', value) {
    getCurrentDivisa(from)
    let result = value * divisa
    result = result.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // if(isNaN(result)){
    //   return
    // }
    setCurrentValue(result)
  }

  const _handleClickCalculate = () => {
    calculate(null, null, quantity)
  }

  const handleChangeInput = (e) => {
    setQuantity(parseFloat(e))
    if(currentValue !== '')
      setCurrentValue('')
  }
  return (
    <Fragment>
      {/* <Alert type='error'/> */}
      <Header />
      <Hero
      handleChange={handleChangeInput}
      click={_handleClickCalculate}
      currentDivisa={currentValue}/>
    </Fragment>
  )
}

export default App