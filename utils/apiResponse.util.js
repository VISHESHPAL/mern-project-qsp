class ApiResponse {
    constructor(statusCode, message, success, data, meta) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        if (data !== undefined) this.data = data;
        if (meta !== undefined) this.meta = meta;
    }

    send(res) {
        let responseObject = {
            message: this.message,
            success: this.success
        };
        if (this.data !== undefined) responseObject.data = this.data;
        if (this.meta !== undefined) responseObject.meta = this.meta;
        res.status(this.statusCode).json(responseObject);
    }
}

export default ApiResponse;
