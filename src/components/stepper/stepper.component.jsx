import React, {useState} from 'react'
import './stepper.styles.css'

const Stepper = () => {

    const stepsDescription=[
        'create',
        'account',
        'create',
        'account'
    ]

    const steps= stepsDescription.map((step, index)=>{
        return (
            <div className="stepper-unit" key={index + 1}>
                <div className="step-number">{index + 1}</div>
        <div className="step-description">{step}</div>
                <div className={ index ===stepsDescription.length -1? "last-divider":"divider-line"}></div>
            </div>
        )
    }) 
    return (
        <div className="stepper-wrapper">
            {steps}
        </div>
    )
}

export default Stepper
