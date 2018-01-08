var CalendarNew = {
	constellationList: [
		{
			id: 1,
			name: '白羊座'
		},
		{
			id: 2,
			name: '金牛座'
		},
		{
			id: 3,
			name: '双子座'
		},
		{
			id: 4,
			name: '巨蟹座'
		},
		{
			id: 5,
			name: '狮子座'
		},
		{
			id: 6,
			name: '处女座'
		},
		{
			id: 7,
			name: '天秤座'
		},
		{
			id: 8,
			name: '天蝎座'
		},
		{
			id: 9,
			name: '射手座'
		},
		{
			id: 10,
			name: '摩羯座'
		},
		{
			id: 11,
			name: '水瓶座'
		},
		{
			id: 12,
			name: '双鱼座'
		}
	],
	timer: null,
	init: function(){
		var _this = this;
		$(function(){
			_this.getHistoryDate();
			_this.initSelecter($('#js-constellation-list'));

			$('.rili-ad li:last-child').css('margin-right','0');

		 	_this.timer = null;
		 	_this.initBeiJingTime();
		 	_this.timer = setInterval(function(){
		 		_this.initBeiJingTime();
		 	},1000)

		 	// 天气数据
			_this.afterGetAreaId();

			// 限行尾号
			_this.getLimitNum();

			// 初始化星座
			_this.getXingzuoYunshi(1);
		})
	},
	// 生成历史的今天列表
	createDom: function(index,data) {
		var num = index + 1;
		var tpl = '<li>'+'<i class="cal-sprites bg-'+num+' vert_center"></i>'+'<a class="vert_center" href="'+data.url+'">'+data.title+'</a></li>';
		return tpl;
	},

	// 初始化历史的今天列表
	getHistoryDate: function(){
		console.log(1111)
		var _this = this;
		var url = 'http://m.tool.114la.com/api/xingzuoyunshiInfo_pc/today/cb';
		$.ajax({
			url: url,
			type: "GET",
			dataType: "jsonp",
			success: function(res) {
				console.log(res)
			}
		})
		function cb(res) {
			console.log(res)
		}
		// $.get(url,function(data){
		// 	if (data.error_code == 0) {
		// 		var data = data.data;
		// 		var _html = '';
		// 		data.forEach(function(item,index){
		// 			if (index <= 5) {
		// 				var lpt = _this.createDom(index,item);
		// 				_html += lpt;
		// 			}
		// 		})
		// 		$('.history-today ol').html(_html)
		// 	}
		// })
	},

	// 生成星座列表
	initSelecter: function($objWrap) {
		var _this = this;
		var _html = '';
		for (var i = 0; i < this.constellationList.length; i++) {
			var li = '<li date="'+this.constellationList[i].id+'">'+this.constellationList[i].name+'</li>'
			_html += li;
		}
		$objWrap.html(_html)

		// 星座选择
		var xingzuo = new Selecter("#js-constellation-handle","#js-constellation-list","#cal-constellation-inp",{
			handeTxt:".selected-text",defaultValue:"1"
		});
		xingzuo.addListener({
            "afterSelect":function(){
            	// get当前选中星座的id
            	var xingzuoId;
            	var name = $('.selected-text').text();
            	for (var i = 0; i < _this.constellationList.length; i++) {
            		xingzuoId = _this.constellationList[i].id;
            	}
                _this.getXingzuoYunshi(xingzuoId);
            }
        });
	},

	// 获取本地的城市名称
	getLocalIp: function(callback) {
		var _this = this;
		$.ajax({
			url: "http://api.114la.com/ip/",
			type: "GET",
			dataType: 'JSONP',
			jsonpCallback:"ILData_callback",
			success: function(data){
				var province = ILData[2] || '北京';
				var city = ILData[3] || '北京';
				_this.setLocatedCity(city);
				callback && callback(province,city)
			},
			error: function(err) {
				console.log(err)
			}
		})
	},
	// 星座运势
	getXingzuoYunshi: function(id) {
		var url = 'http://m.tool.114la.com/api/xingzuoyunshiInfo/'+id;
		$.ajax({
			url: url,
			type: 'GET',
			success: function(res){
				if (res.error_code == 0) {
					var data = res.data.today[0];
					$('.js-yunshi').html(''+
						'<p class="fl">'+
                            '<span>幸运数字：</span>'+
                            '<span>'+data.list[7].value+'&nbsp;</span>'+
                        '</p>'+
                        '<p class="fl"><span>幸运颜色：</span><span>'+data.list[6].value+'</span></p>'
					);
					// 星座点评
					for (var i = 0; i < data.list[0].star; i++) {
						$('.constellation-info-fortune .bg-star').eq(i).addClass('on');
					}
				}
			}
		})
	},

	// 获取当前城市
	setLocatedCity: function(name) {
		$('.js-located-city').text(name);
	},
	// 获取省id
	getProvinceId: function(callback) {
		var provinceId;
		this.getLocalIp(function(province,city){
			$.get("./data/city/base.json",function(res) {
				for(var i in res){
					var zm = res[i].split(",")[0];
					var wz = res[i].split(",")[1];
					if(wz == province){
						provinceId = i.substring(1);
						callback && callback(provinceId,city);
					}
				}
			})
		})
	},
	// 获取城市id
	getCityId: function(callback) {
		var cityId;
		this.getProvinceId(function(provinceId,city){
			$.get("./data/city/"+provinceId+".json",function(res){
				for(var j in res){
					var cityName = res[j].split(",")[1];
					if(cityName == city){
						cityId = j.substring(1);
						callback && callback(provinceId,cityId,city)
					}
				}
			},"json");
		})
	},
	// 根据获取的areaid操作天气数据
	afterGetAreaId: function() {
		var areaId;
		var _this = this;
		this.getCityId(function(provinceId,cityId,city){
			$.get("./data/city/"+provinceId+"/"+cityId+".json",function(areasName){
				for(var z in areasName){
					var areaname = areasName[z].split(",")[1];
					if(areaname == city){
						areaId = z.substring(1);
						_this.getWeather(areaId)
					}
				}
			},"json");
		})
	},
	// 获取天气数据
	getWeather: function(areaId) {
		var _this = this;
		var url = 'http://api.tianqi.114la.com/weather/index.php/api/weather_114la/areaid/'+areaId;
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			jsonpCallback: 'callback',
			success: function(res){
				if (res.error_code == 0) {
					var weatherInfo = res.weatherinfo;
					var today = _this.GetDateStr(0);
					var tomorrow = _this.GetDateStr(1);
					var todayWind = _this.splitStr(weatherInfo.wind1);
					var tomorrowWind = _this.splitStr(weatherInfo.wind2);
					var _html = ''+
							'<div class="cal-right-weather-today fl">'+
                                '<div class="cal-right-weather-item">'+
                                    '<div class="desc">'+
                                        '<strong class="top">今天</strong>'+
                                        '<span class="bottom">'+today+'</span>'+
                                    '</div>'+
                                    '<div class="temper">'+
                                        '<strong class="top">'+weatherInfo.weather1+'</strong>'+
                                        '<span class="bottom temp">'+weatherInfo.temp1+'</span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="cal-right-weather-item">'+
                                    '<div class="desc">'+
                                        '<img src="'+weatherInfo.img1+'">'+
                                    '</div>'+
                                    '<div class="temper">'+
                                        '<strong class="top">'+todayWind[1]+'</strong>'+
                                        '<span class="bottom">'+todayWind[0]+'</span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="cal-right-weather-tomorrow fl">'+
                                '<div class="cal-right-weather-item">'+
                                    '<div class="desc">'+
                                        '<strong class="top">明天</strong>'+
                                        '<span class="bottom">'+tomorrow+'</span>'+
                                    '</div>'+
                                    '<div class="temper">'+
                                        '<strong class="top">'+weatherInfo.weather2+'</strong>'+
                                        '<span class="bottom temp">'+weatherInfo.temp2+'</span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="cal-right-weather-item">'+
                                    '<div class="desc">'+
                                        '<img src="'+weatherInfo.img1+'">'+
                                    '</div>'+
                                    '<div class="temper">'+
                                        '<strong class="top">'+tomorrowWind[1]+'</strong>'+
                                        '<span class="bottom">'+tomorrowWind[0]+'</span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
                    $('.cal-right-weather').html(_html);
                    $('.js-air-aqi').text('空气质量：'+weatherInfo.air_aqi)
				}
			}
		})

	},
	// 天气接口JSONP回调
	callback: function(date){
		console.log(111)
	},
	// 限行尾号
	getLimitNum: function() {
		var today = new Date();
		var config = [
		    {day:"星期日",lastNum:false},
		    {day:"星期一",lastNum:[1,6]},
		    {day:"星期二",lastNum:[2,7]},
		    {day:"星期三",lastNum:[3,8]},
		    {day:"星期四",lastNum:[4,9]},
		    {day:"星期五",lastNum:[5,0]},
		    {day:"星期六",lastNum:false},
		]
		function lastNumberText(day){
		    var lastNum = config[day].lastNum;
		    if(lastNum){
		        return "限行尾号："+lastNum[0]+"和"+lastNum[1];
		    }else{
		        return "不限行";
		    }
		}
		var number = lastNumberText(today.getDay());
		$('.js-limitcat').html(number);
	},

	// 拆分字符串
	splitStr: function(str) {
		var result = [];
		if (/\s+/i.test(str)) {
			result = str.split(' ');
		}
		return result;
	},
	// 获取时间
	GetDateStr: function(count) {
		var dd = new Date();
		dd.setDate(dd.getDate()+count);
		var y = dd.getFullYear();
		var m = dd.getMonth()+1;
		var d = dd.getDate();
		return this.toTwo(m)+"/"+this.toTwo(d);
	},
	toTwo: function(n) {
		return n > 10? n : '0'+n;
	},

	// 当前时间
	initBeiJingTime: function() {
		var now = new Date();
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		var result = this.toTwo(h) +':'+ this.toTwo(m) +':'+ this.toTwo(s);
		$('.js-custom-nowtime-p').html('北京时间 '+result)
	},

	toTwo: function(n){
		return n < 10 ? "0" + n : n;
	}

}

;(function(){
	CalendarNew.init()
})()