/*  日历 */





/**
* ==========================================
* citys.js
* Copyright (c) 2012 wwww.114la.com
* ==========================================
*/

var CityArr = [
["CategoryName", "ParentId", "Id"],
["华北地区", "0", "1"],
["北京", "1", "109"],
["北京", "109", "101010100", "B"],
["天津", "1", "110"],
["天津", "110", "101030100", "T"],
["河北", "1", "111"],
["石家庄", "111", "101090101", "S"],
["保定", "111", "101090201", "B"],
["承德市", "111", "101090402", "C"],
["沧州", "111", "101090701", "C"],
["衡水", "111", "101090801", "H"],
["邯郸", "111", "101091001", "H"],
["廊坊", "111", "101090601", "L"],
["秦皇岛", "111", "101091101", "Q"],
["唐山", "111", "101090501", "T"],
["邢台", "111", "101090901", "X"],
["张家口", "111", "101090301", "Z"],
["山西", "1", "112"],
["太原", "112", "101100101", "T"],
["长治", "112", "101100501", "C"],
["大同", "112", "101100201", "D"],
["晋中", "112", "101100401", "J"],
["晋城", "112", "101100601", "J"],
["临汾", "112", "101100701", "L"],
["吕梁", "112", "101101100", "L"],
["忻州", "112", "101101001", "X"],
["阳泉", "112", "101100301", "Y"],
["运城", "112", "101100801", "Y"],
["朔州", "112", "101100901", "Y"],
["内蒙古", "1", "113"],
["呼和浩特", "113", "101080101", "H"],
["阿拉善左旗", "113", "101081201", "A"],
["包头", "113", "101080201", "B"],
["赤峰", "113", "101080601", "C"],
["鄂尔多斯", "113", "101080701", "E"],
["呼伦贝尔", "113", "101081000", "H"],
["集宁", "113", "101080401", "J"],
["临河", "113", "101080801", "L"],
["通辽", "113", "101080501", "T"],
["乌海", "113", "101080301", "W"],
["乌兰浩特", "113", "101081101", "W"],
["锡林浩特", "113", "101080901", "X"],
["东北地区", "0", "2"],
["辽宁", "2", "114"],
["沈阳", "114", "101070101", "S"],
["鞍山", "114", "101070301", "A"],
["本溪", "114", "101070501", "B"],
["朝阳", "114", "101071201", "C"],
["大连", "114", "101070201", "D"],
["丹东", "114", "101070601", "D"],
["抚顺", "114", "101070401", "F"],
["阜新", "114", "101070901", "F"],
["葫芦岛", "114", "101071401", "H"],
["锦州", "114", "101070701", "J"],
["辽阳", "114", "101071001", "L"],
["盘锦", "114", "101071301", "P"],
["铁岭", "114", "101071101", "T"],
["营口", "114", "101070801", "Y"],
["吉林", "2", "115"],
["长春", "115", "101060101", "C"],
["白城", "115", "101060601", "B"],
["白山", "115", "101060901", "B"],
["吉林", "115", "101060201", "J"],
["辽源", "115", "101060701", "L"],
["四平", "115", "101060401", "S"],
["松原", "115", "101060801", "S"],
["通化", "115", "101060501", "T"],
["延吉", "115", "101060301", "Y"],
["黑龙江", "2", "116"],
["哈尔滨", "116", "101050101", "H"],
["大兴安岭", "116", "101050701", "D"],
["大庆", "116", "101050901", "D"],
["黑河", "116", "101050601", "H"],
["鹤岗", "116", "101051201", "H"],
["佳木斯", "116", "101050401", "J"],
["鸡西", "116", "101051101", "J"],
["牡丹江", "116", "101050301", "M"],
["齐齐哈尔", "116", "101050201", "Q"],
["七台河", "116", "101051002", "Q"],
["绥化", "116", "101050501", "S"],
["伊春", "116", "101050801", "Y"],
["双鸭山", "116", "101051301", "S"],
["华东地区", "0", "3"],
["上海", "3", "117"],
["上海", "117", "101020100", "S"],
["山东", "3", "118"],
["济南", "118", "101120101", "J"],
["滨州", "118", "101121101", "B"],
["德州", "118", "101120401", "D"],
["东营", "118", "101121201", "D"],
["菏泽", "118", "101121001", "H"],
["济宁", "118", "101120701", "J"],
["临沂", "118", "101120901", "L"],
["莱芜", "118", "101121601", "L"],
["聊城", "118", "101121701", "L"],
["青岛", "118", "101120201", "Q"],
["潍坊", "118", "101120601", "W"],
["威海", "118", "101121301", "W"],
["烟台", "118", "101120501", "Y"],
["日照", "118", "101121501", "R"],
["泰安", "118", "101120801", "T"],
["淄博", "118", "101120301", "Z"],
["枣庄", "118", "101121401", "Z"],
["安徽", "3", "119"],
["合肥", "119", "101220101", "H"],
["安庆", "119", "101220601", "A"],
["蚌埠", "119", "101220201", "B"],
["亳州", "119", "101220901", "B"],
["滁州", "119", "101221101", "C"],
["巢湖", "119", "101221601", "C"],
["池州", "119", "101221701", "C"],
["阜阳", "119", "101220801", "F"],
["淮南", "119", "101220401", "H"],
["黄山", "119", "101221001", "H"],
["淮北", "119", "101221201", "H"],
["六安", "119", "101221501", "L"],
["马鞍山", "119", "101220501", "M"],
["宿州", "119", "101220701", "S"],
["铜陵", "119", "101221301", "T"],
["芜湖", "119", "101220301", "W"],
["宣城", "119", "101221401", "X"],
["江苏", "3", "120"],
["南京", "120", "101190101", "N"],
["常州", "120", "101191101", "C"],
["南通", "120", "101190501", "N"],
["淮安", "120", "101190901", "H"],
["连云港", "120", "101191001", "L"],
["苏州", "120", "101190401", "S"],
["宿迁", "120", "101191301", "S"],
["泰州", "120", "101191201", "T"],
["无锡", "120", "101190201", "W"],
["徐州", "120", "101190801", "X"],
["扬州", "120", "101190601", "Y"],
["盐城", "120", "101190701", "Y"],
["镇江", "120", "101190301", "Z"],
["浙江", "3", "121"],
["杭州", "121", "101210101", "H"],
["湖州", "121", "101210201", "H"],
["嘉兴", "121", "101210301", "J"],
["金华", "121", "101210901", "J"],
["丽水", "121", "101210801", "L"],
["宁波", "121", "101210401", "N"],
["衢州", "121", "101211001", "Q"],
["绍兴", "121", "101210501", "S"],
["台州", "121", "101210601", "T"],
["温州", "121", "101210701", "W"],
["舟山", "121", "101211101", "Z"],
["江西", "3", "122"],
["南昌", "122", "101240101", "N"],
["抚州", "122", "101240401", "F"],
["赣州", "122", "101240701", "G"],
["九江", "122", "101240201", "J"],
["吉安", "122", "101240601", "J"],
["景德镇", "122", "101240801", "J"],
["萍乡", "122", "101240901", "P"],
["上饶", "122", "101240301", "S"],
["新余", "122", "101241001", "X"],
["宜春", "122", "101240501", "Y"],
["鹰潭", "122", "101241101", "Y"],
["福建", "3", "123"],
["福州", "123", "101230101", "F"],
["龙岩", "123", "101230701", "L"],
["宁德", "123", "101230301", "N"],
["南平", "123", "101230901", "N"],
["莆田", "123", "101230401", "P"],
["泉州", "123", "101230501", "Q"],
["三明", "123", "101230801", "S"],
["厦门", "123", "101230201", "X"],
["漳州", "123", "101230601", "Z"],
["中南地区", "0", "4"],
["河南", "4", "124"],
["郑州", "124", "101180101", "Z"],
["安阳", "124", "101180201", "A"],
["鹤壁", "124", "101181201", "H"],
["焦作", "124", "101181101", "J"],
["济源", "124", "101181801", "J"],
["开封", "124", "101180801", "K"],
["洛阳", "124", "101180901", "L"],
["漯河", "124", "101181501", "L"],
["南阳", "124", "101180701", "N"],
["平顶山", "124", "101180501", "P"],
["濮阳", "124", "101181301", "P"],
["商丘", "124", "101181001", "S"],
["三门峡", "124", "101181701", "S"],
["信阳", "124", "101180601", "X"],
["新乡", "124", "101180301", "X"],
["许昌", "124", "101180401", "X"],
["周口", "124", "101181401", "Z"],
["驻马店", "124", "101181601", "Z"],
["湖北", "4", "125"],
["武汉", "125", "101200101", "W"],
["鄂州", "125", "101200301", "E"],
["恩施", "125", "101201001", "E"],
["黄冈", "125", "101200501", "H"],
["黄石", "125", "101200601", "H"],
["荆州", "125", "101200801", "J"],
["荆门", "125", "101201401", "J"],
["潜江", "125", "101201701", "Q"],
["十堰", "125", "101201101", "S"],
["神农架", "125", "101201201", "S"],
["随州", "125", "101201301", "S"],
["天门", "125", "101201501", "T"],
["襄樊", "125", "101200201", "X"],
["孝感", "125", "101200401", "X"],
["咸宁", "125", "101200701", "X"],
["仙桃", "125", "101201601", "X"],
["宜昌", "125", "101200901", "Y"],
["湖南", "4", "126"],
["长沙", "126", "101250101", "C"],
["郴州", "126", "101250501", "C"],
["常德", "126", "101250601", "C"],
["衡阳", "126", "101250401", "H"],
["怀化", "126", "101251201", "H"],
["吉首", "126", "101251501", "J"],
["娄底", "126", "101250801", "L"],
["黔阳", "126", "101251301", "Q"],
["邵阳", "126", "101250901", "S"],
["湘潭", "126", "101250201", "X"],
["益阳", "126", "101250701", "Y"],
["岳阳", "126", "101251001", "Y"],
["永州", "126", "101251401", "Y"],
["株洲", "126", "101250301", "Z"],
["张家界", "126", "101251101", "Z"],
["广东", "4", "127"],
["广州", "127", "101280101", "G"],
["潮州", "127", "101281501", "C"],
["东莞", "127", "101281601", "D"],
//["东沙岛","127","101282105","D"],
["佛山", "127", "101280800", "F"],
["惠州", "127", "101280301", "H"],
["河源", "127", "101281201", "H"],
["江门", "127", "101281101", "J"],
["揭阳", "127", "101281901", "J"],
["梅州", "127", "101280401", "M"],
["茂名", "127", "101282001", "M"],
["清远", "127", "101281301", "Q"],
["韶关", "127", "101280201", "S"],
["汕头", "127", "101280501", "S"],
["深圳", "127", "101280601", "S"],
["汕尾", "127", "101282101", "S"],
["云浮", "127", "101281401", "Y"],
["阳江", "127", "101281801", "Y"],
["珠海", "127", "101280701", "Z"],
["肇庆", "127", "101280901", "Z"],
["湛江", "127", "101281001", "Z"],
["中山", "127", "101281701", "Z"],
["广西", "4", "128"],
["南宁", "128", "101300101", "N"],
["北海", "128", "101301301", "B"],
["百色", "128", "101301001", "B"],
["崇左", "128", "101300201", "C"],
["防城港", "128", "101301401", "F"],
["桂林", "128", "101300501", "G"],
["贵港", "128", "101300801", "G"],
["贺州", "128", "101300701", "H"],
["河池", "128", "101301201", "H"],
["柳州", "128", "101300301", "L"],
["来宾", "128", "101300401", "L"],
["钦州", "128", "101301101", "Q"],
["梧州", "128", "101300601", "W"],
["玉林", "128", "101300901", "Y"],
["海南", "4", "129"],
["海口", "129", "101310101", "H"],
["白沙", "129", "101310907", "B"],
["保亭", "129", "101311614", "B"],
["澄迈", "129", "101310604", "C"],
["昌江", "129", "101310806", "C"],
["东方", "129", "101310402", "D"],
["儋州", "129", "101310705", "D"],
["定安", "129", "101311109", "D"],
["临高", "129", "101310503", "L"],
["陵水", "129", "101311816", "L"],
["乐东", "129", "101312321", "L"],
["琼山", "129", "101310102", "Q"],
["琼中", "129", "101310208", "Q"],
["琼海", "129", "101311311", "Q"],
["清兰", "129", "101311513", "Q"],
["南沙岛", "129", "101312220", "N"],
["三亚", "129", "101310301", "S"],
["珊瑚岛", "129", "101312018", "S"],
["屯昌", "129", "101311210", "T"],
["通什", "129", "101312422", "T"],
["文昌", "129", "101311412", "W"],
["万宁", "129", "101311715", "W"],
["西沙", "129", "101311917", "X"],
["永署礁", "129", "101312119", "Y"],
["西北地区", "0", "5"],
["陕西", "5", "130"],
["西安", "130", "101110101", "X"],
["安康", "130", "101110701", "A"],
["宝鸡", "130", "101110901", "B"],
["汉中", "130", "101110801", "H"],
["商洛", "130", "101110601", "S"],
["铜川", "130", "101111001", "T"],
["渭南", "130", "101110501", "W"],
["咸阳", "130", "101110200", "X"],
["延安", "130", "101110300", "Y"],
["榆林", "130", "101110401", "Y"],
["甘肃", "5", "131"],
["兰州", "131", "101160101", "L"],
["白银", "131", "101161301", "B"],
["定西", "131", "101160201", "D"],
["合作", "131", "101161201", "H"],
["金昌", "131", "101160601", "J"],
["酒泉", "131", "101160801", "J"],
["临夏", "131", "101161101", "L"],
["平凉", "131", "101160301", "P"],
["庆阳", "131", "101160401", "Q"],
["天水", "131", "101160901", "T"],
["武威", "131", "101160501", "W"],
["武都", "131", "101161001", "W"],
["张掖", "131", "101160701", "Z"],
["宁夏", "5", "132"],
["银川", "132", "101170101", "Y"],
["固原", "132", "101170401", "G"],
["石嘴山", "132", "101170201", "S"],
["吴忠", "132", "101170301", "W"],
["中卫", "132", "101170501", "Z"],
["青海", "5", "133"],
["西宁", "133", "101150101", "X"],
["果洛", "133", "101150501", "G"],
["海西", "133", "101150701", "H"],
["海北", "133", "101150801", "H"],
["海东", "133", "101150201", "H"],
["黄南", "133", "101150301", "H"],
["海南", "133", "101150401", "H"],
["玉树", "133", "101150601", "Y"],
["新疆", "5", "134"],
["乌鲁木齐", "134", "101130101", "W"],
["阿勒泰", "134", "101131401", "A"],
["阿图什", "134", "101131501", "A"],
["阿克苏", "134", "101130801", "A"],
["阿拉尔", "134", "101130701", "A"],
["博乐", "134", "1011301601", "B"],
["昌吉", "134", "101130401", "C"],
["哈密", "134", "101131201", "H"],
["和田", "134", "101131301", "H"],
["克拉玛依", "134", "101130201", "K"],
["喀什", "134", "101130901", "K"],
["库尔勒", "134", "101130601", "K"],
["石河子", "134", "101130301", "S"],
["吐鲁番", "134", "101130501", "T"],
["塔城", "134", "101131101", "T"],
["伊宁", "134", "101131001", "Y"],
["西南地区", "0", "6"],
["重庆", "6", "135"],
["重庆", "135", "101040100", "C"],
["四川", "6", "136"],
["成都", "136", "101270101", "C"],
["阿坝", "136", "101271901", "A"],
["巴中", "136", "101270901", "B"],
["德阳", "136", "101272001", "D"],
["达州", "136", "101270601", "D"],
["广元", "136", "101272101", "G"],
["甘孜", "136", "101271801", "G"],
["泸州", "136", "101271001", "L"],
["乐山", "136", "101271401", "L"],
["凉山", "136", "101271601", "L"],
["眉山", "136", "101271501", "M"],
["绵阳", "136", "101270401", "M"],
["南充", "136", "101270501", "N"],
["内江", "136", "101271201", "N"],
["攀枝花", "136", "101270201", "P"],
["遂宁", "136", "101270701", "S"],
["广安", "136", "101270801", "G"],
["雅安", "136", "101271701", "Y"],
["宜宾", "136", "101271101", "Y"],
["资阳", "136", "101271301", "Z"],
["自贡", "136", "101270301", "Z"],
["贵州", "6", "137"],
["贵阳", "137", "101260101", "G"],
["安顺", "137", "101260301", "A"],
["毕节", "137", "101260701", "B"],
["都匀", "137", "101260401", "D"],
["凯里", "137", "101260501", "K"],
["六盘水", "137", "101260801", "L"],
["铜仁", "137", "101260601", "T"],
["遵义", "137", "101260201", "Z"],
["黔西", "137", "101260901", "Q"],
["云南", "6", "138"],
["昆明", "138", "101290101", "K"],
["保山", "138", "101290501", "B"],
["楚雄", "138", "101290801", "C"],
["大理", "138", "101290201", "D"],
["德宏", "138", "101291501", "D"],
["红河", "138", "101290301", "H"],
["景洪", "138", "101291601", "J"],
["临沧", "138", "101291101", "L"],
["丽江", "138", "101291401", "L"],
["怒江", "138", "101291201", "N"],
["曲靖", "138", "101290401", "Q"],
["思茅", "138", "101290901", "S"],
["文山", "138", "101290601", "W"],
["玉溪", "138", "101290701", "Y"],
["昭通", "138", "101291001", "Z"],
["中甸", "138", "101291301", "Z"],
["西藏", "6", "139"],
["拉萨", "139", "101140101", "L"],
["阿里", "139", "101140701", "A"],
["昌都", "139", "101140501", "C"],
["林芝", "139", "101140401", "L"],
["那曲", "139", "101140601", "N"],
["日喀则", "139", "101140201", "R"],
["山南", "139", "101140301", "S"],
["港澳台", "0", "7"],
["香港", "7", "140"],
["香港", "140", "101320101", "X"],
["澳门", "7", "141"],
["澳门", "141", "101330101", "A"],
["台湾", "7", "142"],
["台北县", "142", "101340101", "T"],
["高雄", "142", "101340201", "G"],
["花莲", "142", "101341001", "H"],
["嘉义", "142", "101340901", "J"],
["马公", "142", "101340801", "M"],
["彭佳屿", "142", "101341201", "P"],
["台南", "142", "101340301", "T"],
["台中", "142", "101340401", "T"],
["桃园", "142", "101340501", "T"],
["台东", "142", "101341101", "T"],
["新竹县", "142", "101340601", "X"],
["宜兰", "142", "101340701", "Y"]
]


 if(!Array.prototype.indexOf){Array.prototype.indexOf=function(elt){var len=this.length>>>0;var from=Number(arguments[1])||0;from=(from<0)?Math.ceil(from):Math.floor(from);if(from<0)from+=len;for(;from<len;from++){if(from in this&&this[from]===elt)return from}return-1}}

var Ylmf = { 
getProId : function(proName) {
    var ProId;
    for (var i = 0, len = CityArr.length; i < len; ++i) {
        if (CityArr[i][0] == proName && parseInt(CityArr[i][2]) <900) {
            ProId = CityArr[i][2];
        }
    }
    return ProId
},
getCityId:function(ProId, CityName) {
    if(!ProId) return false;
    var CityId;
    for (var i = 0, len = CityArr.length; i < len; ++i) {
        if (CityArr[i][1] == ProId && CityArr[i][0] == CityName) {
            CityId = CityArr[i][2];
        }
    }
    return CityId
},
getCitys : function(ProId){
    if(!ProId) return false;
    var Citys = [];
    for (var i = 0, len = CityArr.length; i < len; ++i) {
        if (CityArr[i][1] == ProId) {
            Citys.push(CityArr[i]);
        }
    }
    return Citys;
},
getSelectValue:function(select) {
    var idx = select.selectedIndex,
    option,
    value;
    if (idx > -1) {
    option = select.options[idx];
    value = option.innerHTML.split(' ')[1];
        return value;
    }
    return null;
},
    ScriptLoader:{
        Add: function(config) {
            if (!config || !config.src) return;
            var  doc = document;
            var Head = doc.getElementsByTagName('head')[0],         
                Script = doc.createElement('script');
                Script.onload = Script.onreadystatechange = function() {
                    if (Script && Script.readyState && Script.readyState != 'loaded' && Script.readyState != 'complete') return;
                    Script.onload = Script.onreadystatechange = Script.onerror = null;
                    Script.Src = '';
                    if(!doc.all){Script.parentNode.removeChild(Script);}
                    Script = null;
                };
                Script.src = config.src;
                Script.charset = config.charset || 'gb2312';
                Head.insertBefore(Script,Head.firstChild);
            return Script;
        }
    }
}





/**
* ==========================================
* weather.js
* Copyright (c) 2012 wwww.114la.com
* ==========================================
*/

var __$ = function (id) { var doc = document; return doc.getElementById(id) }

//var TPL = '<a href="http://tool.114la.com/tianqi/#{cityid}" title="点击查看未来几天天气预报" target="_blank"><strong>#{city}</strong>&nbsp;<strong>今天</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" class="i" src="images/i/#{img1}.png" />&nbsp;#{today}&nbsp;&nbsp;<strong>明天</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" src="images/i/#{img2}.png" class="i" />&nbsp;#{tomorrow}</a>&nbsp;&nbsp;<a href="javascript:void(0);" onclick="Weather.set();return false;" target="_self">[选择城市]</a>';





format = function (_, B) {
    if (arguments.length > 1) {
        var F = format,
        H = /([.*+?^=!:${}()|[\]\/\\])/g,
        C = (F.left_delimiter || "{").replace(H, "\\$1"),
        A = (F.right_delimiter || "}").replace(H, "\\$1"),
        E = F._r1 || (F._r1 = new RegExp("#" + C + "([^" + C + A + "]+)" + A, "g")),
        G = F._r2 || (F._r2 = new RegExp("#" + C + "(\\d+)" + A, "g"));
        if (typeof (B) == "object") return _.replace(E,
        function (_, A) {
            var $ = B[A];
            if (typeof $ == "function") $ = $(A);
            return typeof ($) == "undefined" ? "" : $
        });
        else if (typeof (B) != "undefined") {
            var D = Array.prototype.slice.call(arguments, 1),
            $ = D.length;
            return _.replace(G,
            function (A, _) {
                _ = parseInt(_, 10);
                return (_ >= $) ? A : D[_]
            })
        }
    }
    return _
};





;(function($){


;(function(){


var Ylmf = { 
    getProId : function(proName) {
        var ProId;
        for (var i = 0, len = CityArr.length; i < len; ++i) {
            if (CityArr[i][0] == proName && parseInt(CityArr[i][2]) <900) {
                ProId = CityArr[i][2];
            }
        }
        return ProId
    },
    getCityName : function(cityId){
        for (var i = 0, len = CityArr.length; i < len; ++i) {
            if (CityArr[i][2] == cityId ) {
               return CityArr[i][0];
            }
        }
    },
    getCityId:function(ProId, CityName) {
        if(!ProId) return false;
        var CityId;
        for (var i = 0, len = CityArr.length; i < len; ++i) {
            if (CityArr[i][1] == ProId && CityArr[i][0] == CityName) {
                CityId = CityArr[i][2];
            }
        }
        return CityId
    },
    getCitys : function(ProId){
        if(!ProId) return false;
        var Citys = [];
        for (var i = 0, len = CityArr.length; i < len; ++i) {
            if (CityArr[i][1] == ProId) {
                Citys.push(CityArr[i]);
            }
        }
        return Citys;
    },
    getSelectValue:function(select) {
        var idx = select.selectedIndex,
        option,
        value;
        if (idx > -1) {
        option = select.options[idx];
        value = option.innerHTML.split(' ')[1];
            return value;
        }
        return null;
    },
    ScriptLoader:{
        Add: function(config) {
            if (!config || !config.src) return;
            var  doc = document;
            var Head = doc.getElementsByTagName('head')[0],         
                Script = doc.createElement('script');
                Script.onload = Script.onreadystatechange = function() {
                    if (Script && Script.readyState && Script.readyState != 'loaded' && Script.readyState != 'complete') return;
                    Script.onload = Script.onreadystatechange = Script.onerror = null;
                    Script.Src = '';
                    if(!doc.all){Script.parentNode.removeChild(Script);}
                    Script = null;
					config.callback && config.callback();
                };
                Script.src = config.src;
                Script.charset = config.charset || 'gb2312';
                Head.insertBefore(Script,Head.firstChild);
            return Script;
        }
    }
}

})();


$("#box-weather").hover(function(){

    YLMF.cancelDefer("hideWeatherPanel");
    YLMF.defer("showWeatherPanel",function(){
        $("#box-weather").addClass("box-weatherHover");
        $("#weather-popup").fadeIn();
    },200); 

},function(){

    YLMF.cancelDefer("showWeatherPanel");
    YLMF.defer("hideWeatherPanel",function(){

        //$("#weather-popup").fadeOut();
        $("#weather-popup").hide();
        $("#box-weather").removeClass("box-weatherHover");
    });

});

$("#weather-popup").hover(function(){

    YLMF.cancelDefer("hideWeatherPanel");

},function(){

    YLMF.defer("hideWeatherPanel",function(){

        //$("#weather-popup").fadeOut();
        $("#weather-popup").hide();
        $("#box-weather").removeClass("box-weatherHover");
    });

});



})(jQuery);

;(function($){
    var Selecter = function(handelEl,selEl,inputEl,opt){
        var me = this;
        var inHandel = false;
        var inSelEl = false;
        opt = opt || {};
        handelEl = $(handelEl).get(0);
        selEl = $(selEl).get(0);
        inputEl = $(inputEl).get(0);
        opt.handeTxt = opt.handeTxt || ".handeTxt";
        opt.selClass = opt.selClass || "selected";
        this.opt = opt;
        this.addEvents(["afterSelect","afterShow"]);
        
        //$();
        this.handeEl = $(handelEl);
        this.selEl = $(selEl);
        this.inputEl = $(inputEl);
        
        this.showed = false;
        
        this.handeEl.click(function(){
            if(me.showed){
                me.selEl.hide();
                me.showed = false;
            }else{
                me.selEl.show();
                me.showed = true;
                me.fireEvent("afterShow",me);
            }
            
        });
        
        this.selEl.find("li").click(function(){
            me.selectedEl = this;
            me.inputEl.val($(this).attr("value"));
            me.handeEl.find(opt.handeTxt).text($(this).text());
            me.selEl.find("li").removeClass(opt.selClass);
            $(this).addClass(opt.selClass);
            me.selEl.hide();
            me.showed = false;
            me.fireEvent("afterSelect",me);
        });
        
        $(document.body).click(function(e){
            try{
                var tar = e.target || e.srcElement;
                if(tar != handelEl && !YLMF.contains(handelEl,tar) && tar!=selEl && !YLMF.contains(selEl,tar)){
                    me.selEl.hide();
                    me.showed = false;
                }
            }catch(e){
                //console && console.log(e);
            }
        });
        
        if(opt.defaultValue){
            this.select(opt.defaultValue);
        }
    }
    
    YLMF._extend(Selecter.prototype,YLMF.Observable);
    YLMF._extend(Selecter.prototype,{
        select:function(val){
            var me = this;
            this.selEl.find("li").each(function(i,n){
                if($(n).attr("value") == val){
                    me.selectedEl = this;
                    me.inputEl.val(val);
                    me.handeEl.find(me.opt.handeTxt).text($(n).text());
                    me.selEl.find("li").removeClass(me.opt.selClass);
                    $(this).addClass(me.opt.selClass);
                    me.selEl.hide();
                    me.fireEvent("afterSelect",me);
                    return false;
                }
            });
        },
        hide:function(){
            var me = this;
            me.selEl.hide();
            me.showed = false;
        }
    });
    
    window.Selecter = Selecter;
    
})(jQuery);



DateInput = (function($) {
    var instanceNub = 0;
    
    var fireEvent = function fireEvent(element, event) {
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            var evt = document.createEventObject();
            return element.fireEvent('on' + event, evt)
        } else {
            // 其他标准浏览器使用dispatchEvent方法
            var evt = document.createEvent('HTMLEvents');
            // initEvent接受3个参数：
            // 事件类型，是否冒泡，是否阻止浏览器的默认行为
            evt.initEvent(event, true, true);
            return ! element.dispatchEvent(evt);
        }
    };

    //DOM没有提供insertAfter()方法
    function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            // 如果最后的节点是目标元素，则直接添加。因为默认是最后
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
            //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        }
    }

    function DateInput(el, opts) {
        var me = this;
        this.instanceNub = instanceNub ++;
        if (typeof(opts) != "object") opts = {};
        YLMF._extend(this, DateInput.DEFAULT_OPTS);
        YLMF._extend(this, opts);
        YLMF._extend(this, YLMF.Observable);
        
        this.input = $(el);
        var date = this.stringToDate(this.input.get(0).value);
        if (!date) date = new Date();
        this.selectedDate = date;
        this._fromSelBox = false;
        //显示的月份第一天
        this.displayMonthFirstDay = new Date(this.selectedDate);
        this.displayMonthFirstDay.setDate(1);
        //this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate");
        this.build();
        this.hide();
        this.update();
        
        this.input.focus(function(){
            YLMF.cancelDefer("dateInputHide"+me.instanceNub);
            me.show();
        });
        this.input.click(function(){
            YLMF.cancelDefer("dateInputHide"+me.instanceNub);
            me.show();
        });
        this.input.blur(function(){
            if(me._fromSelBox){
                me.input.focus();
            }
            YLMF.defer("dateInputHide"+me.instanceNub,function(){
                me.hide();
            },100);
            //me.input.focus();
        });
        this.addEvents(["update","selectDate","beforeShow","hide"]);
        //this.selectDate();
        //this.hide();
    };

    DateInput.DEFAULT_OPTS = {
        month_names: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        short_day_names: ["日", "一", "二", "三", "四", "五", "六"],
        start_of_week: 1,
        align: "left",
        minDay : null
    };

    DateInput.prototype = {
        build: function() {
            var me = this;
            this.dateSelector = this.rootLayers = document.createElement("div");
            this.dateSelector.className = "date-select-box";
            $(this.dateSelector).css({
                top: "100px",
                left: "100px"
            });
            $(this.dateSelector).append("<div class='month-change'><a href='javascript:;' target='_self' class='prev'>上一月</a><a href='javascript:;' target='_self' class='next'>下一月</a></div>");
            $(this.dateSelector).append("<div class='cell'></div><div class='vline'></div><div class='cell'></div>");
            
            $(this.dateSelector).find(".next").click(function(){
                me.nextPairMonth();
            });
            $(this.dateSelector).find(".prev").click(function(){
                me.prevPairMonth();
            });
            
          
            
            
            $(document.body).append(this.dateSelector);
            this.cells = $(this.dateSelector).find(".cell");
            this.cells.click(function(eve){
                //var dayClick = eve.target || eve.srcElement;
                //me.selectDate(dayClick);
            });
            
            me.mouseDownEl = null;
            $(this.dateSelector).mousedown(function(e){
                me.mouseDownEl = e.target || e.srcElement;
                me._fromSelBox = true;
                YLMF.defer("formSelectBox"+me.instanceNub,function(){
                    me._fromSelBox = false;
                },100);
                if(e.preventDefault){
                    e.preventDefault();
                }else{
                    e.returnValue = false;
                }
            });
            
            $(this.dateSelector).mouseup(function(e){
                var _target = e.target || e.srcElement;
                if(me.mouseDownEl && me.mouseDownEl.getAttribute("date") && me.mouseDownEl.getAttribute("date") == _target.getAttribute("date")){
                    me.selectDate(_target);
                    me._fromSelBox = false;
                }
            });
            //for test 
            var now = new Date();
            if(!this.minDay){
                this.minDay = new Date(now.getFullYear(),now.getMonth(),now.getDate(),12,00);
            }
            
            
        },
        update: function() {
           
            var me = this;
            this.cells.html("");
            this.createMonthCal(this.displayMonthFirstDay,this.cells.eq(0));
            var _nextMonth = new Date(this.displayMonthFirstDay);
            _nextMonth.setMonth(_nextMonth.getMonth() + 1 );
            this.createMonthCal(_nextMonth,this.cells.eq(1));
            
            this.fireEvent("update",this);
        },
        stringToDate: function(string) {
            if(!string) return
            var matches;
            if (matches = string.match(/^(\d{4,4})-(\d{1,2})-(\d{1,2})$/)) {
                return new Date(matches[1], parseInt(matches[2]) - 1, matches[3], 12, 00);
            } else {
                return null;
            };
        },
        dateToString: function(date) {
            return date.getFullYear() + "-" + this.toTwoDigits(date.getMonth() + 1) + "-" + this.toTwoDigits(date.getDate());
        },
        selectDate: function(dayEl) {
            //alert("selectDate");
            dayEl = $(dayEl);
            if(dayEl.size() == 0){
                return;
            }
            this.input.val(dayEl.attr("date"));
            this.hide();
            this.input.blur();
            //fix bug 
            this.input.parent().find("em").hide();
            //end fix 
            this.fireEvent("selectDate",this,dayEl.attr("date"));
            //
            /*
            if (typeof(date) == "undefined") {
                date = this.stringToDate(this.input.get(0).value);
            };
            if (!date) date = new Date();

            this.selectedDate = date;

            //显示的月份第一天
            this.displayMonthFirstDay = (new Date(this.selectedDate)).setDate(1);

            this.selectedDateString = this.dateToString(this.selectedDate);

            this.selectMonth(this.selectedDate, $(this.dateSelector).find(".cell").eq(0));
            var nextMonthFirstDay = new Date(this.selectedDate);
            nextMonthFirstDay.setDate(1);
            nextMonthFirstDay.setMonth(nextMonthFirstDay.getMonth() + 1);

            this.selectMonth(nextMonthFirstDay, $(this.dateSelector).find(".cell").eq(1));
            */
        },
        nextPairMonth: function() {
            this.displayMonthFirstDay.setMonth(this.displayMonthFirstDay.getMonth() + 2);
            //clear the pre html
            this.update();

        },
        prevPairMonth: function() {
            var _disMonth = this.displayMonthFirstDay.getMonth();
            var _disYear = this.displayMonthFirstDay.getFullYear();
            _disMonth = _disMonth - 2;
            if(_disMonth < 0){
                //
                _disYear = _disYear - 1;
                _disMonth = _disMonth + 12;
            }
            this.displayMonthFirstDay.setFullYear(_disYear);
            this.displayMonthFirstDay.setMonth(_disMonth);
            this.update();
        },
        
        // Move the currently displayed month by a certain amount. This does *not* move the currently
        // selected date, so we end up viewing a month with no visibly selected date.
        moveMonthBy: function(amount) {
            var event = YLMF.getEvent();
            if (event) {
                event.cancelBubble = true;
                event.stopPropagation && event.stopPropagation();
            }
            var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount, this.currentMonth.getDate());
            this.selectMonth(newMonth);
        },
        // Finds out the array index of a particular value in that array
        indexFor: function(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (value == array[i]) return i;
            };
        },
        // Finds the number of a given month name
        monthNum: function(month_name) {
            return this.indexFor(this.month_names, month_name);
        },

        // Finds the number of a given short month name
        shortMonthNum: function(month_name) {
            return this.indexFor(this.short_month_names, month_name);
        },

        // Finds the number of a given day name
        shortDayNum: function(day_name) {
            return this.indexFor(this.short_day_names, day_name);
        },
        toTwoDigits: function(nub) {
            return nub < 10 ? "0" + nub: "" + nub;
        },

        createMonthCal: function(date, cellEl) {

            var me = this;
            var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
           
            //if (!this.currentMonth || !(this.currentMonth.getFullYear() == newMonth.getFullYear() &&
            //                        this.currentMonth.getMonth() == newMonth.getMonth())) {
            // We have moved to a different month and so need to re-draw the table
            //this.currentMonth = newMonth;
            if (true) {
                // Work out the range of days we will draw
                var rangeStart = this.rangeStart(date),
                rangeEnd = this.rangeEnd(date);
                var numDays = this.daysBetween(rangeStart, rangeEnd);
                // remove all old day 
                var dayRow = null;
                var dayCell = "";
                var _nowDateString = this.dateToString(new Date());
                cellEl.append("<h4>" + date.getFullYear() + "年" + (date.getMonth() + 1) + "月</h4>");
                cellEl.append('<div class="date-week"><em>一</em><em>二</em><em>三</em><em>四</em><em>五</em><b>六</b><b>日</b></div>');
                var _container = $("<div class='date-container'></div>");
                //draw each of days
                for (var i = 0; i <= numDays; i++) {
                    var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
                    if (currentDay.getMonth() == date.getMonth()) {
                        if(this.minDay && currentDay.getTime() < this.minDay.getTime()){
                            dayCell = document.createElement("s");
                            dayCell.setAttribute("date", this.dateToString(currentDay));
                            dayCell.appendChild(document.createTextNode(currentDay.getDate()));
                        }else{
                            dayCell = document.createElement("a");
                            dayCell.setAttribute("date", this.dateToString(currentDay));
                            dayCell.setAttribute("href", "javascript:void(0)");
                            dayCell.setAttribute("target", "_self");
                            dayCell.appendChild(document.createTextNode(currentDay.getDate()));
                        }
                        
                        
                    } else {
                        dayCell = document.createElement("s");
                        dayCell.setAttribute("date", this.dateToString(currentDay));
                        dayCell.appendChild(document.createTextNode(" "));
                    }
                    if (_nowDateString == this.dateToString(currentDay)) {
                        $(dayCell).addClass("today");
                        $(dayCell).text("今天");
                    }
                    _container.append(dayCell);
                }
                _container.appendTo(cellEl);
            }
        },
        show: function() {
            //this.update();
            this.fireEvent("beforeShow",this,null);
            $(this.dateSelector).show();
            $(this.dateSelector).position({
                of : this.input.parent(),
                at:"right bottom",
                my:"right top",
                offset:"0px -1px",
                collision:"none"
            });
        },
        hide: function() {
            $(this.dateSelector).hide();
            //this.rootLayers.style.display = "none";
            //$([window, document.body]).unbind("click", this.hideIfClickOutside);
            //this.input.bind("focus",this.show);
            //$(document.body).unbind("keydown", this.keydownHandler);
        },
        // Works out the number of days between two dates
        daysBetween: function(start, end) {
            start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
            end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
            return (end - start) / 86400000;
        },

        changeDayTo: function(dayOfWeek, date, direction) {
            var difference = direction * (Math.abs(date.getDay() - dayOfWeek - (direction * 7)) % 7);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
        },

        // Given a date, return the day at the start of the week *before* this month
        rangeStart: function(date) {
            return this.changeDayTo(this.start_of_week, new Date(date.getFullYear(), date.getMonth()), -1);
        },

        // Given a date, return the day at the end of the week *after* this month
        rangeEnd: function(date) {
            return this.changeDayTo((this.start_of_week - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
        },

        // Is the given date the first day of the week?
        isFirstDayOfWeek: function(date) {
            return date.getDay() == this.start_of_week;
        },

        // Is the given date the last day of the week?
        isLastDayOfWeek: function(date) {
            return date.getDay() == (this.start_of_week - 1) % 7;
        },

        // Adjust a given array of day names to begin with the configured start-of-week
        adjustDays: function(days) {
            var newDays = [];
            for (var i = 0; i < days.length; i++) {
                newDays[i] = days[(i + this.start_of_week) % 7];
            };
            return newDays;
        },
        monthName: function(date) {
            return this.month_names[date.getMonth()];
        },
        /*
        // A hack to make "this" refer to this object instance when inside the given function
        bindToObj: function(fn) {
            var self = this;
            return function() { return fn.apply(self, arguments) };
        },*/
        keydownHandler: function() {
            
        }
        /*
        // See above
        bindMethodsToObj: function() {
            for (var i = 0; i < arguments.length; i++) {
                this[arguments[i]] = this.bindToObj(this[arguments[i]]);
            };
        }*/
    }
    return DateInput;
})(jQuery);




(function($){
    function TwinDateInput(startEl,endEl,opt){
        var startDI = new DateInput(startEl, {});
        var endDI = new DateInput(endEl, {});
        $(startDI.input).val(startDI.dateToString(new Date()));
        this.endDayDiasble = false;
        var me = this;
        startDI.addListener({
            beforeShow:function(){
                this.update();
            },
            selectDate : function(dateStr){
                endDI.minDay = endDI.stringToDate(dateStr);
                endDI.update();
               
                if(!me.endDayDiasble){
                    endDI.input.focus();
                }
                
            },
            update:function(){
                if(startDI.stringToDate(startDI.input.val())){
                    $(startDI.dateSelector).find("a[date='" + startDI.input.val() + "']").addClass("selected");
                }
            }
            
        });
       endDI.addListener({
        beforeShow:function(){
            this.update();
        },
        update : function(){
            var startDay = endDI.stringToDate(startDI.input.val());
            var endDay = endDI.stringToDate(endDI.input.val());
            if(startDay){
                var _starEl = $(endDI.dateSelector).find("a[date='" + startDI.input.val() + "']");
                _starEl.addClass("selected");
                if(endDay){
                    var _endEl = $(endDI.dateSelector).find("a[date='" + endDI.input.val() + "']");
                    _endEl.addClass("selected");
                    
                    var startIndex = $(endDI.dateSelector).find("a").index(_starEl);
                    var endIndex = $(endDI.dateSelector).find("a").index(_endEl);
                    if(endDay.getTime() > startDay.getTime()){
                        if(startIndex != -1){
                            $(endDI.dateSelector).find("a").slice(startIndex,endIndex).addClass("highlight");
                        }else{
                            $(endDI.dateSelector).find("a").slice(0,endIndex).addClass("highlight");
                        }
                    }
                }
            }
            $(endDI.dateSelector).hover(function(){
            });
        }
       });
    }
    
    window.TwinDateInput = TwinDateInput;
    
    
})();

// ;(function($){
    
//     var lunarInfo=new Array(
//     0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
//     0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
//     0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
//     0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
//     0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
//     0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
//     0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
//     0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
//     0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
//     0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
//     0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
//     0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
//     0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
//     0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
//     0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)
//     var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//     var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//     var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
//     var now = new Date();
//     var SY = now.getFullYear();
//     var SM = now.getMonth();
//     var SD = now.getDate();
    
//     //==== 传入 offset 传回干支, 0=甲子
//     function cyclical(num) { return(Gan[num%10]+Zhi[num%12]) }
//     //==== 传回农历 y年的总天数
//     function lYearDays(y) {
//        var i, sum = 348
//        for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
//        return(sum+leapDays(y))
//     }
    
//     //==== 传回农历 y年闰月的天数
//     function leapDays(y) {
//        if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
//        else return(0)
//     }
    
//     //==== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
//     function leapMonth(y) { return(lunarInfo[y-1900] & 0xf)}
    
//     //====================================== 传回农历 y年m月的总天数
//     function monthDays(y,m) { return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )}
    
//     //==== 算出农历, 传入日期物件, 传回农历日期物件
//     //     该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
//     function Lunar(objDate) {
//        var i, leap=0, temp=0
//        var baseDate = new Date(1900,0,31)
//        var offset   = (objDate - baseDate)/86400000

//        this.dayCyl = offset + 40
//        this.monCyl = 14

//        for(i=1900; i<2050 && offset>0; i++) {
//           temp = lYearDays(i)
//           offset -= temp
//           this.monCyl += 12
//        }
//        if(offset<0) {
//           offset += temp;
//           i--;
//           this.monCyl -= 12
//        }

//        this.year = i
//        this.yearCyl = i-1864

//        leap = leapMonth(i) //闰哪个月
//        this.isLeap = false

//        for(i=1; i<13 && offset>0; i++) {
//           //闰月
//           if(leap>0 && i==(leap+1) && this.isLeap==false)
//              { --i; this.isLeap = true; temp = leapDays(this.year); }
//           else
//              { temp = monthDays(this.year, i); }

//           //解除闰月
//           if(this.isLeap==true && i==(leap+1)) this.isLeap = false

//           offset -= temp
//           if(this.isLeap == false) this.monCyl ++
//        }

//        if(offset==0 && leap>0 && i==leap+1)
//           if(this.isLeap)
//              { this.isLeap = false; }
//           else
//              { this.isLeap = true; --i; --this.monCyl;}

//        if(offset<0){ offset += temp; --i; --this.monCyl; }

//        this.month = i
//        this.day = offset + 1
//     }

//     function YYMMDD(){
//         var cl = '<font color="green" STYLE="font-size:13pt;">';
//         if (now.getDay() == 0) cl = '<font color="#c00000" STYLE="font-size:13pt;">';
//         if (now.getDay() == 6) cl = '<font color="green" STYLE="font-size:13pt;">';
//         return(cl+SY+'年'+(SM+1)+'月'+'</font>');
//     }
//     function weekday(){
//         var day = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
//         var cl = '<font color="green" STYLE="font-size:9pt;">';
//         if (now.getDay() == 0) cl = '<font color="green" STYLE="font-size:9pt;">';
//         if (now.getDay() == 6) cl = '<font color="red" STYLE="font-size:9pt;">';
//         return(cl+ day[now.getDay()]+ '</font>');
//     }
    
//     //==== 中文日期
//     function cDay(m,d){
//         var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
//         var nStr2 = new Array('初','十','廿','卅','　');
//         var s;
//         if (m>10){s = '十'+nStr1[m-10]} else {s = nStr1[m]} s += '月'
//         switch (d) {
//           case 10:s += '初十'; break;
//           case 20:s += '二十'; break;
//           case 30:s += '三十'; break;
//           default:s += nStr2[Math.floor(d/10)]; s += nStr1[d%10];
//         }
//         return(s);
//     }
//     //中文日期
//     function chineseDay(d){
//         var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
//         var nStr2 = new Array('初','十','廿','卅','　');
//         var s = "";
//         switch (d) {
//           case 10:s += '初十'; break;
//           case 20:s += '二十'; break;
//           case 30:s += '三十'; break;
//           default:s += nStr2[Math.floor(d/10)]; s += nStr1[d%10];
//         }
//         return(s);
//     }
//     function solarDay1(){
//         var sDObj = new Date(SY,SM,SD);
//         var lDObj = new Lunar(sDObj);
//         var cl = '<font color="#9933CC" STYLE="font-size:9pt;">';
//         var tt = '【'+Animals[(SY-4)%12]+'】'+cyclical(lDObj.monCyl)+'月 '+cyclical(lDObj.dayCyl++)+'日' ;
//         return(cl+tt+'</font>');
//     }
   
//     function solarDay2(){
//         var sDObj = new Date(SY,SM,SD);
//         var lDObj = new Lunar(sDObj);
//         var cl = '<font color="green" STYLE="font-size:9pt;">';
//         //农历BB'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' 月 '+cld[d].lDay+' 日
//         var tt = cyclical(SY-1900+36)+'年 '+cDay(lDObj.month,lDObj.day);
//         return(cl+tt+'</font>');
//     }
     
//     var _montherDay = {};
//     var _fatherDay = {};
//     function isMonthersDay(d){
//     d = d || new Date();
//     var dd = new Date("May 01 "+d.getFullYear());
//     var nnd = dd.getDay()==0 ? 7:dd.getDay();
//     var cm = d.getTime(),//获取当前时间的毫秒数
//           montherDay = _montherDay[d.getFullYear()] || (new Date("May "+(1+(7-nnd)+7)+" "+d.getFullYear())).getTime(),
//           day = 60*60*24*1000,
//           b= montherDay-cm;
//           _montherDay[d.getFullYear()] = montherDay;
//           //console.log(b);
//           if(b>0){
//             //alert("还没到母亲节");
//           }else if(-b >= day){
//             //alert("已经过了母亲节了")
//           }else{
//             //alert("今天就是母亲节")
//               return true;
//           }
//           return false;
//     }

//     function isFatherDay(d){
//          d = d || new Date();
//     var dd = new Date("June 01 " + d.getFullYear());
//     var nnd = dd.getDay()==0 ? 7:dd.getDay();
//     var cm = d.getTime(),
//         fatherDay = _fatherDay[d.getFullYear()] || (new Date("June "+(1+(7-nnd)+14)+" "+d.getFullYear())).getTime(),
//         day = 60*60*24*1000,
//         b= fatherDay-cm;
//         _fatherDay[d.getFullYear()] = fatherDay;
//         //console.log(dd.getDay());
        
//         if(b>0){
//         //alert("还没到母亲节");
//         }else if(-b >= day){
//         //alert("已经过了母亲节了")
//         }else{
//         //alert("今天就是母亲节")
//           return true;
//         }
//         return false;
//     }
    


//     function solarDay3(date){
//         //var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//         //var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"); 
//         var lFtv = new Array("0101*春节","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1224 小年")
//         var sFtv = new Array("0101*元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日","0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节","0801 建军节","0808 父亲节","0909 毛席逝世纪念","0910 教师节","0928 孔子诞辰","1001*国庆节",
//         "1006 老人节","1024 联合国日","1112 孙中山诞辰","1220 澳门回归纪念","1225 圣诞节","1226 毛席诞辰","0518 国际博物馆日","0605 世界环境日","1024 霜降","1111 光棍节","1212 寒衣节","1201 世界艾滋病日","1220 澳门回归","0903 抗战胜利")
        
        
//         var sDObj = date || new Date(SY,SM,SD);
         
//         //if(_montherDay[date.getFullYear()])
        
//         //console.log(date.getFullYear());
        
//         var SY = sDObj.getFullYear();
//         var SM = sDObj.getMonth();
//         var SD = sDObj.getDate();
//         var lDObj = new Lunar(sDObj);
//         var lDPOS = new Array(3)
//         var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
//         //农历节日
//         $.each(lFtv,function(i,n){
//             if(n.match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
//                 tmp1=Number(RegExp.$1)-lDObj.month
//                 tmp2=Number(RegExp.$2)-lDObj.day
//                 if(tmp1==0 && tmp2==0) lunarFestival=RegExp.$4
//             }
//         });
        
//         if(isFatherDay(sDObj)){
//             lunarFestival = "父亲节";
//         }
        
//         if(lDObj.month == 12 ){
//             if(lDObj.day == 29 || lDObj.day == 30){
//                 var _next = new Date(SY,SM,SD+1);
//                 var _nextLunar = new Lunar(_next);
//                 if(_nextLunar.month == 1 && _nextLunar.day == 1){
//                     lunarFestival = "除夕";
//                 }
//                 //console.log(_nextLunar.month + "月" + _nextLunar.day + "日");
//                 //lunarFestival = "除夕";
//             }
//         }
        
//         if(isMonthersDay(sDObj)){
//             lunarFestival = "母亲节";
//         }
        
//         //console.log(lDObj.month + "月" + lDObj.day + "日");
//         //console.log(lDObj);
//         //国历节日
//         $.each(sFtv,function(i,n){
//             if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
//                 tmp1=Number(RegExp.$1)-(SM+1)
//                 tmp2=Number(RegExp.$2)-SD
//                 if(tmp1==0 && tmp2==0) solarFestival = RegExp.$4
//             }  
//         });
        
        
        
//         function getjq(yyyy,mm,dd){
//             mm = mm-1;
//             var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//             var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
//             var tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2+1]*60000)+Date.UTC(1900,0,6,2,5));
//             var tmp2 = tmp1.getUTCDate();
//             var solarTerms = "";
//             if (tmp2==dd)
//                 solarTerms = solarTerm[mm*2+1];
//             tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2]*60000)+Date.UTC(1900,0,6,2,5));
//             tmp2= tmp1.getUTCDate();
//             if (tmp2==dd) 
//                 solarTerms = solarTerm[mm*2];
//             return solarTerms;
//         }
      
//         solarTerms = getjq(SY,SM +1,SD);
       
//         if(solarTerms == '' && solarFestival == '' && lunarFestival == '')
//         festival = null;
//         else
//         festival = solarFestival || lunarFestival || solarTerms;
//         return(festival);
//     }
    
    
//     function Calendar(){
//         var me = this;
//         this.DetailData = {};
//         this.jia = {};
//         this.preSelectedDay = (new Date()).getDate();
//         YLMF._extend(this, DateInput.DEFAULT_OPTS);
//         YLMF._extend(this, YLMF.Observable);
        
        
//         me.doNotUpdate = false;
        
        
//         var _htmlString = "";
//         for(var i = 1901;i<=2050;i++){
//             _htmlString += '<li value="'+ i+'">'+i+'年</li>';
//         }
//         $("#cal-year-list ul").html(_htmlString);
//         //$("#cal-year-list").get(0).scrollTop = 1000;
//         //init the value 
//         var _curTime = new Date();
        
        
//         this.year_sel = new Selecter("#cal-year-handle","#cal-year-list","#cal-year-inp",{handeTxt:".custom-txt",defaultValue:_curTime.getFullYear()});
//         this.holiday_sel = new Selecter("#cal-holiday-handle","#cal-holiday-list","#cal-holiday-inp",{handeTxt:".custom-txt",defaultValue:"1"});
//         this.month_sel = new Selecter("#cal-month-handle","#cal-month-list","#cal-month-inp",{handeTxt:".custom-txt2",defaultValue:_curTime.getMonth() + 1});
        
//         this.year_sel.addListener({
//             "afterShow" : function(){
//                 var _year = $(this.selectedEl).attr("value") | 0;
//                 this.selEl.get(0).scrollTop = (_year - 1905) * 26;
//             },
//             "afterSelect":function(){
                
//                 var _year = $("#cal-year-inp").val();
//                 if(!me.jia["" + _year]){
//                     $.ajax({
//                         url:"/static/v2/wnl/"+_year+"/jia.json",
//                         dataType:"json",
//                         success:function(data){
//                             if(data){
//                                 me.jia["" + _year] = data;
//                                 me.updateHoliday();
//                             }
//                         }
//                     });
//                 }else{
                    
//                 }
//                 me.holiday_sel.select("1");
//                 if(!me.doNotUpdate){
//                    me.update(); 
//                 }
                
//                 if(_year == 2015 || _year == 2014 || _year == 2013){
//                     $("#cal-holiday-list li").slice(1).show();
//                 }else{
//                     $("#cal-holiday-list li").slice(1).hide();
//                 }
//             }
//         });
        
//         this.month_sel.addListener({
//             "afterSelect":function(){
//                 if(!me.changingHoliday){
//                     me.holiday_sel.select("1");    
//                 }
//                 if(!me.doNotUpdate){
//                    me.update();  
//                 }
//             }
//         });
//         me.changingHoliday= false;
//         this.holiday_sel.addListener({
//             "afterSelect":function(){
//                 var _year = $("#cal-year-inp").val();
//                 var _holi = $("#cal-holiday-inp").val() |0;
//                 if(_holi != 1 && me.jia["" + _year]){
//                     var holidayArr = ["yd_x","cj_x","qmj_x","gjldj_x","dwj_x","zqj_x","gqj_x","kzsl_x"];
//                     var holidayItem = holidayArr[_holi-2];
//                     var jiaItem = me.jia["" + _year][holidayItem];
//                     me.changingHoliday = true;
//                     me.month_sel.select(jiaItem.fd.split("-")[1] | 0);
//                     me.changingHoliday = false;
//                     me.update();
//                     me.updateHoliday();
                    
//                 }
               
//             }
//         });
//         this.build();
        
//         $.ajax({
//             url:"/static/v2/wnl/"+_curTime.getFullYear()+"/jia.json",
//             dataType:"json",
//             success:function(data){
//                 if(data){
//                     me.jia["" + _curTime.getFullYear()] = data;
//                     me.updateHoliday();
//                 }
//             }
//         });
        
//         $("#cal-todayBtn").click(function(){
//             me.preSelectedDay = _curTime.getDate();
//             me.doNotUpdate = true;
//             me.year_sel.select(_curTime.getFullYear());
//             me.doNotUpdate = false;
//             me.month_sel.select(_curTime.getMonth() + 1);
            
//         });
        
//         $("#cal-nextMonth").click(function(){
//             me.nextMonth();
//         });
//         $("#cal-preMonth").click(function(){
//             me.preMonth();
//         });
//         var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
//         var nScrollTop = 0;   //滚动到的当前位置
//         var nDivHight = $("#cal-year-list").height();
       
//         var scrollSpeed = null;
//         $("#cal-year-list").bind("mousewheel",function(event,delta ){
//             //alert(delta);
//             nScrollHight = $(this)[0].scrollHeight;
//             nScrollTop = $(this)[0].scrollTop;
            
//             if(nScrollTop + nDivHight >= nScrollHight && delta<0){
//                 if(event.preventDefault){
//                     event.preventDefault();
//                 }
//                 return false;
//             };
            
//             if(delta < 0 && nScrollTop + nDivHight - delta >= nScrollHight){
//                 //$("#cal-year-list").get(0).scrollTop = (nScrollHight - nDivHight);
//                 // if(event.preventDefault){
//                     //event.preventDefault();
//                 //}
//                 //return false;
//             }
           
//             //console.log(event);
//             //var _eve = event.originalEvent;
//             //_eve.preventDefault();
//             //if(_eve.stopPropagation){
//             //    _eve.stopPropagation();
//             //}else{
//             //   _eve.cancelBubble = true; 
//             //}
//         });
//     }
//     YLMF.extend(Calendar,DateInput);
//     YLMF._extend(Calendar.prototype,{
//         build:function(){
//             var me = this;
//             this.update();
//         },
//         update:function(){
//             var me = this;
//             $("#cal-con").html("");
//             var _year = $("#cal-year-inp").val();
//             this.createMonthCal(new Date($("#cal-year-inp").val(),$("#cal-month-inp").val() - 1 ),$("#cal-con"));
//             this.checkHoliday();
//         },
//         updateHoliday:function(){
//             var me = this;
//             var _holi = $("#cal-holiday-inp").val() |0;
//             var _year = $("#cal-year-inp").val();
//             var holidayArr = ["yd_x","cj_x","qmj_x","gjldj_x","dwj_x","zqj_x","gqj_x","kzsl_x"]
//             if(_holi != 1 && me.jia["" + _year]){
//                 var holidayItem = holidayArr[_holi-2];
//                 var jiaItem = me.jia["" + _year][holidayItem];
//                 me.preSelectedDay = jiaItem.fd.split("-")[2];
               
//                 me.doSelectDay();
//             }
//             me.checkHoliday();
//         },
//         createMonthCal:function(date, cellEl){
//             var me = this;
//             var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
//             var rangeStart = this.rangeStart(date);
//             var rangeEnd = this.rangeEnd(date);
           
//             var numDays = this.daysBetween(rangeStart, rangeEnd);
//             var dayRow = null;
//             var dayCell = "";
//             var _nowDateString = this.dateToString(new Date());
//             var _container = $("<div class='cal-container'></div>");
//             var _tr = null;
//             numDays = Math.max(numDays,34);
//             for (var i = 0; i <= numDays; i++) {
//                     var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
//                     var _curDay2 = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i);
//                     var curLunar = new Lunar(_curDay2);
//                     var _lunnarDay = chineseDay(curLunar.day);
//                     var _jieri = solarDay3(_curDay2);
//                     if(i%7 == 0){
//                         _tr = $("<div class='cal-tdWrap'></div>");
//                         _container.append(_tr);
//                     }
                    
//                     dayCell = $('<div class="cal-td ' + ((currentDay.getDay()==0 ||currentDay.getDay()==6) ?"cal-festival":"") + '" date=' + me.dateToString(currentDay) + '>'   +
//                                 '<div class="cal-date">' + currentDay.getDate()+ '</div>'    +
//                                 '<div class="cal-oldDate ' + (_jieri == null?"":"cal-jieri") + '" >' + (_jieri || _lunnarDay) + '</div>' +
//                             '</div>');
                    
//                     if (currentDay.getMonth() == date.getMonth()) {
//                         dayCell.click(function(){
                            
//                             $("#cal-popup .cal-tdCur").removeClass("cal-tdCur");
//                             $(this).addClass("cal-tdCur");
                            
//                             me.showDetail($(this).attr("date"));
//                             me.preSelectedDay = $(this).attr("date").split("-")[2] | 0;
//                         });
//                     } else {
//                         dayCell.addClass("cal-tdGray");
//                         dayCell.click(function(){
//                             var DC = this;
//                             var _dcDay = me.stringToDate($(DC).attr("date"));
                            
//                             me.preSelectedDay = $(DC).attr("date").split("-")[2] | 0;
                            
//                             if(_dcDay.getTime() < date.getTime()){
//                                 me.preMonth();
//                             }else{
//                                 me.nextMonth();
//                             }
//                         });
//                     }
//                     if (_nowDateString == this.dateToString(currentDay)) {
//                         dayCell.addClass("cal-today");
//                     }
//                     _tr.append(dayCell);
//                 }
//                 _container.appendTo(cellEl);
//             me.doSelectDay();
//         },
//         doSelectDay:function(){
//             var me = this;
//             var _year = $("#cal-year-inp").val();
//             var _month = $("#cal-month-inp").val()|0;
//             var _lastDay = new Date(_year,_month,0);
            
//             if(me.preSelectedDay > _lastDay.getDate()){
//                 //me.preSelectedDay 
//                 me.preSelectedDay = _lastDay.getDate();
//             }
            
//             var _curDay = new Date(_year,_month-1,me.preSelectedDay);
            
            
//             var _dayString = me.dateToString(_curDay);
//             var dayEl = $("#cal-popup").find(".cal-td[date="+_dayString+"]");
//             $("#cal-popup .cal-tdCur").removeClass("cal-tdCur");
//             $(dayEl).addClass("cal-tdCur");
//             me.showDetail($(dayEl).attr("date"));
            
//         },
//         showDetail:function(dayString){
//             if(!dayString) return;
//             var me = this;
//             var _clickDay = this.stringToDate(dayString);
//             var _month = _clickDay.getMonth() + 1;
//                 _month = _month <= 9 ?"0" + _month:"" + _month;
            
//             if(this.DetailData[_clickDay.getFullYear() + "" + (_clickDay.getMonth() + 1)]){
//                 //alert("fff"); 
//                 this.refreshRight();
//             }else if(_clickDay.getFullYear() > 2018 || _clickDay.getFullYear() < 2012){
//                 //this.DetailData[curDate.getFullYear() + "" + (curDate.getMonth() + 1)] = {};
//                 this.refreshRight();
//             }else{
                
//                 var _url = "/static/v2/wnl/" + _clickDay.getFullYear() + "/" + _clickDay.getFullYear() + _month + ".json"
//                 $.ajax({
//                     url:_url,
//                     dateType:"json",
//                     success:function(data){
//                         if(data){
                           
//                            me.DetailData[data.year + "" + data.month] = data.day;
//                            me.refreshRight();
//                         }
                        
//                     }
//                 });
//             }
//             //alert(dayString);
//         },
//         refreshRight:function(){
//             var me = this;
//             var curTd = $("#cal-popup .cal-tdCur");
//             var curDate = this.stringToDate(curTd.attr("date"));
//             var lDObj = new Lunar(curDate);
//             var _curYearData = this.DetailData[curDate.getFullYear() + "" + (curDate.getMonth() + 1)];
            
            
            
            
//             if(curTd.size() == 1){
//                 var curDetail = _curYearData?_curYearData[curDate.getDate() < 10 ?"0"+curDate.getDate():curDate.getDate()] : null;
                
//                 var yiString = "";
//                 var jiString = "";
//                 if(curDetail && curDetail.yi != ""){
//                     var yiArr = curDetail.yi.split("、");
//                     for(var i = 0;i<yiArr.length;i++){
//                         yiString += '<div class="cal-jyRow">' + yiArr[i] + '</div>';
//                     }
//                 }
//                 if(curDetail && curDetail.ji != ""){
//                     var jiArr = curDetail.ji.split("、");
//                     for(var i = 0;i<jiArr.length;i++){
//                         jiString += '<div class="cal-jyRow">' + jiArr[i] + '</div>';
//                     }
//                 }
                
                
//                 $("#cal-popup .cal-right").html(
//                     '<div class="cal-rightRow1">' + 
//                         '<div class="cal-topLeft">' + 
//                             '<div class="cal-dayTil">' + curDate.getFullYear() + "年" + (curDate.getMonth() + 1 ) +"月" + /*' 星期' + me.short_day_names[curDate.getDay()] + */'</div>' + 
//                             '<div class="cal-dayNubWrap"><span class="cal-dayNub">' + curDate.getDate() + '</span></div>' +      
//                             '<div class="cal-dayInfo">' + cDay(lDObj.month,lDObj.day | 0) + '</div>' + 
                            
//                             //'<div class="cal-dayInfo cal-dayInfoLast">' + cyclical(lDObj.monCyl)+'月 '+cyclical((lDObj.dayCyl|0))+'日' + '</div>'+
//                         '</div>' + 
//                         '<div class="cal-rightRow2">'+
//                             '<div class="cal-dayInfo">' + cyclical(lDObj.year-1900+36) + '年 【' + Animals[(lDObj.year-4)%12] + '年】</div>'+
//                             '<div class="cal-yi">'+
//                                 '<div class="cal-rightTil cal-yiTil">宜</div>'+
//                                 yiString +
//                             '</div>'+
//                             '<div class="cal-ji">'+
//                                 '<div class="cal-rightTil cal-jiTil">忌</div>'+
//                                 jiString +
//                             '</div>'+
//                         '</div>'+
//                     '</div>');
                
//             } 
//         },
//         checkHoliday:function(){
//             var me = this;
//             var _year = $("#cal-year-inp").val()|0;
//             var _month = $("#cal-month-inp").val()|0;
//             if(me.jia["" + _year]){
//                 $.each(me.jia["" + _year],function(key,item){
//                     var _startDay = me.stringToDate(item.f);
//                     var _endDay = me.stringToDate(item.t);
                    
//                     $("#cal-popup .cal-td").each(function(){
//                         var _curDay = $(this).attr("date");
//                         var curDay  = me.stringToDate(_curDay);
//                         if(curDay >= _startDay && curDay <= _endDay){
//                             if(item.tp == "休"){
//                                 $(this).addClass("cal-xiu");
//                                 $(this).append('<span class="cal-xiuIcon">休</span>');
//                             }else{
//                                 $(this).addClass("cal-ban");
//                                 $(this).append('<span class="cal-banIcon">班</span>');
//                             }
                            
//                         }
//                     });
//                 });
//                 //$.each(
//             }
//         },
//         nextMonth:function(){
//             var _curMonth = $("#cal-month-inp").val() | 0;
//             if(_curMonth == 12){
//                 var _curYear = $("#cal-year-inp").val() |0;
//                 if(_curYear == 2050)return;
//                 this.doNotUpdate = true;
//                 this.year_sel.select(_curYear + 1);
//                 this.doNotUpdate = false;
//                 this.month_sel.select(1);
//             }else{
//                this.month_sel.select(_curMonth+1);
//             }
//         },
//         preMonth:function(){
//             var _curMonth = $("#cal-month-inp").val() | 0;
            
//             if(_curMonth == 1){
//                 var _curYear = $("#cal-year-inp").val() |0;
//                 if(_curYear == 1900)return;
//                 this.doNotUpdate = true;
//                 this.year_sel.select(_curYear - 1);
//                 this.doNotUpdate = false;
//                 this.month_sel.select(12);
//             }else{
//                 this.month_sel.select(_curMonth-1);
//             }
//         }
//     });
//     window.bigCal = new Calendar();
    
    
   
//     //alert(solarDay1());
//     //alert(solarDay3());
    
//     /*
//     ;(function(){
//         $("#js_cal").hover(function(){
//             YLMF.cancelDefer("hideCalPanel");
//             YLMF.defer("showCalPanel",function(){

//                 $("#cal-popup").fadeIn();
//                 $("#js_cal").addClass("js_calHover");
//             },200); 
//         },function(){
//             YLMF.cancelDefer("showCalPanel");
//             YLMF.defer("hideCalPanel",function(){
                
//                 //$("#cal-popup").fadeOut();
//                 $("#cal-popup").hide();
//                 bigCal.year_sel.hide();
//                 bigCal.month_sel.hide();
//                 bigCal.holiday_sel.hide();
//                 $("#js_cal").removeClass("js_calHover");
//             });
//         });

//         $("#cal-popup").hover(function(){
//             YLMF.cancelDefer("hideCalPanel");
//         },function(){
//             YLMF.defer("hideCalPanel",function(){
//                 $("#js_cal").removeClass("js_calHover");
//                 $("#cal-popup").hide();
//                 //$("#cal-popup").fadeOut();
//                 bigCal.year_sel.hide();
//                 bigCal.month_sel.hide();
//                 bigCal.holiday_sel.hide();
//             });
//         });
//     })();
    
//     */
    
// })(jQuery);
/* 日历end  */

/* 左侧浮动start  */
var LeftBar = document.getElementById("LeftBar");
function getClassName(className, tagName,root) {
    if (root) {
        root = typeof root == "string" ? document.getElementById(root) : root;
    } else {
        root = document.body;
    }
    tagName = tagName || "*";
    if (document.getElementsByClassName) {
        return root.getElementsByClassName(className);
    } else {
        var tag = root.getElementsByTagName(tagName);
        var tagAll = [];
        for (var i = 0; i < tag.length; i++) {
            for (var j = 0,
            n = tag[i].className.split(' '); j < n.length; j++) {
                if (n[j] == className) {
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}
/*
function _size(){
    return;
    var sc_wid = document.documentElement.clientWidth;
    if(sc_wid<1100){LeftBar.style.display = 'none';}
    else{LeftBar.style.display = 'block';}
}
var resize_timer;
setTimeout(function(){YLMF.addListener({resize:function(){
    if(resize_timer) window.clearTimeout(resize_timer);
    resize_timer = window.setTimeout(function(){_size();},100);
}});},3000);


*/
;(function(){
    var Boxes = getClassName('Box','div',LeftBar);
    for(var i=0;i<Boxes.length;i++){
        Boxes[i].onmouseover = function(){this.className="Box Box_hover";}
        Boxes[i].onmouseout = function(){this.className="Box";}
    }
    //_size();
})();

















