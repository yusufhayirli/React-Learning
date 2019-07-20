//imports randomname(default), sum and subst modules from myModule.js
import randomname,{ sum as add , subst as difference } from "./myModule";

//Gives 8
console.log(add(3,5));
//Gives 5
console.log(difference(7,2));
//Gives default operation's result
console.log(randomname(5));

//Default operation can be called as any name.