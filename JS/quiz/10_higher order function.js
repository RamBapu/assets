// A higher-order function is a function that takes another function as an argument or returns a function as its result.

function loggingMessage(prefix) {
  return function (msg) {
    console.log(prefix.concat(msg));
  };
}

const infoMessage = loggingMessage("INFO:");
const errMessage = loggingMessage("ERR:");

infoMessage("This is an information");
errMessage("This is an error");
