import React from 'react';
import '../assets/stytles/list.css'
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";


const UserList = (props) => {
    let {list}= props
    return <>
        <ListHeader></ListHeader>
        <div className="list-container">
            {list.map((item, index)=>{
                return <ListItem key={index}
                                 img={item.img}
                                 name={item.name}
                                 lastMessage={item.lastMessage}
                                 time = {item.time}
                                 selected={item.selected}>
                </ListItem>
            })}
        </div>

    </>
}

export default UserList;
