export default class BaseRequest {
    constructor(method, headers) {
        this.method = method;
        this.headers = headers;
    }
}