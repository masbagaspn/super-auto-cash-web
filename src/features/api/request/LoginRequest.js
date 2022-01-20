import BaseRequest from "./BaseRequest"

export default class LoginRequest extends BaseRequest {
    constructor(token, username, password){
        super("POST", {
                "content-type": "application/json",
                "accept": "application/json"
            })
        this.body = JSON.stringify({
            token: token,
            data: {
                username: username,
                password: password
            }
        })
    }
}