/* 
 NOTE: some lines were highly revised with ol' deepseek giving me inspiration (did NOT copy and paste) 
 ! removed double for loop
 ! rankDiv was originally useless, only storing the num 8. I could of just used it AS "i" but I was a dumbass
*/
const phessboard = document.getElementById("boardDIV");
const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
const letterNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const squareStyle = `color: transparent; width: 96px; height: 96px; border: none; margin: 0px;`;
const startPosArr = {
  wking: ["d1"],
  bking: ["d8"],
  wquee: ["e1"],
  bquee: ["e8"],
  wpawn: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  bpawn: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  wrook: ["a1", "h1"],
  brook: ["a8", "h8"],
  wbish: ["c1", "f1"],
  bbish: ["c8", "f8"],
  bnigh: ["b1", "g1"],
  bnigh: ["b8", "g8"]
};  

let squareCreate;
let rankCreate;
let pieceCreate;

for (let rankDivs = 8; rankDivs > 0; rankDivs--) {
	rankCreate = document.createElement("div");
	rankCreate.setAttribute("id", `${rankDivs}`);
	rankCreate.setAttribute("class", `${rankDivs}`);
	rankCreate.setAttribute("style", `display: flex; justify-content: center;`);
	phessboard.appendChild(rankCreate);

	letterArr.forEach((eachLetter) => {
		squareCreate = document.createElement("td");
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
		};
		rankCreate.appendChild(squareCreate);
	});
  startPosArr.wpawn.forEach((whitepawn) => {
    pieceCreate = document.createElement("img")
    if (squareCreate.id == whitepawn) {
      pieceCreate.setAttribute("src", `/assets/lightpawnimg.svg`);
    };
  });
  squareCreate.appendChild(pieceCreate);
};
