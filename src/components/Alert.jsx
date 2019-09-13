import React from 'react'

import '../assets/scss/components/Alert.scss'

export const Alert = ({type, message}) => {
  function alertType() {
    switch (type) {
      case 'error':
      return (
        <div className="message message-error">
           feded
        </div>
      )
      default:
        return ''
    }
  }
  return (alertType())
}