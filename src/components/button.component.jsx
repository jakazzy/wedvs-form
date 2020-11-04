import React from 'react'
import Button from 'react-bootstrap/Button'

const FormButton = (props) => {
    return (
        <div className="text-center">     
            <Button 
            className="text-center"  
            type="submit" 
            style={{ 
                width: '9rem',
                height: '3rem',
                borderRadius: '2rem', 
                background: 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'}}>
                    { props.children}
            </Button>
            </div>
    )
}

export default FormButton
