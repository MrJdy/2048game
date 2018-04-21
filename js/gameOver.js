
/*游戏结束判断*/
function gameOver(){
	// 设置一个空格子计数器
	let count = 0;
	// 遍历棋盘是否有空格子，如果有计数器就累加1
	for(let i = 1; i <= 16; i++){
		let piece_  = document.getElementById(i);
		if( piece_.innerHTML== ""){
			count++;
		}
	}
	// 判断棋盘是否摆满棋子
	if(count == 0){
		// 当棋盘摆满棋子时，遍历所有棋子看其与相邻的棋子数值是否相等，一旦有相等的计数器就累加1
		for(let i = 1; i <= 16; i++){
			let piece_self = document.getElementById(i);
			let piece_add_1 = document.getElementById(i + 1);
			let piece_cut_1 = document.getElementById(i - 1);
			let piece_add_4 = document.getElementById(i + 4);
			let piece_cut_4 = document.getElementById(i - 4);
			switch (i){
				case 1:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML)){
						count++;
					}
					break;
				case 2:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML)){
						count++;
					}
					break;
				case 3:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML)){
						count++;
					}
					break;
				case 4:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML)){
						count++;
					}
					break;
				case 5:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 6:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 7:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 8:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 9:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 10:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 11:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 12:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_add_4.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 13:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 14:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 15:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_add_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				case 16:
					if(parseInt(piece_self.innerHTML) == parseInt(piece_cut_1.innerHTML) || parseInt(piece_self.innerHTML) == parseInt(piece_cut_4.innerHTML)){
						count++;
					}
					break;
				default:
					break;	
			}
		}
		// 当遍历所有棋子后与相邻位置棋子数值都不相等，游戏结束
		if(count == 0){
			// 获取当前得分
			let score = document.getElementById("show_number").innerHTML;
			alert("潇洒人生，极限挑战。游戏结束！ 您的得分："+score+" 分");
			// 点击确定按钮后初始化游戏
			init();
		}
	}
}


