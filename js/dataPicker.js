(function() {
    window.YLMF = window.YLMF || {};
    YLMF.namespace = function(c) {
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
    YLMF.extend = function(a, c) {
        var b = function() {};
        b.prototype = c.prototype;
        a.prototype = new b();
        a.prototype.constructor = a;
        a.superclass = c.prototype;
        if (c.prototype.constructor == Object.prototype.constructor) {
            c.prototype.constructor = c
        }
    };
    YLMF.contains = function(a, b) {
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
    }
    //浅拷贝
    YLMF._extend = function(destination, source) {
        for (var property in source) {
            destination[property] = source[property];
        }
        return destination;
    }
    YLMF.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    YLMF.isObject = function(a) {
        return !! a && Object.prototype.toString.call(a) === "[object Object]";
    };

    YLMF.each = function(objArray, funName) {
        if (YLMF.isArray(objArray)) {
            var l = objArray.length;
            for (var i = 0; i < l; i++) {
                funName(i, objArray[i]);
            }
        }
    };
    YLMF._extend(YLMF, {
        trim: function(str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        ajax: function(b, a, f) {
            var c = (YLMF.xhrs = YLMF.xhrs || {});
            f.dataType = f.dataType || "html";
            if (b) {
                try {
                    c[b] && c[b].abort()
                } catch(d) {}
                c[b] = $.ajax(a, f)
            } else {
                $.ajax(a, f)
            }
        },
        loadScript: function(config) {
            if (!config || !config.src) return;
            var doc = document;
            var Head = doc.getElementsByTagName('head')[0],
            Script = doc.createElement('script');
            Script.onload = Script.onreadystatechange = function() {
                if (Script && Script.readyState && Script.readyState != 'loaded' && Script.readyState != 'complete') return;
                Script.onload = Script.onreadystatechange = Script.onerror = null;
                Script.Src = '';
                if (!doc.all) {
                    Script.parentNode.removeChild(Script);
                }
                Script = null;
                config.callback && config.callback();
            };
            Script.src = config.src;
            Script.charset = config.charset || 'gb2312';
            Head.insertBefore(Script, Head.firstChild);
            return Script;
        },
        deferTimmer: {},
        //e is time ,b is name,a is fun
        defer: function(b, a, e, d, c) {
            e = e || 500;
            d = d || window;
            c = c || [];
            if (b) {
                this.cancelDefer(b);
                this.deferTimmer[b] = window.setTimeout(function() {
                    a.apply(d, c)
                },
                e)
            } else {
                window.setTimeout(function() {
                    a.apply(d, c)
                },
                e)
            }
        },
        cancelDefer: function(a) {
            window.clearTimeout(this.deferTimmer[a])
        },
        getEvent: function(b) {
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
        getEventTarget: function(a) {
            a = a || window.event;
            return a.target || a.srcElement
        },
        some: function(b, c) {
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
        getImg: function(c) {
            var a = new Image();
            this.img = a;
            var b = navigator.appName.toLowerCase();
            if (b.indexOf("netscape") == -1) {
                a.onreadystatechange = function() {
                    if (a.readyState == "complete") {
                        c(a)
                    }
                }
            } else {
                a.onload = function() {
                    if (a.complete == true) {
                        c(a)
                    }
                }
            }
        },
        imgResize: function(c, b, a) {
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
    YLMF.getImg.prototype.get = function(a) {
        this.img.src = a
    };
    YLMF.namespace("Observable");
    YLMF._extend(YLMF.Observable, {
        addEvents: function(a) {
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
        addEvent: function(a) {
            if (typeof a == "string") {
                this.events = this.events || {};
                this.events[a] = []
            }
        },
        fireEvents: function(c, a) {
            this.fireEvent(c, a);
        },
        fireEvent: function(c, a) {
            if (typeof c == "string") {
                var b = Array.prototype.slice.call(arguments);;
                this.events && YLMF.each(this.events[c],
                function(d, e) {
                    e.apply(a || this, b.slice(2) || [])
                })
            }
        },
        addListener: function(b, c) {
            if (YLMF.isObject(b)) {
                for (var a in b) {
                    this.events && this.events[a].push(b[a]);
                }
            } else if (typeof b == "string") {
                this.events && this.events[b].push(c);
            }
        },
        removeEvents: function(a) {
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
        removeListener: function(b) {
            for (var a in b) {
                this.events && (this.events[a] = YLMF.grep(this.events[a],
                function(d, c) {
                    return d != b[a]
                }))
            }
        },
        on: function(b, c) {
            this.addListener(b, c);
        },
        grep: function(a, b, c) {
            var d = [],
            e;
            c = !!c;
            for (var f = 0,
            g = a.length; f < g; f++) e = !!b(a[f], f),
            c !== e && d.push(a[f]);
            return d;
        }
    });
    YLMF._extend(YLMF, YLMF.Observable);
})();

DateInput = (function() {
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
    var insertAfter = function(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            // 如果最后的节点是目标元素，则直接添加。因为默认是最后
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
            //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        }
    }

    var DateInput = function(el, opts) {
        var me = this;
        this.instanceNub = instanceNub ++;
        if (typeof(opts) != "object") opts = {};
        YLMF._extend(this, DateInput.DEFAULT_OPTS);
        YLMF._extend(this, opts);
        YLMF._extend(this, YLMF.Observable);
        
        this.input = $(el);
        this.input.val(this.dateToString(new Date(_today_y,_today_m,_today_d+1)));
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
        startOfWeek: 7,
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
            var matches;
            if (matches = string.match(/^(\d{4,4})-(\d{1,2})-(\d{1,2})$/)) {
                return new Date(matches[1], parseInt(matches[2],10) - 1, matches[3], 12, 00);
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
            if(dayEl.size() == 0 || dayEl.is("s")){
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
                of : this.input,
                at:"left bottom",
                my:"left top",
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
            return this.changeDayTo(this.startOfWeek, new Date(date.getFullYear(), date.getMonth()), -1);
        },

        // Given a date, return the day at the end of the week *after* this month
        rangeEnd: function(date) {
            return this.changeDayTo((this.startOfWeek - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
        },

        // Is the given date the first day of the week?
        isFirstDayOfWeek: function(date) {
            return date.getDay() == this.startOfWeek;
        },

        // Is the given date the last day of the week?
        isLastDayOfWeek: function(date) {
            return date.getDay() == (this.startOfWeek - 1) % 7;
        },

        // Adjust a given array of day names to begin with the configured start-of-week
        adjustDays: function(days) {
            var newDays = [];
            for (var i = 0; i < days.length; i++) {
                newDays[i] = days[(i + this.startOfWeek) % 7];
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
})();

(function(){
    var TwinDateInput = function(startEl,endEl,opt){
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

;(function($){
    
    var lunarInfo=new Array(
    0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
    0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
    0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
    0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
    0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
    0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
    0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
    0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
    0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
    0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
    0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
    0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
    0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
    0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
    0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)
    var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
    var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
    var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
    var now = new Date();
    var SY = now.getFullYear();
    var SM = now.getMonth();
    var SD = now.getDate();
    
    //==== 传入 offset 传回干支, 0=甲子
    var cyclical = function(num) { return(Gan[num%10]+Zhi[num%12]) }
    //==== 传回农历 y年的总天数
    var lYearDays = function(y) {
       var i, sum = 348
       for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
       return(sum+leapDays(y))
    }
    
    //==== 传回农历 y年闰月的天数
    var leapDays = function(y) {
       if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
       else return(0)
    }
    
    //==== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
    var leapMonth = function(y) { return(lunarInfo[y-1900] & 0xf)}
    
    //====================================== 传回农历 y年m月的总天数
    var monthDays = function(y,m) { return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )}
    
    //==== 算出农历, 传入日期物件, 传回农历日期物件
    //     该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
    var Lunar = function(objDate) {
       var i, leap=0, temp=0
       var baseDate = new Date(1900,0,31)
       var offset   = (objDate - baseDate)/86400000

       this.dayCyl = offset + 40
       this.monCyl = 14

       for(i=1900; i<2050 && offset>0; i++) {
          temp = lYearDays(i)
          offset -= temp
          this.monCyl += 12
       }
       if(offset<0) {
          offset += temp;
          i--;
          this.monCyl -= 12
       }

       this.year = i
       this.yearCyl = i-1864

       leap = leapMonth(i) //闰哪个月
       this.isLeap = false

       for(i=1; i<13 && offset>0; i++) {
          //闰月
          if(leap>0 && i==(leap+1) && this.isLeap==false)
             { --i; this.isLeap = true; temp = leapDays(this.year); }
          else
             { temp = monthDays(this.year, i); }

          //解除闰月
          if(this.isLeap==true && i==(leap+1)) this.isLeap = false

          offset -= temp
          if(this.isLeap == false) this.monCyl ++
       }

       if(offset==0 && leap>0 && i==leap+1)
          if(this.isLeap)
             { this.isLeap = false; }
          else
             { this.isLeap = true; --i; --this.monCyl;}

       if(offset<0){ offset += temp; --i; --this.monCyl; }

       this.month = i
       this.day = offset + 1
    }

    var YYMMDD = function(){
        var cl = '<font color="green" STYLE="font-size:13pt;">';
        if (now.getDay() == 0) cl = '<font color="#c00000" STYLE="font-size:13pt;">';
        if (now.getDay() == 6) cl = '<font color="green" STYLE="font-size:13pt;">';
        return(cl+SY+'年'+(SM+1)+'月'+'</font>');
    }
    var weekday = function(){
        var day = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
        var cl = '<font color="green" STYLE="font-size:9pt;">';
        if (now.getDay() == 0) cl = '<font color="green" STYLE="font-size:9pt;">';
        if (now.getDay() == 6) cl = '<font color="red" STYLE="font-size:9pt;">';
        return(cl+ day[now.getDay()]+ '</font>');
    }
    
    //==== 中文日期
    var cDay = function(m,d){
        var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
        var nStr2 = new Array('初','十','廿','卅','　');
        var s;
        if (m>10){s = '十'+nStr1[m-10]} else {s = nStr1[m]} s += '月'
        switch (d) {
          case 10:s += '初十'; break;
          case 20:s += '二十'; break;
          case 30:s += '三十'; break;
          default:s += nStr2[Math.floor(d/10)]; s += nStr1[d%10];
        }
        return(s);
    }
    //中文日期
    var chineseDay = function(d){
        var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
        var nStr2 = new Array('初','十','廿','卅','　');
        var s = "";
        switch (d) {
          case 10:s += '初十'; break;
          case 20:s += '二十'; break;
          case 30:s += '三十'; break;
          default:s += nStr2[Math.floor(d/10)]; s += nStr1[d%10];
        }
        return(s);
    }
    var solarDay1 = function(){
        var sDObj = new Date(SY,SM,SD);
        var lDObj = new Lunar(sDObj);
        var cl = '<font color="#9933CC" STYLE="font-size:9pt;">';
        var tt = '【'+Animals[(SY-4)%12]+'】'+cyclical(lDObj.monCyl)+'月 '+cyclical(lDObj.dayCyl++)+'日' ;
        return(cl+tt+'</font>');
    }
   
    var solarDay2 = function(){
        var sDObj = new Date(SY,SM,SD);
        var lDObj = new Lunar(sDObj);
        var cl = '<font color="green" STYLE="font-size:9pt;">';
        //农历BB'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' 月 '+cld[d].lDay+' 日
        var tt = cyclical(SY-1900+36)+'年 '+cDay(lDObj.month,lDObj.day);
        return(cl+tt+'</font>');
    }
     
    var _montherDay = {};
    var _fatherDay = {};
    var isMonthersDay = function(d){
    d = d || new Date();
    var dd = new Date("May 01 "+d.getFullYear());
    var nnd = dd.getDay()==0 ? 7:dd.getDay();
    var cm = d.getTime(),//获取当前时间的毫秒数
          montherDay = _montherDay[d.getFullYear()] || (new Date("May "+(1+(7-nnd)+7)+" "+d.getFullYear())).getTime(),
          day = 60*60*24*1000,
          b= montherDay-cm;
          _montherDay[d.getFullYear()] = montherDay;
          if(b>0){
            //alert("还没到母亲节");
          }else if(-b >= day){
            //alert("已经过了母亲节了")
          }else{
            //alert("今天就是母亲节")
              return true;
          }
          return false;
    }

    var isFatherDay = function(d){
         d = d || new Date();
    var dd = new Date("June 01 " + d.getFullYear());
    var nnd = dd.getDay()==0 ? 7:dd.getDay();
    var cm = d.getTime(),
        fatherDay = _fatherDay[d.getFullYear()] || (new Date("June "+(1+(7-nnd)+14)+" "+d.getFullYear())).getTime(),
        day = 60*60*24*1000,
        b= fatherDay-cm;
        _fatherDay[d.getFullYear()] = fatherDay;
        
        if(b>0){
        //alert("还没到母亲节");
        }else if(-b >= day){
        //alert("已经过了母亲节了")
        }else{
        //alert("今天就是母亲节")
          return true;
        }
        return false;
    }
    
    /**
     * 国内传统节日
     * @param {obj} 时间对象公历
     */
    var getDomesticFestival = function(date){
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();
        // 国内传统节日
        var domesticFestival = {
            'd0101':'春节 ',
            'd0115':'元宵节',
            'd0202':'龙头节',
            'd0505':'端午节',
            'd0707':'七夕节',
            'd0715':'中元节',
            'd0815':'中秋节',
            'd0909':'重阳节',
            'd1001':'寒衣节',
            'd1015':'下元节',
            'd1208':'腊八节',
            'd1223':'小年'
        };
        m=m<10?'0'+m:m;
        d=d<10?'0'+d:d;
        return domesticFestival['d'+m+d]?domesticFestival['d'+m+d]:null;
    }

    /*
    * @param date js时间对象
    * @return  array [节日,节气]
    */
    var solarDay3 = function(date){
        var lFtv = new Array("0101 春节","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1223 北方小年","1224 南方小年")
        var sFtv = new Array("0101*元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日","0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节","0801 建军节","0909 毛席逝世纪念","0910 教师节","0928 孔子诞辰","1001*国庆节",
        "1006 老人节","1024 联合国日","1112 孙中山诞辰","1220 澳门回归纪念","1225 圣诞节","1226 毛席诞辰","0518 国际博物馆日","0605 世界环境日","1111 光棍节","1212 寒衣节","1201 世界艾滋病日","1220 澳门回归","0903 抗战胜利")
        
        
        var sDObj = date || new Date(SY,SM,SD);
        
        var SY = sDObj.getFullYear();
        var SM = sDObj.getMonth();
        var SD = sDObj.getDate();
        var lDObj = new Lunar(sDObj);
        var lDPOS = new Array(3)
        var festival='',solarTerms='',solarFestival='',lunarFestival='',tmp1,tmp2;
        //农历节日
        $.each(lFtv,function(i,n){
            if(n.match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                tmp1=Number(RegExp.$1)-lDObj.month
                tmp2=Number(RegExp.$2)-lDObj.day
                if(tmp1==0 && tmp2==0) lunarFestival=RegExp.$4
            }
        });
        
        if(isFatherDay(sDObj)){
            lunarFestival = "父亲节";
        }
        
        if(lDObj.month == 12 ){
            if(lDObj.day == 29 || lDObj.day == 30){
                var _next = new Date(SY,SM,SD+1);
                var _nextLunar = new Lunar(_next);
                if(_nextLunar.month == 1 && _nextLunar.day == 1){
                    lunarFestival = "除夕";
                }
            }
        }
        
        if(isMonthersDay(sDObj)){
            lunarFestival = "母亲节";
        }
        
        //国历节日
        $.each(sFtv,function(i,n){
            if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)){
                tmp1=Number(RegExp.$1)-(SM+1)
                tmp2=Number(RegExp.$2)-SD
                if(tmp1==0 && tmp2==0) solarFestival = RegExp.$4
            }  
        });
        
        
        
        var getjq = function(yyyy,mm,dd){
            mm = mm-1;
            var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989-1440,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758+1440);
            var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
            var tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2+1]*60000)+Date.UTC(1900,0,6,2,5));
            var tmp2 = tmp1.getUTCDate();
            var solarTerms = "";
            if (tmp2==dd)
                solarTerms = solarTerm[mm*2+1];
            tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2]*60000)+Date.UTC(1900,0,6,2,5));
            tmp2= tmp1.getUTCDate();
            if (tmp2==dd) 
                solarTerms = solarTerm[mm*2];
            return solarTerms;
        }
      
        solarTerms = getjq(SY,SM +1,SD);
        if(solarTerms == '' && solarFestival == '' && lunarFestival == ''){
            festival = null;
        } else {
            if (solarFestival) {
                solarFestival = solarFestival;
            } else if(lunarFestival) {
                lunarFestival =  lunarFestival;  
            } else if(solarTerms) {
                solarTerms = solarTerms;
            }
        }
        return [solarFestival,lunarFestival,solarTerms];
    }
    
    
    var Calendar = function(){
        var me = this;
        this.DetailDataNew = {};
        this.jia = {};
        this.preSelectedDay = (new Date()).getDate();
        YLMF._extend(this, DateInput.DEFAULT_OPTS);
        YLMF._extend(this, YLMF.Observable);
        
        
        me.doNotUpdate = false;
        
        
        var _htmlString = "";
        for(var i = 1901;i<=2050;i++){
            _htmlString += '<li value="'+ i+'">'+i+'年</li>';
        }
        $("#cal-year-list ul").html(_htmlString);
        //$("#cal-year-list").get(0).scrollTop = 1000;
        //init the value 
        var _curTime = new Date();
        
        
        this.year_sel = new Selecter("#cal-year-handle","#cal-year-list","#cal-year-inp",{handeTxt:".custom-txt",defaultValue:_curTime.getFullYear()});
        this.holiday_sel = new Selecter("#cal-holiday-handle","#cal-holiday-list","#cal-holiday-inp",{handeTxt:".custom-txt",defaultValue:"1"});
        this.month_sel = new Selecter("#cal-month-handle","#cal-month-list","#cal-month-inp",{handeTxt:".custom-txt2",defaultValue:_curTime.getMonth() + 1});
        this.year_sel.addListener({
            "afterShow" : function(){
                var _year = $(this.selectedEl).attr("value") | 0;
                this.selEl.get(0).scrollTop = (_year - 1905) * 26;
            },
            "afterSelect":function(){
                var _year = $("#cal-year-inp").val();
                var holidayShow = function(){
                    $("#cal-holiday-list li").slice(1).show();
                    if(me.jia["" + _year]["kzsl_x"]){$("#kzsl").show();} //2015年的抗战胜利假期判断
                    else{$("#kzsl").hide();}
                };
                if(!me.jia["" + _year]){
                    $.ajax({
                        url:"/static/wnl/"+_year+"/jia.json",
                        dataType:"json",
                        success:function(data){
                            if(data){
                                me.jia["" + _year] = data;
                                me.updateHoliday();
                                holidayShow();
                            }
                        },
                        error:function(){$("#cal-holiday-list li").slice(1).hide();}
                    });
                }else{
                    holidayShow();
                }
                me.holiday_sel.select("1");
                if(!me.doNotUpdate){
                   me.update(); 
                }
            }
        });
        
        this.month_sel.addListener({
            "afterSelect":function(){
                if(!me.changingHoliday){
                    me.holiday_sel.select("1");    
                }
                if(!me.doNotUpdate){
                   me.update();  
                }
            }
        });
        me.changingHoliday= false;
        this.holiday_sel.addListener({
            "afterSelect":function(){
                var _year = $("#cal-year-inp").val();
                var _holi = $("#cal-holiday-inp").val() |0;
                if(_holi != 1 && me.jia["" + _year]){
                    var holidayArr = ["yd_x","cj_x","qmj_x","gjldj_x","dwj_x","zqj_x","gqj_x","kzsl_x"];
                    var holidayItem = holidayArr[_holi-2];
                    var jiaItem = me.jia["" + _year][holidayItem];
                    me.changingHoliday = true;
                    me.month_sel.select(jiaItem.fd.split("-")[1] | 0);
                    me.changingHoliday = false;
                    me.update();
                    me.updateHoliday();
                }
            }
        });
        this.build();
        
        $.ajax({
            url:"/static/wnl/"+_curTime.getFullYear()+"/jia.json",
            dataType:"json",
            success:function(data){
                if(data){
                    me.jia["" + _curTime.getFullYear()] = data;
                    me.updateHoliday();
                    if(data["kzsl_x"]){$("#kzsl").show();}  //2015年的抗战胜利假期判断
                    else{$("#kzsl").hide();}
                }
            }
        });
        
        $("#cal-todayBtn").click(function(){
            me.preSelectedDay = _curTime.getDate();
            me.doNotUpdate = true;
            me.year_sel.select(_curTime.getFullYear());
            me.doNotUpdate = false;
            me.month_sel.select(_curTime.getMonth() + 1);

            $("#cal-todayBtn").html('今日').css({
                'background-color':'#f7f7f7',
                'color':'#333',
                'border-color': '#e0e0e0'
            });
            
        });
        // 增加选中今天 @lpt
        $('.cal-td.cal-today').click(function() {
            $("#cal-todayBtn").html('今日').css({
                'background-color':'#f7f7f7',
                'color':'#333',
                'border-color': '#e0e0e0'
            });
        })
        
        $("#cal-nextMonth").click(function(){
            me.nextMonth();
        });
        $("#cal-preMonth").click(function(){
            me.preMonth();
        });
        // 上一年
        $('#prev-year').click(function(){
            me.prevYear();
        })
        $('#next-year').click(function(){
            me.nextYear();
        })
        var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
        var nScrollTop = 0;   //滚动到的当前位置
        var nDivHight = $("#cal-year-list").height();
       
        var scrollSpeed = null;
        $("#cal-year-list").bind("mousewheel",function(event,delta ){
            //alert(delta);
            nScrollHight = $(this)[0].scrollHeight;
            nScrollTop = $(this)[0].scrollTop;
            
            if(nScrollTop + nDivHight >= nScrollHight && delta<0){
                if(event.preventDefault){
                    event.preventDefault();
                }
                return false;
            };
            
            if(delta < 0 && nScrollTop + nDivHight - delta >= nScrollHight){
                //$("#cal-year-list").get(0).scrollTop = (nScrollHight - nDivHight);
                // if(event.preventDefault){
                    //event.preventDefault();
                //}
                //return false;
            }
           
            //console.log(event);
            //var _eve = event.originalEvent;
            //_eve.preventDefault();
            //if(_eve.stopPropagation){
            //    _eve.stopPropagation();
            //}else{
            //   _eve.cancelBubble = true; 
            //}
        });
    }
    YLMF.extend(Calendar,DateInput);
    YLMF._extend(Calendar.prototype,{
        build:function(){
            var me = this;
            this.update();
        },
        update:function(){
            var me = this;
            $("#cal-con").html("");
            var _year = $("#cal-year-inp").val();
            this.createMonthCal(new Date($("#cal-year-inp").val(),$("#cal-month-inp").val() - 1 ),$("#cal-con"));
            this.checkHoliday();
        },
        updateHoliday:function(){
            var me = this;
            var _holi = $("#cal-holiday-inp").val() |0;
            var _year = $("#cal-year-inp").val();
            var holidayArr = ["yd_x","cj_x","qmj_x","gjldj_x","dwj_x","zqj_x","gqj_x","kzsl_x"]
            if(_holi != 1 && me.jia["" + _year]){
                var holidayItem = holidayArr[_holi-2];
                var jiaItem = me.jia["" + _year][holidayItem];
                me.preSelectedDay = jiaItem.fd.split("-")[2];
                me.doSelectDay();
            }
            me.checkHoliday();
        },
        createMonthCal:function(date, cellEl){
            var me = this;
            var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            var rangeStart = this.rangeStart(date);
            var rangeEnd = this.rangeEnd(date);
           
            var numDays = this.daysBetween(rangeStart, rangeEnd);
            var dayRow = null;
            var dayCell = "";
            var _nowDateString = this.dateToString(new Date());
            var _container = $("<div class='cal-container'></div>");
            var _tr = null;
            numDays = Math.max(numDays,34);
            // 如果大于35 调整没行的高度
            for (var i = 0; i <= numDays; i++) {
                    var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
                    var _curDay2 = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i);
                    var curLunar = new Lunar(_curDay2);
                    var _lunnarDay = chineseDay(curLunar.day);
                    var _jieri = solarDay3(_curDay2);
                    var domesticFestival = getDomesticFestival(_curDay2);
                    if(i%7 == 0){
                        _tr = $("<div class='cal-tdWrap clearfix'></div>");
                        _container.append(_tr);
                    }

                    // 公历日历
                    var oldDateCal = '';
                    if (_jieri[0]) {
                        oldDateCal = '<div class="cal-oldDate cal-jieri" >' + (_jieri[0]|| _lunnarDay) + '</div>';
                    } else if(_jieri[2]) {
                        oldDateCal = '<div class="cal-oldDate cal-jieqi" >' + (_jieri[2] || _lunnarDay) + '</div>';
                    } else if(_jieri[1]) {
                        oldDateCal = '<div class="cal-oldDate cal-domestic" >' + (_jieri[1] || _lunnarDay) + '</div>';
                    } else {
                        oldDateCal = '<div class="cal-oldDate" >' + (_lunnarDay) + '</div>';
                    }

                    dayCell = $('<div class="cal-td ' + ((currentDay.getDay()==0 ||currentDay.getDay()==6) ?"cal-festival":"") + '" date=' + me.dateToString(currentDay) + '>'   +
                                '<div class="cal-date">' + currentDay.getDate()+ '</div>' +
                                oldDateCal +
                            '</div>');

                    if (currentDay.getMonth() == date.getMonth()) {
                        dayCell.click(function(){
                            $("#cal-todayBtn").html('返回今日').css({
                                'background-color':'#68b3ff',
                                'color':'#fff',
                                'border-color': '#68b3ff'
                            });
                            $("#cal-popup-new .cal-tdCur").removeClass("cal-tdCur");
                            $(this).addClass("cal-tdCur");
                            me.showDetail($(this).attr("date"));
                            me.preSelectedDay = $(this).attr("date").split("-")[2] | 0;
                        });
                    } else {
                        dayCell.addClass("cal-tdGray");
                        dayCell.click(function(){
                            $("#cal-todayBtn").html('返回今日').css({
                                'background-color':'#68b3ff',
                                'color':'#fff',
                                'border-color': '#68b3ff'
                            });
                            var DC = this;
                            var _dcDay = me.stringToDate($(DC).attr("date"));
                            me.preSelectedDay = $(DC).attr("date").split("-")[2] | 0;
                            if(_dcDay.getTime() < date.getTime()){
                                me.preMonth();
                            }else{
                                me.nextMonth();
                            }
                        });
                    }
                    if (_nowDateString == this.dateToString(currentDay)) {
                        dayCell.addClass("cal-today");
                    }
                    _tr.append(dayCell);
                }
                _container.appendTo(cellEl);
                if (numDays > 35) {
                    $('.cal-popup-new .cal-td').css({'height': '68.4px'});
                    $('.cal-popup-new .cal-date').css({'padding-top':'12px'});
                }
            me.doSelectDay();
        },
        doSelectDay:function(){
            var me = this;
            var _year = $("#cal-year-inp").val();
            var _month = $("#cal-month-inp").val()|0;
            var _lastDay = new Date(_year,_month,0);
            
            if(me.preSelectedDay > _lastDay.getDate()){
                //me.preSelectedDay 
                me.preSelectedDay = _lastDay.getDate();
            }
            
            var _curDay = new Date(_year,_month-1,me.preSelectedDay);
            
            
            var _dayString = me.dateToString(_curDay);
            var dayEl = $("#cal-popup-new").find(".cal-td[date="+_dayString+"]");
            $("#cal-popup-new .cal-tdCur").removeClass("cal-tdCur");
            $(dayEl).addClass("cal-tdCur");
            me.showDetail($(dayEl).attr("date"));
            
        },
        showDetail:function(dayString){
            var me = this;
            var _clickDay = this.stringToDate(dayString);
            var _month = _clickDay.getMonth() + 1;  
                _month = _month <= 9 ?"0" + _month:"" + _month;
            if(this.DetailDataNew[_clickDay.getFullYear() + "" + (_clickDay.getMonth() + 1)]){
                this.refreshRightNew();
            }else if(_clickDay.getFullYear() > 2018 || _clickDay.getFullYear() < 2012){
                this.refreshRightNew();
            }else{
                
                var _url = "/static/wnl/" + _clickDay.getFullYear() + "/" + _clickDay.getFullYear() + _month + ".json"
                $.ajax({
                    url:_url,
                    dateType:"json",
                    success:function(data){
                        if(data){
                           me.DetailDataNew[data.year + "" + data.month] = data.day;
                           me.refreshRightNew();
                        }
                    }
                });
            }
        },

        // 获取当前第几周
        getWeekNumber: function(y, m, d) {
            // 是否润年
            function isLeapYear(year) {
                return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
            }
            // 当前月的天数
            function getMonthDays(year, month) {
                return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
            }

            var now = new Date(y, m - 1, d),
                year = now.getFullYear(),
                month = now.getMonth(),
                days = now.getDate();
            //那一天是那一年中的第多少天
            for (var i = 0; i < month; i++) {
                days += getMonthDays(year, i);
            }

            //那一年第一天是星期几
            var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
            var week = null;
            if (yearFirstDay == 1 && false) {
                week = Math.ceil(days / yearFirstDay);
            } else {
                days -= (7 - yearFirstDay + 1);
                week = Math.ceil(days / 7) + 1;
            }

            return week;
        },

        // 更新天干地支
        refreshRightNew:function(){
            var me = this;
            var curTd = $("#cal-popup-new .cal-tdCur");
            var curDate = this.stringToDate(curTd.attr("date"));
            var lDObj = new Lunar(curDate);
            var _curYearData = this.DetailDataNew[curDate.getFullYear() + "" + (curDate.getMonth() + 1)];
            var weekRank = this.getWeekNumber(curDate.getFullYear(),curDate.getMonth()+1,curDate.getDate());
            if(curTd.size() == 1){
                var curDetail = _curYearData?_curYearData[curDate.getDate() < 10 ?"0"+curDate.getDate():curDate.getDate()] : null;
                var yiString = "";
                var jiString = "";
                if(curDetail && curDetail.yi != ""){
                    var yiArr = curDetail.yi.split("、");
                    for(var i = 0;i<yiArr.length;i++){
                        if (i < 5) {
                            yiString += '<div class="cal-jyRow">' + yiArr[i] + '</div>';
                        }
                    }
                }
                if(curDetail && curDetail.ji != ""){
                    var jiArr = curDetail.ji.split("、");
                    for(var i = 0;i<jiArr.length;i++){
                        if (i < 5 ) {
                            jiString += '<div class="cal-jyRow">' + jiArr[i] + '</div>';
                        }
                    }
                }
                var getDayTil = me.formatDate(curTd.attr("date"));
                var getDayTilStr = getDayTil.getFullYear() + '年' + (getDayTil.getMonth()+1) + '月' + getDayTil.getDate() + '日';
                // 天干地支
                var calRightTop = '<div class="cal-rightRow1 clearfix">'+
                    '<div class="cal-dayTil">'+
                        '<span>'+getDayTilStr+'</span>'+
                        '<span>星期'+me.short_day_names[curDate.getDay()]+'</span>'+
                        '<span class="no-margin">'+weekRank+'周</span>'+
                    '</div>'+
                    '<div class="cal-dayNubWrap fl">'+
                        '<span class="cal-dayNub">'+curDate.getDate()+'</span>'+
                    '</div>'+
                    '<div class="cal-dayInfo-wrap fl">'+
                        '<div class="cal-dayInfo">【'+Animals[(lDObj.year-4)%12]+'年】'+cDay(lDObj.month,lDObj.day | 0)+'</div>'+
                        '<div class="cal-dayInfo cal-dayInfoLast">'+cyclical(lDObj.year-1900+36)+'年<i>·</i>'+cyclical(lDObj.monCyl)+'月<i>·</i>'+cyclical((lDObj.dayCyl|0))+'日</div>'+
                        '<a class="cal-dayinfo-article" href="http://xingzuo.114la.com/" target="_blank">测测您最近的运势</a>'+
                    '</div>'+
                '</div>'+
                '<div class="cal-rightRow2 clearfix">'+
                    '<div class="cal-yi">'+
                        '<div class="cal-rightTil cal-yiTil"><i class="cal-sprites bg-suitable"></i></div>'+
                        yiString +
                    '</div>'+
                    '<div class="cal-ji">'+
                        '<div class="cal-rightTil cal-jiTil"><i class="cal-sprites bg-taboo"></i></div>'+
                        jiString +
                    '</div>'+
                '</div>';
                $("#cal-popup-new .cal-right .cal-right-top").html(calRightTop);
            }
        },
        // 解决ie new Date('2017-12-29')返回NaN的问题
        formatDate: function (dateStringInRange) {
            var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
                date = new Date(NaN), month,
                parts = isoExp.exec(dateStringInRange);
            if(parts) {
                month = +parts[2];
                date.setFullYear(parts[1], month - 1, parts[3]);
                if(month != date.getMonth() + 1) {
                    date.setTime(NaN);
                }
            }
            return date;
        },
        checkHoliday:function(){
            var me = this;
            var _year = $("#cal-year-inp").val()|0;
            var _month = $("#cal-month-inp").val()|0;
            if(me.jia["" + _year]){
                $.each(me.jia["" + _year],function(key,item){
                    var _startDay = me.stringToDate(item.f);
                    var _endDay = me.stringToDate(item.t);
                    $("#cal-popup-new .cal-td").each(function(){
                        var _curDay = $(this).attr("date");
                        var curDay  = me.stringToDate(_curDay);
                        if((curDay >= _startDay) && (curDay <= _endDay)){
                            if(item.tp == "休"){
                                $(this).addClass("cal-xiu");
                                $(this).append('<span class="cal-xiuIcon">休</span>');
                            }else{
                                $(this).addClass("cal-ban");
                                $(this).append('<span class="cal-banIcon">班</span>');
                            }
                        }
                    });
                });
                //$.each(
            }
        },
        nextYear: function() {
            var _curYear = $("#cal-year-inp").val() | 0;
            if(_curYear == 2050)return;
            this.year_sel.select(_curYear+1);
        },
        prevYear: function() {
            var _curYear = $("#cal-year-inp").val() | 0;
            this.year_sel.select(_curYear-1);
        },
        nextMonth:function(){
            var _curMonth = $("#cal-month-inp").val() | 0;
            if(_curMonth == 12){
                var _curYear = $("#cal-year-inp").val() |0;
                if(_curYear == 2050)return;
                this.doNotUpdate = true;
                this.year_sel.select(_curYear + 1);
                this.doNotUpdate = false;
                this.month_sel.select(1);
            }else{
               this.month_sel.select(_curMonth+1);
            }
        },
        preMonth:function(){
            var _curMonth = $("#cal-month-inp").val() | 0;
            if(_curMonth == 1){
                var _curYear = $("#cal-year-inp").val() |0;
                if(_curYear == 1900)return;
                this.doNotUpdate = true;
                this.year_sel.select(_curYear - 1);
                this.doNotUpdate = false;
                this.month_sel.select(12);
            }else{
                this.month_sel.select(_curMonth-1);
            }
        }
    });
    window.bigCal = new Calendar();
    
    
   
    //alert(solarDay1());
    //alert(solarDay3());
    
    ;(function(){
        $("#js_cal").hover(function(){
            YLMF.cancelDefer("hideCalPanel");
            YLMF.defer("showCalPanel",function(){

                $("#cal-popup-new").fadeIn();
                $("#js_cal").addClass("js_calHover");
            },500); 
        },function(){
            YLMF.cancelDefer("showCalPanel");
            YLMF.defer("hideCalPanel",function(){
                
                //$("#cal-popup-new").fadeOut();
                //$("#cal-popup-new").hide();
                bigCal.year_sel.hide();
                bigCal.month_sel.hide();
                bigCal.holiday_sel.hide();
                $("#js_cal").removeClass("js_calHover");
            });
        });

        $("#cal-popup-new").hover(function(){
            YLMF.cancelDefer("hideCalPanel");
        },function(){
            YLMF.defer("hideCalPanel",function(){
                $("#js_cal").removeClass("js_calHover");
                //$("#cal-popup-new").hide();
                //$("#cal-popup-new").fadeOut();
                bigCal.year_sel.hide();
                bigCal.month_sel.hide();
                bigCal.holiday_sel.hide();
            });
        });
    })();   
})(jQuery);

var format = function (_, B) {
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

var Calendar = (function(){
    /*农历日历*/
    var lunarInfo = [0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63];
    var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
    var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
    var now = new Date();
    var SY = now.getFullYear();
    var SM = now.getMonth();
    var SD = now.getDate();
    var cyclical = function(num){
        return (Gan[num % 10] + Zhi[num % 12])
    }
    var lYearDays = function(y){
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) 
            sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + leapDays(y))
    }
    var leapDays = function(y){
        if (leapMonth(y)) 
            return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        else 
            return (0)
    }
    var leapMonth = function(y){
        return (lunarInfo[y - 1900] & 0xf)
    }
    var monthDays = function(y, m){
        return (lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29
    }
    var Lunar = function(objDate){
        var i, leap = 0, temp = 0;
        var baseDate = new Date(1900, 0, 31);
        var offset = (objDate - baseDate) / 86400000;
        this.dayCyl = offset + 40;
        this.monCyl = 14;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = lYearDays(i);
            offset -= temp;
            this.monCyl += 12
        }
        if (offset < 0) {
            offset += temp;
            i--;
            this.monCyl -= 12
        }
        this.year = i;
        this.yearCyl = i - 1864;
        leap = leapMonth(i);
        this.isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
                --i;
                this.isLeap = true;
                temp = leapDays(this.year)
            }
            else {
                temp = monthDays(this.year, i)
            }
            if (this.isLeap == true && i == (leap + 1)) {
                this.isLeap = false
            }
            offset -= temp;
            if (this.isLeap == false) {
                this.monCyl++
            }
        }
        if (offset == 0 && leap > 0 && i == leap + 1) {
            if (this.isLeap) {
                this.isLeap = false
            }
            else {
                this.isLeap = true;
                --i;
                --this.monCyl
            }
        }
        if (offset < 0) {
            offset += temp;
            --i;
            --this.monCyl
        }
        this.month = i;
        this.day = offset + 1
    }
    
    var cDay = function(m, d){
        var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var nStr2 = ['初', '十', '廿', '卅'];
        var s;
        if (m > 10) {
            s = '十' + nStr1[m - 10]
        }
        else {
            s = nStr1[m]
        }
        if(s=='一'){
            s='正';
        }
        s += '月';
        switch (d) {
            case 10:
                s += '初十';
                break;
            case 20:
                s += '二十';
                break;
            case 30:
                s += '三十';
                break;
            default:
                s += nStr2[Math.floor(d / 10)];
                s += nStr1[parseInt(d % 10)]
        }
        return (s)
    }
    
    var solarDay2 = function(){
        
        var lDObj = new Lunar(new Date(SY, SM, SD));
        var tt = cDay(lDObj.month, lDObj.day);
        return (tt)
    }
    var showToday = function(){
        var weekStr = "日一二三四五六";
        var template = '<a class="le" href="http://tool.114la.com/live/calendar/" rel="nr">#{MM}月#{DD}日</a><a href="http://tool.114la.com/live/calendar/">星期#{week} </a>';
        var day = format(template, {
            YY: SY,
            MM: SM + 1,
            DD: SD,
            week: weekStr.charAt(now.getDay())
        
        });
        return day;
    }
    
    var showdate = function(){
        SD = SD+1;
        var m = SM<9?('0'+(SM+1)):SM+1;
        var d = SD+1<10?('0'+SD):SD;
        return (SY+'-'+m+'-'+d);
    }
    var cncal = function(){
        var cacal = '<a class="le" href="http://tool.114la.com/live/calendar/" rel="nr">农历'+ solarDay2() +'</a><a href="http://tool.114la.com/live/calendar/">宜忌</a>';
        return cacal;
    }
    
    return {
        day: showToday,
        cnday :cncal,
        date:showdate
    }   
})();

if (typeof ($("#js_cal")) !== 'undefined') {
        var str = '<ul class="FL" ><li class="date">' + Calendar.day() + '</li><li class="lcal">' + Calendar.cnday() + '</li></ul>';
        $("#js_cal").html(str);
    }
