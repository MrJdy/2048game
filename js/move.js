
// 控制棋盘是否产生随机的棋子，当res==true时产生新的棋子
let res = false;
/*移动棋子使相邻并且相同数值的棋子合并，同时将数值相加*/
function Change(piece_1,piece_2){
	// 判断如果棋子要移动的方向有空格就将其移动
	if(piece_1.innerHTML == "" && piece_2.innerHTML != ""){
		res = true;
		piece_1.innerHTML = piece_2.innerHTML;
		piece_2.innerHTML = "";
	}
	// 判断如果相邻棋子都不为空并且数值相等就将他们合并，同时将一个格子置空
	else if(piece_1.innerHTML != "" && piece_1.innerHTML == piece_2.innerHTML){
		res = true;
		piece_1.innerHTML = parseInt(piece_1.innerHTML) + parseInt(piece_2.innerHTML);
		piece_2.innerHTML = "";
	}
}

/*向上移动棋子*/
function Top(){
	for(let i = 1; i < 5; i++){
		for(let j = i; j <= i + 12; j += 4){
			for(let k = j; k > 4; k -= 4){
				let piece_1 = document.getElementById(k - 4);
				let piece_2 = document.getElementById(k);
				Change(piece_1,piece_2);
			}
		}
	}
}

/*向下移动棋子*/
function Down(){
	for(let i = 1; i < 5; i++){
		for(let j = i + 12; j >= i; j -= 4){
			for(let k = j; k < 13; k += 4){
				let piece_1 = document.getElementById(k + 4);
				let piece_2 = document.getElementById(k);
				Change(piece_1,piece_2);
			}
		}
	}
}

/*向左移动棋子*/
function Left(){
	for(let i = 1; i <= 13; i += 4){
		for(let j = i; j <= i + 3; j += 1){
			for(let k = j; k > i; k -= 1){
				let piece_1 = document.getElementById(k - 1);
				let piece_2 = document.getElementById(k);
				Change(piece_1,piece_2);
			}
		}
	}
}

/*向右移动棋子*/
function Right(){
	for(let i = 1; i <= 13; i += 4){
		for(let j = i + 4; j >= i; j -= 1){
			for(let k = j; k < i + 3; k += 1){
				let piece_1 = document.getElementById(k + 1);
				let piece_2 = document.getElementById(k);
				Change(piece_1,piece_2);
			}
		}
	}
}

/*按压键盘方向键使棋子移动*/
document.onkeydown = function pc_move(){
	res = false;
	if(event.keyCode == 38) Top();
	else if(event.keyCode == 40) Down();
	else if(event.keyCode == 37) Left();
	else if(event.keyCode == 39) Right();
	// 判断游戏是否结束
	gameOver();
	// 如果棋子移动了得到的res==true，就再次产生新的棋子
	if(res) RandomNum();
	// 调用Result()函数，给棋子涂色并记录当前分数
	Result();
}

/*滑动手机屏幕使棋子移动*/
function touch_move(){
	// 定义滑动的起点和终点X、Y坐标值
	let startX = 0;
	let startY = 0;
	let endX = 0;
	let endY = 0;
	// 获取棋盘对象
	let table = document.getElementById("checkerBoard");
	// 给棋盘绑定'touchstart'事件
	table.addEventListener('touchstart',function(e){
		let touch = event.targetTouches[0];
		// 在手指点击屏幕时阻止屏幕拖动事件
		e.preventDefault();
		//获取手指滑动起点坐标
		startX = touch.pageX;
		startY = touch.pageY;
		
	});
	// 给棋盘绑定'touchmove'事件
	table.addEventListener('touchmove',function(e){
		let touch = event.targetTouches[0];
		// 在手指滑动屏幕时阻止屏幕拖动事件
		e.preventDefault();
		//获取手指滑动屏幕的终点坐标
		endX = touch.pageX;
		endY = touch.pageY;
		
	});
	// 给棋盘绑定'touchend'事件
	table.addEventListener('touchend',function(e){
		// 在手指滑动屏幕结束时阻止屏幕拖动事件
		e.preventDefault();
		//滑动结束，计算出手指分别在X、Y轴上滑动距离
		let distanceX = endX - startX;
		let distanceY = endY - startY;
		res = false;
		// console.log("startX " + startX + "  startY" + startY);
		// console.log("endX" + endX + "  endY" + endY);
		// console.log("distanceX" + distanceX + "  distanceY" + distanceY)
		// console.log("------------------------------------------------------------------------------");
		
		// 如果终点坐标X、Y值都不为零则进入下一步判断滑动方向
		if(endX!=0 && endY!=0){
			//向上滑动
			if(Math.abs(distanceY) > Math.abs(distanceX) && distanceY < -10){
				Top();
			}
			//向下滑动
			else if(Math.abs(distanceY) > Math.abs(distanceX) && distanceY > 10){
				Down();
			}
			//向左滑动
			else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -10){
				Left();
			}
			//向右滑动
			else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 10){
				Right();
			}
			// 判断游戏是否结束
			gameOver();
			// 如果棋子移动了得到的res==true，就再次产生新的棋子
			if(res){
				RandomNum();
			}
			// 将以上绑定事件获取的起始点坐标值置零
			startX = startY = endX = endY = 0;
		}
		// 调用Result()函数，给棋子涂色并记录当前分数
		Result();
	});
}
touch_move();




