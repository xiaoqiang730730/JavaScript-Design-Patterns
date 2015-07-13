// 1 创建特定类型的对象
// 
// 
var Aproduct = {
	zaomen: function(huawen){
	if(!(this instanceof Aproduct.zaomen)){
		return new Aproduct.zaomen();
	}
	this.suo = 'common';
	this.huawen = huawen || 'common';
	this.create = function(){
		return this.suo + this.huawen;
	}
}
}

var Bproduct = {
	zaomen: function(huawen){
	var that = this;
	if(!(this instanceof that.zaomen)){
		return new that.zaomen();
	}
	this.suo = 'common';
	this.huawen = huawen || 'common';
	this.create = function(){
		return this.suo + this.huawen;
	}
}
}


var xiaoZhang = Aproduct.zaomen();
alert(xiaoZhang.create());

var xiaoli = new Bproduct.zaomen('super');
alert(xiaoli.create());
