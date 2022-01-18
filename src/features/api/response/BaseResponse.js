class BaseResponse {
    constructor() {}

    constructor(success, errorCode, errorMessage, data) {
        this.success = success
        this.errorCode = errorCode
        this.errorMessage = errorMessage
        this.data = data
    }
}