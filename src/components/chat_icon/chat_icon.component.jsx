import React from 'react'
import './chat.styles.css'

const ChatIcon = () => {
    return (
        <div id="chat-btn">
            <span 
            style={{ position: 'absolute',  
                    top: '1rem',
                    left: '3rem',
                    fontSize: '1.5rem',
                    fontWeight:'bold',
                    color: '#bdbdbd'}}>we
            <span style={{ fontWeight: 'bold', color: 'grey'}}>Forms</span>
            </span>
        </div>
    )
}

export default ChatIcon
