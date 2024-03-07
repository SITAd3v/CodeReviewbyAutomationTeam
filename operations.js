// To check what arthimatical operation should be done
function performoperation(x, y, action) {    if (action === "+") {
      console.log(x + y)
    } else if (action === "-") {
      console.log(x - y);
    } else if (action === "*") {
 console.log(x * y);
    } else if (action === "/") {
            console.log(x / y);
    } else {
      console.log("Pass Valid Action like + or - or * or /");
    }
  }
  performoperation(20, 10, "-");