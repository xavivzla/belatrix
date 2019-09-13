import React, { useState } from 'react'

export const Change = () => {
  const USD = 1.101164
  const [quantity, setQuantity] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  function obtainedDivisas(from) {
    return USD
  }

  function calculate(from = 'eur', to = 'usd', value) {
    let divisas = obtainedDivisas(to)
    let result = value * divisas
    setCurrentValue(result)
  }

  const _handleClickCalculate = () => {
    calculate(null, null, quantity)
  }
  return (
  <div className="hero-change">
    <div className="hero-change__cont">
      <div className="hero-change__title"></div>
      <div className="hero-change__left">
        <input type="number" onChange={event => setQuantity(event.target.value)}/>
        </div>
      <div className="hero-change__right">
        { currentValue }
      </div>
      <div className="hero-change__action">
        <button onClick={_handleClickCalculate}>Calcular</button>
      </div>
    </div>
  </div>
  )
}