import ApiCalls from "./ApiCalls";
export default class User{

    email = '';
    password = '';
    token = '';
    urerId = 0;

    api = new ApiCalls();

    items = [];

    async loginUser(useremail, password, setUserToken){
        this.email = useremail;
        this.password = password;
        const body = {
            email: this.email,
            password: this.password,
        };
        this.api.postReqAxios("/api/login", body, function(response) {
            console.log(response.data);
            setUserToken(response.data);
          })
        // console.log('Array', items);
    }

}