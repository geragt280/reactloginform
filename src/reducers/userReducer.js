const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADDUSERS":
            state = action.userlist;
            return state;    
        default:
            return state;
    }
}

export default userReducer;