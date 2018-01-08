;(function(){
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
    
    
    
    var jd_sel = new Selecter("#JD_Grade_Til","#JD_Grade_Selector","#JD_Grade_input");
    
    
})();