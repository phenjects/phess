/* 
 NOTE: some lines were highly revised with ol' deepseek giving me inspiration (did NOT copy and paste) 
 ! removed double for loop
 ! rankDiv was originally useless, only storing the num 8. I could of just used it AS "i" but I was a dumbass
*/

const phessboard = document.getElementById("boardDIV");
const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
const letterNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const squareStyle = `color: transparent; width: 64px; height: 64px; border: none; margin: 0px;`;

let squareCreate;
let rankCreate;

for (let rankDivs = 8; rankDivs > 0; rankDivs--) {
	rankCreate = document.createElement("div");
	rankCreate.setAttribute("id", `${rankDivs}`);
	rankCreate.setAttribute("class", `${rankDivs}`);
	rankCreate.setAttribute("style", `text-align: center;`);
	phessboard.appendChild(rankCreate);

	letterArr.forEach((eachLetter) => {
		squareCreate = document.createElement("fieldset");
		squareCreate.setAttribute("id", `${eachLetter}${rankDivs}`);
		squareCreate.setAttribute("class", `${letterArr.indexOf(eachLetter)}`);
		squareCreate.setAttribute("data-color", `white`);
		squareCreate.setAttribute("style", `background-color: rgb(207, 223, 205); ${squareStyle}`);

		if (squareCreate.className % 2 == 1 && rankCreate.className % 2 == 0) {
			squareCreate.setAttribute("data-color", `black`);
			squareCreate.setAttribute("style", `background-color: rgb(68, 75, 67); ${squareStyle}`);
		} else if (squareCreate.className % 2 == 0 && rankCreate.className % 2 == 1) {
			squareCreate.setAttribute("data-color", `black`);
			squareCreate.setAttribute("style", `background-color: rgb(68, 75, 67); ${squareStyle}`);
		}
		rankCreate.appendChild(squareCreate);
	});
}
