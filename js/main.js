
/*新打开窗口时初始化游戏*/
window.onload = init();

/*点击重新开始游戏按钮时初始化游戏*/
function newGame(){
	init();
}

/*生成一个介于两个整数之间的随机整数*/
function GetRandom(Min,Max){
	return Min + Math.round((Max-Min) * Math.random());
}

/*给随机的格子放入随机的2或4*/
function RandomNum(){
	// 产生一个1~16的随机数来获取一个格子的ID
	let num = GetRandom(1,16);
	// 空格子数量计数器
	let count = 0;
	// 判断产生随机格子内是否有数字
	if(document.getElementById(num).innerHTML == ""){
		// 产生2或4随机数并放入随机产生的空格子中
		document.getElementById(num).innerHTML = GetRandom(1,2) * 2;
	}
	// 如果格子有数字遍历棋盘是否放慢了棋子
	else{
		// 遍历棋盘是否有空格子，如果有计数器就累加1
		for(let i = 1; i <= 16; i++){
			let piece_  = document.getElementById(i);
			if( piece_.innerHTML== ""){
				count++;
			}
		}
		// 判断棋盘是否有空格，如果有就再次执行随机产生棋子的函数
		if(count > 0){
			RandomNum();
		}
	}
}

/*初始化游戏数据*/
function init(){
	// 获取棋盘table对象
	let checkerBoard = document.getElementById("checkerBoard");
	let text = "";
	let id = 1;
	// 循环产生tr*4+td*4的行和列并给每一个tablecell赋予ID值（用1~16分别代表每个格子的ID值）
	for(let i = 1; i < 5; i++){
		// 拼接<tr>
		text += "<tr>";
		for(let j = i; j <= i+12; j += 4){
			// 拼接<td id=""></td>
			text += "<td id=" + id + "></td>";
			// 使td的ID值依次递增
			id++;
		}
		// 拼接</tr>
		text += "</tr>"
	}
	// 把循环产生的行和列放入table中
	checkerBoard.innerHTML = text;
	// 在棋盘中循环放入两个由RandomNum()产生的随机位置和随机的2或4
	for(let k = 0; k < 2; k++){
		RandomNum();
	}
	Result();
}

/*给不同数值的棋子涂上不同的颜色，并计算得分*/
function Result(){
	// 给分数初始值为0
	let score = 0;
	// 计数棋子的数量
	let count = 0;
	// 定义一个数值对应颜色的对象
	let color_object = {
		"":"#d3d3d3",
    	"2":"#fef4f2",
    	"4":"#fed9a2",
    	"8":"#fc8c5e",
    	"16":"#f8692f",
    	"32":"#f8563d",
    	"64":"#ff3936",
    	"128":"#00c3dd",
    	"256":"#00a4be",
    	"512":"#00abcb",
    	"1024":"#00abcb",
    	"2048":"#00abcb",
    	"4096":"#005d6e"
	};
	for(let i = 1; i <= 16; i++){
		// 遍历所有棋子，给对应数值的棋子涂上对应的颜色
		let text = document.getElementById(i);
		text.style.backgroundColor = color_object[text.innerHTML];
		// 以棋子数值为8的棋子作为临界给数值大于等于8和小于8的棋子数字分别设置不同的颜色
		if(text.innerHTML >= 8){
			text.style.color = "#fff";
		}else{
			text.style.color = "#6e6f71";
		}
		// 如果格子的数值不为空就把此格子上棋子的数值累加作为当前得分
		if(text.innerHTML != ""){
			score += parseInt(text.innerHTML);
			count++;
		}
	}
	// 如果棋子数量为2时，即游戏刚初始化，此时分数置零
	if(count == 2){
		document.getElementById("show_number").innerHTML = 0;
	}
	// 如果棋子数量不是二则正常累加得分
	else{
		document.getElementById("show_number").innerHTML = score;
	}
}
