import React from 'react';
import userDefault from '../assets/img/user-default.png';
import '../assets/stytles/listHeader.css';
//fas fa-ellipsis-v
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
const ListHeader = (props) =>{
    return <div className='list-header-container'>
        <div className='list-header-image'>
            <img src={userDefault}/>
        </div>
        <div className='list-header-icon'>
            <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
        </div>
    </div>
}

export default ListHeader;
