class BaseResponse {
    constructor(token, success, errorCode, errorMessage, data){
        this.token = token;
        this.success = success;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

class LoginResponse extends BaseResponse {
    constructor(token, success, errorCode, errorMessage, id, roleId, username, email, emailVerified, phoneNumber, fullName){
        super(token, success, errorCode, errorMessage)
        this.data = {
            id: id, 
            roleId: roleId,
            username: username,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            fullName: fullName,
        }
    }
}

console.log(LoginResponse);

