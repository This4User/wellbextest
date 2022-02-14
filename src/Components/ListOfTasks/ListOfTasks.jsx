import s from "./ListsOfTasks.module.css"
import Task from "../Task/Task";

const ListOfTasks = (props) => {
    return (
        <div className={s.container}>
            {
                props.todosArray
                    .map(task =>
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            isCompleted={task.completed}
                            updateTask={props.updateTask}
                            onClose={props.onClose}
                            onCheck={props.onCheck}
                            onUncheck={props.onUncheck}
                        />)}
        </div>
    )
};

export default ListOfTasks;