import React from 'react'

import '../assets/scss/components/Hero.scss'
import '../assets/scss/components/Input-g.scss'

export const Hero = ({handleChange, click, currentDivisa}) => {
  return (
    <div className="hero">
      <div className="hero__bg"></div>
      <div className="hero__cont">
        <div className="hero__title">TIPO DE CAMBIO</div>
        <div className="hero__form">
          <div className="hero__left">
            <i className="fas fa-euro-sign"></i>
            <input type="number" className="input-g" onChange={(e) => {handleChange(e.target.value)} } />
          </div>
          <div className="hero__middle"><i class="fas fa-exchange-alt"></i></div>
          <div className="hero__right">
            <i className="fas fa-dollar-sign"></i>
            <input type="text" className="input-g disable" disabled value={currentDivisa} />
          </div>
        </div>
        <div className="hero__action">
          <div className="hero__info">Sujeto a Variación*</div>
          <button onClick={click}>Calcular</button>
        </div>
      </div>
    </div>
  );
}