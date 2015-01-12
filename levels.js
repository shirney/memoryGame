var level1, level2, level3;

level3 = {
	card_styles: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
	numbers_styles: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
	numbers: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],

	init: function() {
		shuffleArray(this.card_styles);
		shuffleArray(this.numbers_styles);
		shuffleArray(this.numbers);
		document.getElementById("correctDemo1").className="demo_card_style card_style1 font_style6";
		document.getElementById("correctDemo1").innerHTML=2;
		document.getElementById("correctDemo2").className="demo_card_style card_style2 font_style6";
		document.getElementById("correctDemo2").innerHTML=3;
		document.getElementById("incorrectDemo1").className="demo_card_style card_style2 font_style3";
		document.getElementById("incorrectDemo1").innerHTML=1;
		document.getElementById("incorrectDemo2").className="demo_card_style card_style2 font_style4";
		document.getElementById("incorrectDemo2").innerHTML=1;
		document.getElementById("ruleText").innerHTML="Match the color of the number.";

	},
	isCardMatched: function(cell1, cell2) {
		var numberStyle1 = cell1.className.substr(cell1.className.indexOf("font_style")+10,1);
		var numberStyle2 = cell2.className.substr(cell2.className.indexOf("font_style")+10,1);

		return numberStyle1 == numberStyle2;
	},
	fillCard: function(cell) {
		cell.innerHTML = this.numbers[cell.id];
		cell.className = "common_card_style card_style" + this.card_styles[cell.id] + " font_style" + this.numbers_styles[cell.id];
		cell.style.setProperty("opacity", 0.5);
		console.log("fill font_style" + this.numbers_styles[cell.id])
	},
	nextLevel: null
};

level2 = {
	styles: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
	numbers: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
	init: function() {
		shuffleArray(this.styles);
		shuffleArray(this.numbers);
		document.getElementById("correctDemo1").className="common_card_color demo_card_style card_style1";
		document.getElementById("correctDemo1").innerHTML=1;
		document.getElementById("correctDemo2").className="common_card_color demo_card_style card_style2";
		document.getElementById("correctDemo2").innerHTML=1;
		document.getElementById("incorrectDemo1").className="common_card_color demo_card_style card_style3";
		document.getElementById("incorrectDemo1").innerHTML=2;
		document.getElementById("incorrectDemo2").className="common_card_color demo_card_style card_style3";
		document.getElementById("incorrectDemo2").innerHTML=3;
		document.getElementById("ruleText").innerHTML="Match the number.";
	},
	isCardMatched: function(cell1, cell2) {
		return cell1.innerHTML == cell2.innerHTML;
	},
	fillCard: function(cell) {
		cell.innerHTML = this.numbers[cell.id];
		cell.className = "common_card_style common_card_color card_style" + this.styles[cell.id];
	},
	nextLevel: level3
};

level1 = {
	styles: [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
	init: function() {
		shuffleArray(this.styles);
		document.getElementById("correctDemo1").className="common_card_color demo_card_style card_style1";
		document.getElementById("correctDemo1").innerHTML=1;
		document.getElementById("correctDemo2").className="common_card_color demo_card_style card_style1";
		document.getElementById("correctDemo2").innerHTML=1;
		document.getElementById("incorrectDemo1").className="common_card_color demo_card_style card_style2";
		document.getElementById("incorrectDemo1").innerHTML=2;
		document.getElementById("incorrectDemo2").className="common_card_color demo_card_style card_style3";
		document.getElementById("incorrectDemo2").innerHTML=3;
	},
	isCardMatched: function(cell1, cell2) {
		return cell1.className == cell2.className;
	},
	fillCard: function(cell) {
		cell.innerHTML = this.styles[cell.id];
		cell.className = "common_card_style common_card_color card_style" + this.styles[cell.id];
		cell.style.setProperty("opacity", 1);
	},
	nextLevel: level2
};