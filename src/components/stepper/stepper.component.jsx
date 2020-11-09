import React from 'react'
import './stepper.styles.css'

const Stepper = ({currentStep}) => {

const stepsDescription = [
    {name: "create", step: 1, selected: true},
    {name: "account", step: 2, selected: false},
    {name: "create", step: 3, selected: false},
    {name: "account", step: 4, selected: false},
]
   

    const steps= stepsDescription.map((stepper, index)=>{
        // if(stepper.step <= currentStep){stepper.selected =}
        const divType = index ===stepsDescription.length -1? "last-divider":"divider-line"
        const divState = stepper.step < currentStep? 'step-divider-active': ''

        return (
            <div className="stepper-unit" key={index + 1}>
                <div className={`step-number ${stepper.step <= currentStep? "step-number-active": ""}`}>{index + 1}</div>
        {/* <div className="step-description">{stepper.name}</div> */}
                <div className={`${divType} ${divState}`}></div>
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
