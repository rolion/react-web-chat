import React from 'react';
import '../assets/stytles/chat.css';
import ListItem from "../components/ListItem";
import UserList from "../components/List";
import Chat from "../components/Chat";

const ChatPage = (props) => {
    let chatList = [
        {img:'', name:'Genesis Paola Andrea Llanos Flores', lastMessage:'hola', time:'14:35', selected:true},
        {img:'', name:'Delmar Jose Quiroga Montero', lastMessage:'sup?', time:'17:43', selected:false}
    ];
    let chatBox={img:'', name:'Genesis Paola Andrea Llanos Flores', messages:[]};
    return <div className='container'>
        <div className="chat-container">
                <div className="friend-list">
                    <UserList list={chatList}></UserList>
                </div>
                <div className="chat-box">
                    <Chat chatBox={chatBox}></Chat>
                </div>
        </div>
    </div>
}
export default ChatPage;
