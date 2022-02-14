import s from "./TodosPage.module.css"
import {useState} from "react";
import ListOfTasks from "../../ListOfTasks/ListOfTasks";
import Input from "../../common/Input/Input";
import {Icon36Add} from '@vkontakte/icons';


const TodosPage = (props) => {

    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        props.addTask(inputValue, 2)
        setInputValue("")
    }

    return (
        <div>
            {
                props.isFetching ?
                    <div>
                        Loading...
                    </div> :
                    <div className={s.container}>
                        <div className={s.input}>
                            <Input
                                onSubmit={addTask}
                                onChange={setInputValue}
                                value={inputValue}
                                placeholder="Add new task"
                                ButtonIcon={Icon36Add}
                            />
                        </div>
                        <ListOfTasks
                            todosArray={props.todosArray}
                            updateTask={props.updateTask}
                            onClose={props.deleteTask}
                            onCheck={props.setTaskIsCompleted}
                            onUncheck={props.setTaskIsNotCompleted}
                        />
                    </div>
            }
        </div>
    )
}

export default TodosPage