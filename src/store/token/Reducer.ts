export interface UserState {
    tokens: string,

}

const inititalState = {

    tokens: "",
}

export const reducer = (state: UserState = inititalState, action: any) => {

    switch(action.type) {
        case "ADD_TOKEN": {
            return {
                tokens: action.payload
            } 
        } 
        default:
            return state
    }
}