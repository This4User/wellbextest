import {
    addObjectToArray,
    deleteObjectInArrayById,
    findObjectInArrayById,
    updateObjectInArrayById
} from "../../utils/utils";
import {toggleIsFetchingAC} from "./CommonReducer";
import TodosAPI from "../../api/TodosAPI";

const SET_TODOS_ARRAY = "SET_TODOS_ARRAY";
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const NOT_COMPLETE_TASK = "NOT_COMPLETE_TASK";

const initialState = {
    todosArray: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": false
        }
    ]
};

const updateTaskArray = (title, isCompleted = "", taskId, todosArray) => {
    const oldTask = findObjectInArrayById(taskId, todosArray).element;
    const updatedTask = {
        userId: oldTask.userId,
        id: oldTask.id,
        title: title || oldTask.title,
        completed: isCompleted !== "" ? isCompleted : oldTask.completed
    };

    return updateObjectInArrayById(taskId, todosArray, updatedTask);
};

const updateTaskIsCompleted = (taskId, todosArray, isCompleted) => {
    return updateTaskArray(null, isCompleted, taskId, todosArray);
};

const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS_ARRAY:
            return {
                ...state,
                todosArray: [...action.todosArray]
            }
        case ADD_TASK:
            const lastTaskId = state.todosArray[state.todosArray.length - 1].id;
            const newTask = {
                userId: action.userId,
                id: lastTaskId + 1,
                title: action.title,
                completed: false
            };

            return {
                ...state,
                todosArray: [...addObjectToArray(newTask, state.todosArray)]
            };
        case UPDATE_TASK:
            const updatedArray = updateTaskArray(action.title, null, action.id, state.todosArray)

            return {
                ...state,
                todosArray: [...updatedArray]
            };

        case DELETE_TASK:
            return {
                ...state,
                todosArray: [...deleteObjectInArrayById(action.id, state.todosArray)]
            };
        case COMPLETE_TASK:
            const arrayWithCompletedTask = updateTaskIsCompleted(action.id, state.todosArray, true);
            return {
                ...state,
                todosArray: [...arrayWithCompletedTask]
            }
        case NOT_COMPLETE_TASK:
            const arrayWithNotCompletedTask = updateTaskIsCompleted(action.id, state.todosArray, false);
            return {
                ...state,
                todosArray: [...arrayWithNotCompletedTask]
            }
        default:
            return state;
    }
};

const setTodosAC = (todosArray) => ({type: SET_TODOS_ARRAY, todosArray});
const addTaskAC = (title, userId) => ({type: ADD_TASK, title, userId});
const updateTaskAC = (title, id) => ({type: UPDATE_TASK, title, id});
const deleteTaskAC = (id) => ({type: DELETE_TASK, id});
const completeTaskAC = (id) => ({type: COMPLETE_TASK, id});
const notCompletedTaskAC = (id) => ({type: NOT_COMPLETE_TASK, id});

export const setTodos = () => (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    return TodosAPI.getTodos()
        .then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setTodosAC(data))
        });
};

export const addTask = (title, userId) => (dispatch) => {
    return dispatch(addTaskAC(title, userId));
};

export const deleteTask = (id) => (dispatch) => {
    return dispatch(deleteTaskAC(id));
};

export const updateTask = (title, id) => (dispatch) => {
    return dispatch(updateTaskAC(title, id));
};

export const setTaskIsCompleted = (id) => (dispatch) => {
    return dispatch(completeTaskAC(id));
};

export const setTaskIsNotCompleted = (id) => (dispatch) => {
    return dispatch(notCompletedTaskAC(id))
}


export default TodosReducer;