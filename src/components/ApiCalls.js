const axios = require('axios').default;

export default class ApiCalls{


    uriStart = 'https://reqres.in';

    getReqAxios(address) {
        axios.get(this.uriStart + address)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        
    }

    async postReqAxios(address, body, callback){
        await axios.post(this.uriStart + address, body)
            .then(function (response) {
                console.log('api login respose:',response);
                // return response.data;
                callback(response);
            })
            .catch(function (error) {
                if (error.response) {
                    // console.log(error.response.data.error);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    return {
                        message: error.response.data.error,
                        status: error.response.status
                    }
                  }
            });
    }

    

}