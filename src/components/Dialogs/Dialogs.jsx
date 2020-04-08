import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return <div className={s.dialogsBlock}>
        <div className={s.Dialogsitem}>
            <div className={s.dialog + '' + s.active} >
                <NavLink to="/doalog/1">Dymich</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/2">Andrey</NavLink>
            </div>

            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Sveta</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/4">Sasha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/5">Viktor</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/6">Valera</NavLink>
            </div>
        </div>


        <div className={s.messages}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialogs}>How is yourit - kamasutra?</div>
            <div className={s.dialog}>yo</div>
        </div>
    </div>
}
export default Dialogs;