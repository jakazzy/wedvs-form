import React, { useState } from 'react';
import UserConfirmationData from './userConfirmationData';
import UserExperience from './userExperience';
import UserProfile from './userProfile';
import UserAddress from './userAddress';

function StepForm() {
    const [ userData, setUserData ] =  useState({
        username: '',
        password: '',
        emailAddress: '',
        residentialAddress: '',
        postalAddress: '',
        digitalAddress: '',
        experience: '',
        currentEngineeringRole: '',
        placeOfWork: '',
        step: 1


    })

    // proceed to the next form
    const next = ()=>{
        const {step } = userData
        const newStep = step + 1
        setUserData( {...userData, step: newStep })
    }

    // go back to the previous form
    const previous = ()=>{
        const {step } = userData
        const newStep = step - 1
        setUserData( {...userData, step: newStep })
    }

    const submitData=(data)=>{
        setUserData({...userData, ...data})
    }

    const { step } = userData
    switch(step){
        case 1: 
        return (
            <UserProfile next={next}  submitData={submitData} userData={userData}/>
        )
        case 2:
            return(<UserAddress next={next} previous={previous} submitData={submitData} userData={userData}/>)
        case 3:
            return(<UserExperience next={next} previous={previous} submitData={submitData} userData={userData} />)
        case 4:
            return(<UserConfirmationData previous={previous} submitData={submitData} userData={userData} />);
        default:
            return (
                <UserProfile next={next}  submitData={submitData} userData={userData}/>
            )
    }
}

export default StepForm
