import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messagesdata= [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it=kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]


    return <div className={s.dialogsBlock}>
        <div className={s.Dialogsitem}>
 <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
 <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

 {/*</div>*/}
   <div className={s.messages}/>
   <Message message={messagesdata[0].message}/>
  <Message message={messagesdata[1].message}/>

  </div>
 </div>
}

export default Dialogs;