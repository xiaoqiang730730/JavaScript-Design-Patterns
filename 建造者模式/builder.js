// 1 发起一个请求
// 2 $.ajax 建造者模式 -->包工头
// 3 工人 小回调函数
// $.ajax({
// 	url:''，
// 	success: function(){}
// })

// 1 房子
// 2 包工头 调用工人进行开工
// 3 工人是盖房子的
// 4 包工头只是一个接口
function Fangzi(){
	this.woshi = '';
	this.keting = '';
	this.chufang = '';
}

function Baogongtou(){
	this.gaifangzi = function(gonren){
		gongren.jian_woshi();
		gongren.jian_keting();
		gongren.jian_chufang();
	}
}

function Gongren(){
	this.jian_woshi = function(){
		console.log('woshi ok!')
	}
	this.jian_keting = function(){
		console.log('keting ok!')
	}
	this.jian_chufang = function(){
		console.log('chufang ok!')
	}
	this.jiaogong = function(){
		var _fanzi = new Fangzi();
		_fanzi.woshi = 'ok';
		_fanzi.keting = 'ok';
		_fanzi.chufang = 'ok';
		return _fanzi;
	}
}

var gongren = new Gongren();
var baogontou = new Baogongtou();
baogontou.gaifangzi(gongren);

var myfangzi = gongren.jiaogong();
console.log(myfangzi);