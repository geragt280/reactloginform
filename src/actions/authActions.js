export const loginAction = () => {
    return {
        type:'LOGIN',
    }
}
export const addUserAction = (user) => {
    return {
        type: 'ADDUSERS',
        userlist: user,
    }
}