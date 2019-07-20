//Functions
export function sum(a, b) {(a + b);};

//Constants
export const subst = (a,b) => a-b;

//You can call it as default operation. 
export default (x) => {
    return (x*x);
}

//if we have only 1 operation in a const or function, we do not need "return" statement.
//if we do a couple of or bunch of operation in it, we need it to return result.
