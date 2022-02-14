import TodosPage from "./TodosPage";
import {connect} from "react-redux";
import {addTask, deleteTask, setTodos, updateTask} from "../../../Redux/Reducers/TodosReducer";
import {setTaskIsCompleted, setTaskIsNotCompleted} from "../../../Redux/Reducers/TodosReducer";
import {useEffect} from "react";


const TodosPageContainer = (props) => {
    useEffect(()=>{
        props.setTodos();
    },[]);

    return <TodosPage {...props}/>
 };

const mapStateToProps = (state) => {
    return {
        todosArray: state.todos.todosArray,
        isFetching: state.common.isFetching,
    }
}

export default connect(mapStateToProps, {
    setTodos,
    addTask, updateTask, deleteTask,
    setTaskIsCompleted, setTaskIsNotCompleted
})(TodosPageContainer);