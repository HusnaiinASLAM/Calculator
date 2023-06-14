/*++++++++++++++++++
Below code handles the 
input using buttons
--------------------*/

/* APPROACH: As we want to evalute first two expressions(10*8+6) given in string and replace them by result(80+6).
So we use stack approach.
--------------------*/

const btns = document.querySelectorAll("button");
const input = document.querySelector("input");
const arr = [];
let number = "";
let temp = "";
/* Below we add eventlistener and on evey button press update "number" variable. When any operand is added(*,-) 
we push number into "arr" and reset number
--------------------*/
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inp = parseInt(btn.getAttribute("value"));

    switch (inp) {
      case 11:
        arr.push(number);
        arr.push("+");
        number = "";
        break;
      case 12:
        arr.push(number);
        arr.push("-");
        number = "";
        break;
      case 13:
        arr.push(number);
        arr.push("*");
        number = "";
        break;
      case 14:
        arr.push(number);
        arr.push("/");
        number = "";
        break;
      case 16:
        number = number + ".";
        break;
      case 17:
        number = "";
        arr.length = 0;
        break;

      /* TASK: on pressing "=" button first exp is evaluated.
 Approach: get first three array elements evaluate them and push result again in array.
--------------------*/
      case 99:
        arr.push(number);
        number = "";
        console.log("=");
        if (arr.length > 2) {
          console.log("=");
          first = arr.shift();
          op = arr.shift();
          second = arr.shift();
          const expression = `${first} ${op} ${second}`;
          const result = eval(expression);
          arr.unshift(result);
          console.log(result);
        }
        break;

      default:
        number = number + inp;
    }
    input.value = number;
    // it shows value in input field of FormData.
    if (arr.length >= 1) {
      const n = arr.reduce((acc, current) => {
        return acc + current;
      });
      console.log(n);
      input.value = n + input.value;
    }
  });
});
