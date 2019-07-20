//imports randomname(default), sum and subst modules from myModule.js
import * as myModule from "./myModule";

//Gives 8
console.log(myModule.sum(5,2));
//Gives 5
console.log(myModule.subst(7,3));
//Gives default operation's result
console.log(myModule.default(5));

//Default operation can be called as any name.