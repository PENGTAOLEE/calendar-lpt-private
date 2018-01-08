
/*
 * jQuery UI Position 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1];return this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]!==e){var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0}},top:function(b,c){if(c.at[1]!==e){var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];if(!c||!c.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&jQuery.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);


/**
* v 1.0.4
* by zhaixiaolin
**/
(function () {
    window.YLMF = window.YLMF || {};
    YLMF.namespace = function (c) {
        if (!c || !c.length) {
            return null
        }
        var d = c.split(".");
        var b = YLMF;
        for (var a = (d[0] == "YLMF") ? 1 : 0; a < d.length; ++a) {
            b[d[a]] = b[d[a]] || {};
            b = b[d[a]]
        }
        return b
    };
  //继承
    YLMF.extend = function (a, c) {
        var b = function () {
        };
        b.prototype = c.prototype;
        a.prototype = new b();
        a.prototype.constructor = a;
        a.superclass = c.prototype;
        if (c.prototype.constructor == Object.prototype.constructor) {
            c.prototype.constructor = c
        }
    };
    YLMF.contains = function(a,b){
        return a.contains ? a!=b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
    }
    //浅拷贝
    YLMF._extend = function(destination, source){
        for ( var property in source) {
          destination[property] = source[property];
        }
        return destination;
    }
  YLMF.isArray = function(obj) { 
    return Object.prototype.toString.call(obj) === '[object Array]'; 
  } 

  YLMF.isObject = function (a) {
      return !!a && Object.prototype.toString.call(a) === "[object Object]";
  };

  YLMF.each = function (objArray, funName) {
    if(YLMF.isArray(objArray)){
      var l = objArray.length;
          for(var i=0; i < l; i++){ funName(i,objArray[i]); } 
    }
    
    };
    YLMF._extend(YLMF, {
    trim : function(str){
      return str.replace(/(^\s*)|(\s*$)/g,'');
    },
        ajax: function (b, a, f) {
            var c = (YLMF.xhrs = YLMF.xhrs || {});
            f.dataType = f.dataType || "html";
            if (b) {
                try {
                    c[b] && c[b].abort()
                } catch (d) {
                }
                c[b] = $.ajax(a, f)
            } else {
                $.ajax(a, f)
            }
        },
        deferTimmer: {},
        //e is time ,b is name,a is fun
        defer: function (b, a, e, d, c) {
            e = e || 500;
            d = d || window;
            c = c || [];
            if (b) {
                this.cancelDefer(b);
                this.deferTimmer[b] = window.setTimeout(function () {
                    a.apply(d, c)
                }, e)
            } else {
                window.setTimeout(function () {
                    a.apply(d, c)
                }, e)
            }
        },
        cancelDefer: function (a) {
            window.clearTimeout(this.deferTimmer[a])
        },
        getEvent: function (b) {
            var a = b || window.event;
            if (!a) {
                var d = this.getEvent.caller;
                while (d) {
                    a = d.arguments[0];
                    if (a && (Event == a.constructor || MouseEvent == a.constructor)) {
                        break
                    }
                    d = d.caller
                }
            }
            return a
        },
        getEventTarget: function (a) {
            a = a || window.event;
            return a.target || a.srcElement
        },
        some: function (b, c) {
            if (b.some) {
                return b.some(c)
            }
            var a = b.length;
            if (typeof c != "function") {
                throw new TypeError()
            }
            for (var d = 0; d < a; d++) {
                if (d in b && c.call(c, b[d], d, b)) {
                    return true
                }
            }
            return false
        },
        getImg: function (c) {
            var a = new Image();
            this.img = a;
            var b = navigator.appName.toLowerCase();
            if (b.indexOf("netscape") == -1) {
                a.onreadystatechange = function () {
                    if (a.readyState == "complete") {
                        c(a)
                    }
                }
            } else {
                a.onload = function () {
                    if (a.complete == true) {
                        c(a)
                    }
                }
            }
        },
        imgResize: function (c, b, a) {
            if ($.browser.msie && $.browser.version == "6.0") {
                if (c.width == 0) {
                    return
                }
                if ((c.width / c.height) > (b / a)) {
                    c.width = b
                } else {
                    c.height = a
                }
            }
        }
    });
    YLMF.getImg.prototype.get = function (a) {
        this.img.src = a
    };
    YLMF.namespace("Observable");
    YLMF._extend(YLMF.Observable, {
        addEvents: function (a) {
            if (YLMF.isObject(a)) {
                for (var c in a) {
                    this.addEvents(c)
                }
            } else {
                if (typeof a == "string") {
                   this.addEvent(a);
                } else {
                    if (YLMF.isArray(a)) {
                        for (var b = 0; b < a.length; b++) {
                            this.addEvent(a[b])
                        }
                    }
                }
            }
        },
    addEvent : function(a){
      if (typeof a == "string") {
        this.events = this.events || {};
        this.events[a] = []
      }
    },
        fireEvents: function (c, a) {
            this.fireEvent(c, a);
        },
    fireEvent : function(c, a){
      if (typeof c == "string") {
                var b = Array.prototype.slice.call(arguments);;
                this.events && YLMF.each(this.events[c], function (d, e) {
                    e.apply(a || this, b.slice(2) || [])
                })
            }
    },
        addListener: function (b,c) {
            if (YLMF.isObject(b)) {
                for (var a in b) {
                    this.events && this.events[a].push(b[a])
                }
            }else if(typeof b == "string"){
        this.events && this.events[b].push(c);
      }
        },
        removeEvents: function (a) {
            if (YLMF.isObject(a)) {
                for (var b in a) {
                    this.removeEvents(b)
                }
            } else {
                if (typeof a == "STRING") {
                    this.events = this.events || {};
                    delete this.events[a]
                }
            }
        },
        removeListener: function (b) {
            for (var a in b) {
                this.events && (this.events[a] = YLMF.grep(this.events[a], function (d, c) {
                    return d != b[a]
                }))
            }
        },
    on : function(b,c){
      this.addListener(b,c);
    },
    grep : function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d} 
    });
    YLMF._extend(YLMF,YLMF.Observable);
})();

(function(){
  function changeTab(tabItem,contentEl,op){
    
    var me = this;
    this.op = $.extend({
        conItemSelcter : "ul"
    },op);
    this.tabItem = $(tabItem);
    this.tabItems = this.tabItem.find("li");
    this.contentEl = $(contentEl);
    this.conItems = this.contentEl.find(this.op.conItemSelcter);
   
    this.addEvents(["beforeChange","afterChange"]);
    this.tabItems.click(function(){
        var i = me.tabItems.index(this);
        me.fireEvent("beforeChange",me,i);
        me.conItems.hide().eq(i).show();
        me.fireEvent("afterChange",me);

    });
  };
  $.extend(changeTab.prototype,YLMF.Observable);
  window.changeTab = changeTab;
})();


// cookie 纪录cookie
Cookie = {
    set: function (name, value, expires, path, domain) {
        if (typeof expires == "undefined") {
            expires = new Date(new Date().getTime() + 1000 * 3600 * 24 * 365);
        }

        document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? ";domain=" + domain : "");

    },
    get: function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            return unescape(arr[2]);
        }
        return null;
    },
    clear: function (name, path, domain) {
        if (this.get(name)) {
            document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
        }
    }
};


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

var cache = (function () {
    var cacheBox = {};
    function _get(name) {
        if (cacheBox[name]) return cacheBox[name];
        return null
    }
    function _set(name, value, A) {
        if (!A) { cacheBox[name] = value; }
        else {
            if (Yl.getType(cacheBox[name]) != "array") { cacheBox[name] = []; }
            cacheBox[name].push(value)
        }
    }
    function _remove(name) {
        delete cacheBox[name]
    }
    function _is(name) {
        return (_get(name) == null) ? false : true
    }
    return {
        get: _get,
        set: _set,
        is: _is,
        remove: _remove
    }
})();


if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, thisObj){
        var scope = thisObj || window;
        for (var i = 0,j = this.length; i < j; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
}

YLMF.setHome = function (c,a){
    if(!$.browser.msie){
        window.open("http://www.114la.com/repair/setbrowser.html");
        return
    }
    var b=a;if(!b){b=window.location.href}c.style.behavior="url(#default#homepage)";c.setHomePage(b)
}

;(function(){
    var PlaceHolder = function(input,label){
        input = $(input);
        label = $(label);
        input.focus(function(){
            label.hide();
        });
        input.blur(function(){
            if($.trim(input.val()) == ""){
                label.show();
            }
        });
        if(!label.is("label")){
            label.mousedown(function(){
                input.focus();
            });
        }
        
        $(function(){
            window.setTimeout(function(){
                if($.trim(input.val()) != ""){
                    label.hide();
                }
            },100);
        });
    }
    
    window.PlaceHolder = PlaceHolder;
})();

