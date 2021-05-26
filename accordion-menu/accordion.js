jQuery(function() {
    // アコーディオン
    jQuery('.accordion__head').click(function() {   //accordion__headクラスをクリックしたときに処理が実行
        jQuery(this).next().slideToggle();
        jQuery(this).children('.accordion__icon').toggleClass('is-open');
    });
});