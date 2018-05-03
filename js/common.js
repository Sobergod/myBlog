$(document).ready(function(){
    $(function() {
        GoTop.init(".go").addGotoTop();
    });
});

var GoTop = {
    goBtn:null,
    topHeight: 800,
    mWindow:$(window),
    init:function(config) {
        this.goBtn = $(config);
        this.bind();
        return this;
    },

    bind:function() {
        var self = this;
        this.goBtn.on("click",function() {
            self.gotoTop();
        })
    },

    gotoTop: function() {
        $('html , body').animate({scrollTop: 0},'slow');
    },

    checkTop:function() {
        if(this.mWindow.scrollTop() > this.topHeight) {
            return true;
        } else {
            return false;
        }
    },

    addGotoTop:function() {
        var self = this;
        this.mWindow.scroll(function() {
            if(self.checkTop()) {
                self.goBtn.addClass("goto-top");
            } else {
                self.goBtn.removeClass("goto-top");
            }
        });
    },
}