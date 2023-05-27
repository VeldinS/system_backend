// @ts-ignore
class HttpError extends Error {
    // @ts-ignore
    constructor(message) {
        super(message); // add a "message" property
    }
}
module.exports = HttpError;