class ApiResponce {
    constructor(statusCode, output, message = "Success") {
        this.statusCode = statusCode
        this.output = output
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponce }