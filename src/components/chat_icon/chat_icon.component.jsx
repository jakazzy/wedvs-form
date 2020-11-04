import React from 'react'
import './chat.styles.css'

const ChatIcon = () => {
    return (
        <div id="chat-btn">
            <span 
            style={{ position: 'absolute',  
                    top: '1rem',
                    left: '2rem',
                    fontSize: '1.5rem',
                    color: 'grey'}}>we
            <span style={{ fontWeight: 'bold', color: 'grey'}}>Forms</span>
            </span>
        </div>
    )
}

export default ChatIcon
