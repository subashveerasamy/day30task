export default function UserReducer(state, action){
    switch(action.type){
        case "GET_USERS":
            return action.payload
         case "GET_USER_BY_ID":
            return state.find(user => user.id === action.payload.id)
       
        case "ADD_USER":
            return [...state, action.payload]
        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload)
        case "UPDATE_USER":
            return state.map(user => {
                user.id == action.payload.id ? action.payload : user
                    
            })
        default:
            alert("Invalid action type");
            return state
    }
}