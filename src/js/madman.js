/**
 * Created by Madman on 17-5-16.
 */
const md = {
    version : '0.1',
    alertDialog:function () {
        //console.log($event)
        $('body').append(`<div class="md-dialog">
           <div class="dialog-title">
                测试头
           </div>
           <div class="dialog-content">
               内容
           </div>
           <div class="dialog-button">
                <span>确定</span>
           </div>
        </div>`);
        this.shadow();
        this.dialogResize();
        return function () {
            
        }
    },
    dialogResize:function () {
        let dialog = $('.md-dialog');
        let width = $(window).width();
        let height = $(window).height();
        let dialogLeft = (width - dialog.width()) / 2;
        let dialogTop = (height - dialog.height()) / 2;
        dialog.css({'left': dialogLeft, 'top': dialogTop,'display': 'block','transform':'scale(1)','opacity':1});
    },
    shadow:function () {
        $('body').append(`<div class="md-shadow"></div>`)
    }
};
$(window).resize(function() {
    md.dialogResize();
});