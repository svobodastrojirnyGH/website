import React from 'react'
import Script from 'next/script'
import { useEffect } from 'react'

function RecaptchaWrapper({action}) {

    const executeRecaptcha = () => {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.enterprise
        }
    }
  return (
    <div>RecaptchaWrapper</div>
  )
}

export default RecaptchaWrapper
/* https://tylermarshall.medium.com/using-recaptcha-v3-with-next-js-15-no-third-party-libraries-required-656acd166c24 */