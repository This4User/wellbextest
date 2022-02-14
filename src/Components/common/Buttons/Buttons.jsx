import {
    Icon24CheckBoxOff,
    Icon24CheckBoxOn,
    Icon24DeleteOutlineAndroid,
    Icon24PenOutline,
    Icon24Write
} from "@vkontakte/icons";
import s from "./Buttons.module.css"
import {NavLink} from "react-router-dom";

export const DeleteButton = ({onClick}) => {
    return (
        <div
            className={s.button}
            onClick={onClick}
        >
            <Icon24DeleteOutlineAndroid/>
        </div>
    )
};

export const CheckboxButton = ({onClick, isChecked}) => {
    return (
        <div
            className={s.button}
            onClick={onClick}
        >
            {
                isChecked ?
                    <Icon24CheckBoxOn/> :
                    <Icon24CheckBoxOff/>
            }
        </div>
    )
};

export const EditButton = ({onClick, isActive}) => {
    return (
        <div
            className={s.button}
            onClick={onClick}
        >
            {
                isActive ?
                <Icon24Write/> :
                <Icon24PenOutline/>
            }
        </div>
    )
};

export const NavbarButton = ({text, link}) => {

    const className = ({isActive}) => isActive ? s.navbarButtonActive : "";

    return (
        <NavLink
            to={link}
            className={className}
        >
            <button
                className={s.navbarButton}
                type="button"
            >
                <div>
                    {text}
                </div>
            </button>
        </NavLink>
    )
};