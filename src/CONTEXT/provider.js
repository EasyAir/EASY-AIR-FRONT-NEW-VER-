import React, {useReducer} from 'react'

export const Context = React.createContext();

const initialState = {
    modalName : "none"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            return {
                modalName: action.value
            }

        default:
            throw new Error();
    }
}

const ContextProvider = ({children}) =>{
    const [state,contextDispatch] = useReducer(reducer,initialState);

    return(
        <Context.Provider
            value={{modalName:state.modalName,contextDispatch}}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;

// 아래와 같이 사용 가능합니다
/* 
import {useContext, useEffect} from 'react'
import {Context} from '../../CONTEXT/provider'

const CheckSheet =()=>{
    const {modalName,contextDispatch} = useContext(Context)
    useEffect(()=>{
        console.log(modalName)
        contextDispatch({type:"change",value:"writer"})
}) */