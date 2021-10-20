import React from 'react';
import userDefault from '../assets/img/user-default.png';
import '../assets/stytles/listItem.css';
const ListItem = (props) => {
    let {img, name, lastMessage, time, selected} = props;
    console.log('selected',selected);
    return <div className={selected?'list-item item-selected ':'list-item'}>
        <div className='item-img'>
            <img src={img?img:userDefault} alt="user profile picture"/>
        </div>
        <div className='item-text'>
            <div className='name-container'>
                <p className="friend-name">{name}</p>
                <p className="last-message-time">{time}</p>
            </div>
            <p className="last-message">{lastMessage}</p>

        </div>

    </div>
}

export default ListItem;
