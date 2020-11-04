import React from 'react';
import Stepper from './stepper.component';
import './stepper.styles.css'

const Root = ({step }) => {
    return (
        <div className="stepper-container">
            <Stepper currentStep={step}/>
        </div>
    )
}

export default Root
