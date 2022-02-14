import {useEffect, useState} from "react";
import s from "./Task.module.css";
import {CheckboxButton, DeleteButton, EditButton} from "../common/Buttons/Buttons";
import Input from "../common/Input/Input";
import {Icon24Done} from '@vkontakte/icons';

const Task = (props) => {

    const [isTitleEditing, setIsTitleEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState("");

    const onClose = () => {
        props.onClose(props.id)
    };

    const onChecking = () => {
        if (props.isCompleted) {
            props.onUncheck(props.id);
        } else {
            props.onCheck(props.id);
        }
    };

    const toggleIsTitleEditing = () => {
        setIsTitleEditing(!isTitleEditing)
        if (!isTitleEditing){
            setTitleFromProps()
        }
    };

    const updateTaskTitle = () => {
        props.updateTask(updatedTitle, props.id);
        toggleIsTitleEditing();
    };

    const setTitleFromProps = () => {
        setUpdatedTitle(props.title);
    };

    useEffect(() => {
        setTitleFromProps();
    }, [props.title]);

    return (
        <div className={s.container}>
            <div>
                {isTitleEditing ?
                    <div className={s.input}>
                        <Input
                            onSubmit={updateTaskTitle}
                            value={updatedTitle}
                            onChange={setUpdatedTitle}
                            ButtonIcon={Icon24Done}
                            autoFocus
                        />
                    </div> :
                    <div className={s.title}>
                        {props.title}
                    </div>
                }
            </div>
            <div className={s.actions}>
                <EditButton onClick={toggleIsTitleEditing} isActive={isTitleEditing}/>
                <CheckboxButton onClick={onChecking} isChecked={props.isCompleted}/>
                <DeleteButton onClick={onClose}/>
            </div>
        </div>
    )
};

export default Task;