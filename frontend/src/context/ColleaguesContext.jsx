import { createContext, useReducer } from "react";

export const ColleaguesContext = createContext();

export const colleaguesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COLLEAGUES':
            return {
                colleagues: action.payload
            }
        case 'CREATE_COLLEAGUE':
            return {
                colleagues: [ action.payload, ...state.colleagues ]
            }
        default:
            return state;
    }
}

export const ColleaguesContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(colleaguesReducer, {
        colleagues: null
    });

    return(
        <ColleaguesContext.Provider value={{ ...state, dispatch }}>
            { children }         
        </ColleaguesContext.Provider>
    )
}