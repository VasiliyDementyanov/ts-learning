// The never type is used to represent a type of value that will never occur.
const keepLogging = (message: string): never => {
    while (true) {
        console.log(message);
    }
};
// The return type is never, because no return

// type of invalid is never, because never gonna reach
function outputMessage(message: string) {
    if (typeof message === "string") {
        console.log(message);
    } else {
        let invalid = message;
        console.error(invalid);
    }
}
