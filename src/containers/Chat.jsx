import React from 'react';
import '../assets/stytles/chat.css';
import ListItem from "../components/ListItem";
import UserList from "../components/List";

const Chat = (props) => {
    let chatList = [
        {img:'', name:'Genesis Paola Andrea Llanos Flores', lastMessage:'hola', time:'14:35'},
        {img:'', name:'Delmar Jose Quiroga Montero', lastMessage:'sup?', time:'17:43'}];
    return <div className='container'>
        <div className="chat-container">
                <div className="friend-list">
                    <UserList list={chatList}></UserList>
                </div>
                <div className="chat-box">
                    right side
                </div>
        </div>
    </div>
}
export default Chat;
