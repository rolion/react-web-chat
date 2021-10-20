import React from 'react';

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";


const Chat= (props) => {
    let {name, image, messages}= props.chatBox
    return <>
        <ChatHeader friendName={name} image={image}></ChatHeader>
        <ChatBox messages={messages}></ChatBox>
        <ChatInput></ChatInput>
    </>
}

export default Chat;
