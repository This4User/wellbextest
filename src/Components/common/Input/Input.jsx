import s from "./Input.module.css"
import {useEffect, useRef} from "react";

const Input = ({value, onChange, onSubmit, placeholder, ButtonIcon, autoFocus}) => {
    const inputRef = useRef(null);

    useEffect(()=>{
        if (autoFocus){
            inputRef.current.focus();
        }
    },[])

    return (
        <form
            className={s.container}
            onSubmit={((e) => {
                e.preventDefault()
                onSubmit()
            } )}
        >
            <input
                ref={inputRef}
                placeholder={placeholder || ""}
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
            <button>
                <ButtonIcon/>
            </button>
        </form>
    )
};

export default Input;