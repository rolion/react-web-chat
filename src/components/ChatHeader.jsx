import React from 'react';
import userDefault from "../assets/img/user-default.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

import '../assets/stytles/chatheader.css';

const ChatHeader = (props) => {
    let {friendName, image}= props
    return <>
        <div className="header">
            <div className='contact'>
                <div className='header-img'>
                    <img src={userDefault}/>
                </div>
                <div className="header-name">
                    <h5>{friendName}</h5>
                </div>
            </div>
            <div className='header-icon icon-position-right'>
                <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
            </div>
        </div>
    </>
}

export default ChatHeader;
