import React from 'react';

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";


const ChatInput= (props) => {

    return <div className='chat-input-container'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="message"
                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Enviar</button>
                        </div>
                </div>
    </div>
}

export default ChatInput;
