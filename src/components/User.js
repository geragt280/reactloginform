import ApiCalls from "./ApiCalls";
export default class User{

    email = '';
    password = '';
    token = '';
    urerId = 0;

    api = new ApiCalls();


    async loginUser(useremail, password, callback){
        this.email = useremail;
        this.password = password;
        const body = {
            email: this.email,
            password: this.password,
        }
        const item = await this.api.postReqAxios("/api/login", body);
        return item;
    }

}