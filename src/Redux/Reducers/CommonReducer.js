const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    isFetching: false,
};

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
};

export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleIsFetching = (isFetching) => (dispatch) =>{
    console.log(isFetching)
    return dispatch(toggleIsFetchingAC(isFetching));
};

export default CommonReducer;

