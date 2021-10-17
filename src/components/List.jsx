import React from 'react';
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";


const UserList = (props) => {
    let {list}= props
    return <>
        <ListHeader></ListHeader>
        {list.map((item, index)=>{
            return <ListItem key={index}
                             img={item.img}
                             name={item.name}
                             lastMessage={item.lastMessage}
                             time = {item.time}>
            </ListItem>
        })}
    </>
}

export default UserList;
