$(document).ready(function () {
    $(function () {
        var gotoTop = new GotoTop('.go')
        gotoTop.addGotoTop();
    });
});
function GotoTop(goBtn) {
    var topHeight = 800,
        mWindow = $(window);
    this.goBtn = $(goBtn);
    function bind(goBtn) {
        goBtn.on("click", function () {
            gotoTop();
        })
    }
    function gotoTop() {
        $('html , body').animate({ scrollTop: 0 }, 'slow');
    }
    function checkTop() {
        if (mWindow.scrollTop() > topHeight) {
            return true;
        } else {
            return false;
        }
    }
    this.addGotoTop = function () {
        bind(this.goBtn);
        var that = this;
        mWindow.scroll(function () {
            if (!checkTop()) {
                that.goBtn.addClass("go-top");
            } else {
                that.goBtn.removeClass("go-top");
            }
        })
    }
}
