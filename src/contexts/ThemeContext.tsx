import { createContext, useContext, useReducer } from "react";

interface State {
    theme: string
}

interface Action {
    type: FormActions,
    payload: any
}

interface Provider {
    children: JSX.Element
}

interface ContextType {
    state: State,
    dispatch: (action: Action) => void
}


const initialData: State = {
    theme: 'dark'
}

//context

const FormContext = createContext<ContextType | undefined>(undefined)

//reducer

export enum FormActions {
    setTheme,
}

const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setTheme:
            return {...state, theme: action.payload}
        break
    }
}

export const FormProvider = ({children}: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context
}