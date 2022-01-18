class LoginResponse extends BaseResponse {
    constructor() {}
    constructor(id, roleId, username, email, emailVerified, phoneNumber, fullName) {
        data = {
            id: id, 
            roleId: roleId,
            username: username,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            fullName: fullName
        }
    }
}