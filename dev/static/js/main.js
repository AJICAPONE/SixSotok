$(document).ready(function ($) {

    // $(".slider").not('.slick-initialized').slick();

    $('[data-fancybox="gallery"]').fancybox({
        closeExisting: true,
        thumbs : {
            autoStart : true,

        },
        buttons: [
            "zoom",
            // "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $('.zoompleFixed').zoomple({
        offset : {x:10,y:0},
        showOverlay : true ,
        roundedCorners: false,
        blankURL : 'static/img/general/blank.png',
        loaderURL : 'static/img/general/loading.gif',
        windowPosition : {x:'right',y:'top'},
        zoomWidth : 360,
        zoomHeight : 376,
        attachWindowToMouse : false,
        showCursor: false
    });


    $("#phone-popup").mask("+7(000) 000-00-00");
    $(".mask-field").mask("+7(000) 000-00-00");
    $('.mask-field-date').mask('00.00.0000');


    // Открыть - закрыть droplist каталог в сайдбаре
    $('.catalog-main').click(function () {
        $('.catalog-main--items').slideToggle(350).toggleClass('catalog-main--items--active')
    });

    // Закрыть по выпадающий список еще в навигационной панели и перевернуть стрелку
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".nav__menu--item__more").length) {
            $('.nav__menu--item').find('.nav__menu--item__more .icon-arrow-catalog').removeClass('hover-rotate');
            $('.nav__menu--item__more--list').removeClass('nav__menu--more');

        }
        e.stopPropagation();
    });


    // Quantity в архиве товара
    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    // Добавить в избранное архиве товара
    $('.best-product--shop-attr .shop--favourite').on('click', function () {
        $(this).toggleClass('add-to-favourite');
    });
    // Ограничение кол-ва символов в новостях сайдбара
    var myInt = $('.sidebar-news-int--item__text');
    myInt.text(myInt.text().substring(0, 70) + '...');


    $(".delivery-ways--num").each(function(i){
         $(this).prepend((i + 1));
    });

    $(".delivery-ways--num2").each(function(i){
        $(this).prepend((i + 1));
    });

    $(".delivery-ways--num3").each(function(i){
        $(this).prepend((i + 1));
    });

    $(".popup-product-one-click--item__text").each(function(i){
        $(this).prepend((i + 1) + ". ");
    });

    // Popup корзина добавляем нумерацию
    $(".popup-basket--item__link").each(function(i){
        $(this).prepend((i + 1) + ". ");
    });
    // Показать еще в навигационной панели
    $('.nav__menu--item__more').on('click',function () {
       $(this).find('.icon-arrow-catalog').toggleClass('hover-rotate');
       $('.nav__menu--item__more--list').toggleClass('nav__menu--more')

    });
    // Выпадающие разделы фильра
    $('.filter--price').on('click',function () {
        $(this).parent().find('.filter-price--wrap').slideToggle(200);
        $(this).parent().find('.filter--price .icon-arrow-catalog').toggleClass('hover-rotate');
    });
    // Выбор атрибутов в фильтре
    $('.filter-type__input-touch').on('click',function () {
        $(this).toggleClass('checked');
        var $listSort = $(this);
        if ($listSort.parent().find('.filter-type__input').attr('checked')) {
            $listSort.parent().find('.filter-type__input').removeAttr('checked');
        } else {
            $listSort.parent().find('.filter-type__input').attr('checked', 'checked');
        }

    });

    $('.my-adress--checkbox-list-field').on('click',function () {
        $(this).toggleClass('checked');
        var $listSort2 = $(this);
        if ($listSort2.parent().find('.my-adress--checkbox-list-check').attr('checked')) {
            $listSort2.parent().find('.my-adress--checkbox-list-check').removeAttr('checked');
        } else {
            $listSort2.parent().find('.my-adress--checkbox-list-check').attr('checked', 'checked');
        }

    });

    //function for radio buttons
    function addCheckAttribute(){
        let val = 0;
        $("input[name='radio-price']").click(function(){
            let prevVal = val;
            val = $("input[name='radio-price']:checked").val();
            if ( val !== prevVal) {
                $(this).attr('checked', true);
                $(`input[value=${prevVal}]`).attr('checked', false);
            }
        });
    };
    $(document).ready(function() {
        addCheckAttribute();
    });



    $(document).on('click','.sort-view__item',function () {
        var catView = $(this).data('catalog-view');
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
        $('.best-product-wrap').removeClass().addClass('best-product-wrap best-product-wrap--'+catView);
    });

    //*============================ Табы товар===================*//
    // TABS

    $('.tab-list__item').click(function () {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-content .' + tabName).addClass('active').siblings().removeClass('active');
    });

    $('.my-profile-item').click(function () {
        var tabName = $(this).attr('profile-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-content--my-profile .' + tabName).addClass('active').siblings().removeClass('active');
    });

    $('.my-profile-item2').click(function () {
        var tabName = $(this).attr('profile_tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-content--my-profile .' + tabName).addClass('active').siblings().removeClass('active');
    });

    $('.checkout-form-tabs--item').click(function () {
        var tabName = $(this).attr('data-checkout');
        $(this).addClass('active').siblings().removeClass('active');
        $('.content-checkout-tabs .' + tabName).addClass('active').siblings().removeClass('active');
    });


    $(function () {

        $("#rateYo,#rateYo3,#rateYo4").rateYo({

            "rating" : 5,
            "ratedFill": "#FF4141",
            "starWidth": "18px",
            "readOnly": true,
            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>'
        });
    });

    $(function () {

        $("#rateYo2").rateYo({

            "rating" : 4.5,
            "ratedFill": "#FF4141",
            "starWidth": "18px",
            "readOnly": true,
            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>'
        });
    });

    $(function () {

        $("#rateYo5").rateYo({

            "rating" : 3.5,
            "ratedFill": "#FF4141",
            "starWidth": "33px",
            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>'
        });
    });

    $('.partner-register-button').click(function () {
       $('.partner-register--wrap').slideToggle(150);
    });

    $('.my-order-all-orders').click(function () {
        $('.my-order-items-show-all').slideToggle(150);
    });

    $('.my-address-button-add').click(function () {
        $('.my-address__change').fadeOut(0);
        $('.my-address__change--save').fadeIn(0);
    });

    $('.my-address-save-changes').click(function () {
        $('.my-address__change--save').fadeOut(0);
        $('.my-address__change').fadeIn(0);
    });


    $('.all-stocks-button-all-green').click(function () {
        $('.all-stock-content--item-ajax-load').slideToggle(150);
    });

    // Mobile Catalog
    $('.catalog-sandwich').click(function () {
        $('.mobile-sandwich-catalog').fadeIn(200);
        $('.index-page,.common-page').css('overflow','hidden')

    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.mobile-sandwich-catalog').fadeOut(150);
        $('.index-page,.common-page').css('overflow','scroll')
    });

    // Mobile Menu
    $('.mobile-sandwich,.mobile-header-menu').click(function () {
        $('.mobile-sandwich-menu').fadeIn(200);
        $('.index-page,.common-page').css('overflow','hidden')

    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.mobile-sandwich-menu').fadeOut(150);
        $('.index-page,.common-page').css('overflow','scroll')
    });

    // Mobile filter
    $('.mobile-catalog__filter').click(function () {
        $('.popup-filter-catalog').fadeIn(200);
        $('.index-page,.common-page').css('overflow','hidden')

    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.popup-filter-catalog').fadeOut(150);
        $('.index-page,.common-page').css('overflow','scroll')
    });

    // Mobile sort
    $('.mobile-catalog__sort').click(function () {
        $('.sort-catalog-popup--wrap').fadeIn(200);
        $('.index-page,.common-page').css('overflow','hidden')

    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.sort-catalog-popup--wrap').fadeOut(150);
        $('.index-page,.common-page').css('overflow','scroll')
    });


    // Mobile buy 1 click
    $('.product-card--info--buy-one-click').click(function () {
        $('.product-popup-by-one-click').fadeIn(200);
        // $('.index-page,.common-page').css('overflow','hidden')

    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.product-popup-by-one-click').fadeOut(150);
        // $('.index-page,.common-page').css('overflow','scroll')
    });


    // Mobile search
    $('.mobile-header-search').click(function () {
        $('.mobile-search-input--wrap').addClass('search-active')
    });


    // BASKET бонусные баллы
    $('.basket-bonus-hidden__button').click(function () {
       $('.basket-bonus-hidden').css('display', 'none');
       $('.basket-bonus').fadeIn(0);
    });


    // Basket attention
    $('.basket-content-items__name--desc .basket-attention-wrap').click(function () {
        $('.basket-attention-popup').fadeIn(150);
    });

    $('.mobile-catalog-close--icon').click(function () {
        $('.basket-attention-popup').fadeOut(150);
    });


    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".mobile-search-input--wrap"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('search-active'); // скрываем его
        }
    });


    $(document).ready(function () {
        var preloader    = $('#cube-loader'), // селектор прелоадера
            imagesCount  = $('img').length, // количество изображений
            dBody        = $('body'), //обращаемся к body
            percent      = 100 / imagesCount, // количество % на одну картинку
            progress     = 0, // точка отсчета
            imgSum       = 5, // количество картинок
            loadedImg    = 0; // счетчик загрузки картинок

        if (imagesCount >= imgSum && imagesCount > 0) {
            dBody.css('overflow', 'hidden');


            for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
                var img_copy        = new Image();
                img_copy.src        = document.images[i].src;
                img_copy.onload     = img_load;
                img_copy.onerror    = img_load;
            }

            function img_load () {
                progress += percent;
                loadedImg++;
                if (progress >= 100 || loadedImg == imagesCount) {
                    preloader.delay(350).fadeOut('slow');
                    dBody.css('overflow', '');
                }
                $(".dws-progress-bar").circularProgress('animate', progress, 350);
            }
        } else {
            preloader.remove();
        }

    });


    $('.checkout-pickup-item__input__check').on('click',function () {
        $('.checkout-pickup-item__input__check').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $choise = $(this);
        $('.checkout-pickup-item__input').removeAttr('data-pickup','checked');
        $choise.parent().find('.checkout-pickup-item__input').attr('data-pickup','checked');
    });

    $('.checkout-way-pay-check').on('click',function () {
        $('.checkout-way-pay-check').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $pay = $(this);
        $('.checkout-way-pay-input').removeAttr('data-pay','checked');
        $pay.parent().find('.checkout-way-pay-input').attr('data-pay','checked');
    });



    // $('.mobile-basket-info-summ--input').datepicker({
    //     language: "ru"
    // });

    $('.checkout-time-delivery input').datepicker({
        language: "ru"
    });


});




// когда страница загрузится
$(document).ready(function(){
    // скрываем все подуровни


    $('.catalog-main--items li ul').hide();


    $('.catalog-main').click(function () {
        $(this).find('.icon-arrow-catalog').toggleClass('hover-rotate');
    });

    $('.catalog-main--item').on('click',function () {
        $(this).next().slideToggle(200);
        $(this).find('.icon-arrow-catalog').toggleClass('hover-rotate');
    });

    $('. q__title').on('click',function () {
        $(this).next().slideToggle(200);
        $(this).find('.icon-arrow-catalog').toggleClass('hover-rotate2');
    });

    $('.catalog-main--item--level3__title').on('click',function () {
        $(this).next().slideToggle(200);
        $(this).find('.icon-arrow-catalog').toggleClass('hover-rotate');
    });


    $('.catalog-main--item--wrap').click('next', function () {
        $(this).prevAll().children('.catalog-main--item--level2').slideUp(200);
        $(this).prevAll().find('.icon-arrow-catalog').removeClass('hover-rotate')

    });

    $('.catalog-main--item--wrap').click('prev', function () {
        $(this).nextAll().children('.catalog-main--item--level2').slideUp(200);
        $(this).nextAll().find('.icon-arrow-catalog').removeClass('hover-rotate')
    });


    $('.catalog-main--item--level3').click('next', function () {
        $(this).prevAll().children('.catalog-main--item--level4').slideUp(200);
        $(this).prevAll().find('.icon-arrow-catalog').removeClass('hover-rotate')

    });

    $('.catalog-main--item--level3').click('prev', function () {
        $(this).nextAll().children('.catalog-main--item--level4').slideUp(200);
        $(this).nextAll().find('.icon-arrow-catalog').removeClass('hover-rotate')
    });




});


// Popup корзина
$(document).ready(function(){
    $('.basket-attr').hoverIntent({
        over: function () {
            $('.popup-basket-wrap').fadeIn(250, function () {
                $(this).addClass('active-ajax').next('.popup-basket-wrap');
            });
            $('.basket-attr').mouseleave(function () {
                $('.popup-basket-wrap').fadeOut(250, function () {
                    $(this).removeClass('active-ajax').children('.popup-basket-wrap')
                });
            });
        },
        out: function () {

        }
    });

});
// Range Slider в фильтре товаров
$(document).ready(function () {
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;

    }

    $('#filter-slider,#filter-slider-popup').slider({
        animate: true,
        range: true,
        min: 100,
        max: 9000,
        values: [ 1200, 7800 ],
        slide: function(event, ui) {

            $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
            $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
            $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
            // $('#filter-dot-slide1').val(ui.values[0]);
            // $('#filter-dot-slide2').val(ui.values[1]);
            $('#hidden1,#hidden-popup1').val(ui.values[0]);
            $('#hidden2,#hidden-popup2').val(ui.values[1]);


        },
    });

    $("input.sliders-filters").change(function() {
        var $this = $(this);
        $("#filter-slider,#filter-slider-popup").slider("values", $this.data("index"), $this.val());
    });

    var min = $("#filter-slider,#filter-slider-popup").slider( "option", "min" );
    var max = $("#filter-slider,#filter-slider-popup").slider( "option", "max" );
    $(".min-values").text(min);
    $(".max-values").text(max);


    // Бонусный баланс
    $('#basket-bonus-js').slider({
        animate: true,
        range: "min",
        min: 0,
        max: 198,
        value: 0,
        slide: function(event, ui) {
            $("#basket-min").html(ui.value);
            $("#basket-bonus").val(ui.value);

        }
    });
    $("input.basket-input-bonus").change(function() {
        var $this2 = $(this);
        $("#basket-bonus-js").slider("value", $this2.val());
        $("#basket-min").text($( "#basket-bonus-js" ).slider( "value" ));

    });

    $("#basket-bonus").val($("#basket-bonus-js").slider( "value" ));

    var $handler = $("#basket-bonus-js .ui-slider-handle");
    $handler.append("<span id='basket-min'>"+($( "#basket-bonus-js" ).slider( "value" )) +"</span>");

});







// SELECT
// SELECT

// SELECT OPTIONS
(function ( $ ) {
    var elActive = '';
    $.fn.selectCF2 = function( options ) {

        // option
        var settings = $.extend({

            change: function( ){ }, // event change
        }, options );

        return this.each(function(){

            var selectParent = $(this);
            list = [],
                html = '';


            $(selectParent).hide();
            if( $(selectParent).children('option').length == 0 ){ return; }
            $(selectParent).children('option').each(function(){
                if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                list.push({
                    value: $(this).attr('value'),
                    text: $(this).text(),
                    selected: s,
                })
            });

            // style

            html += "<ul class='selectCF selectCF2'>";
            html += 	"<li class='select select2'>";
            html +=         "<div class='titleCF select-input2'>"+title+"</div>";
            html += 		"<div class='append-icon2'><svg class='icon icon-arrow-catalog'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-catalog'></use></svg></div>";
            html += 		"<ul class='select-options'>";
            $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";});
            html += 		"</ul>";
            html += 	"</li>";
            html += "</ul>";

            $(selectParent).after(html);
            var customSelect = $(this).next('ul.selectCF'); // add Html
            var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
            var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
            var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


            // $('.selectCF').click(function () {
            //     $('.selectCF').find('.select-options').hide();
            //     $(this).find('.select-options').slideDown(100);
            //
            //
            // });
            // handle active select
            $(customSelect).unbind('click').bind('click',function(e){
                e.stopPropagation();
                if($(this).hasClass('onCF')){
                    elActive = '';
                    $(this).removeClass('onCF');
                    $(this).children().find('.icon-arrow-catalog').removeClass('arrow-rotate2');
                    $(this).removeClass('searchActive'); $(seachElInput).val('');
                    $(seachElOption).show();
                }else{
                    if(elActive != ''){
                        $(elActive).removeClass('onCF');
                        $(elActive).children().find('.icon-arrow-catalog').removeClass('arrow-rotate2');
                        $(seachElOption).show();
                    }
                    elActive = $(this);
                    $(this).addClass('onCF');
                    $(this).children().find('.icon-arrow-catalog').addClass('arrow-rotate2');
                    $(seachEl).children('input').focus();
                }
            });

            // handle choose option
            var optionSelect = $(customSelect).children('li').children('ul').children('li');
            $(optionSelect).bind('click', function(e){
                var value = $(this).attr('value');
                if( $(this).hasClass('selected') ){
                    //
                }else{
                    $(optionSelect).removeClass('selected');
                    $(this).addClass('selected');
                    $(customSelect).children('li').children('.titleCF').html($(this).html());
                    $(selectParent).val(value);
                    settings.change.call(selectParent); // call event change
                }
            });

            // handle search
            $(seachEl).children('input').bind('keyup', function(e){
                var value = $(this).val();
                if( value ){
                    $(customSelect).addClass('searchActive');
                    $(seachElOption).each(function(){
                        if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                            // not item
                            $(this).fadeOut();
                        }else{
                            // have item
                            $(this).fadeIn();
                        }
                    })
                }else{
                    $(customSelect).removeClass('searchActive');
                    $(seachElOption).fadeIn();
                }
            })

        });
    };
    $(document).click(function(){
        if(elActive != ''){
            $(elActive).removeClass('onCF');
            $(elActive).children().find('.icon-arrow-catalog').removeClass('arrow-rotate2');
        }
    })
}( jQuery ));

$(function(){
    $( ".test2" ).selectCF2({
        color: "#FFF",
        backgroundColor: "#663052",
    });
});






// SELECT OPTIONS
(function ( $ ) {
    var elActive = '';
    $.fn.selectCF = function( options ) {

        // option
        var settings = $.extend({

            change: function( ){ }, // event change
        }, options );

        return this.each(function(){

            var selectParent = $(this);
            list = [],
                html = '';


            $(selectParent).hide();
            if( $(selectParent).children('option').length == 0 ){ return; }
            $(selectParent).children('option').each(function(){
                if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                list.push({
                    value: $(this).attr('value'),
                    text: $(this).text(),
                    selected: s,
                })
            });

            // style

            html += "<ul class='selectCF'>";
            html += 	"<li class='select'>";
            html +=         "<div class='titleCF select-input'>"+title+"</div>";
            html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-down'></use></svg></div>";
            html += 		"<ul class='select-options'>";
            $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";});
            html += 		"</ul>";
            html += 	"</li>";
            html += "</ul>";

            $(selectParent).after(html);
            var customSelect = $(this).next('ul.selectCF'); // add Html
            var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
            var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
            var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


            // $('.selectCF').click(function () {
            //     $('.selectCF').find('.select-options').hide();
            //     $(this).find('.select-options').slideDown(100);
            //
            //
            // });
            // handle active select
            $(customSelect).unbind('click').bind('click',function(e){
                e.stopPropagation();
                if($(this).hasClass('onCF')){
                    elActive = '';
                    $(this).removeClass('onCF');
                    $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                    $(this).removeClass('searchActive'); $(seachElInput).val('');
                    $(seachElOption).show();
                }else{
                    if(elActive != ''){
                        $(elActive).removeClass('onCF');
                        $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(seachElOption).show();
                    }
                    elActive = $(this);
                    $(this).addClass('onCF');
                    $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                    $(seachEl).children('input').focus();
                }
            });

            // handle choose option
            var optionSelect = $(customSelect).children('li').children('ul').children('li');
            $(optionSelect).bind('click', function(e){
                var value = $(this).attr('value');
                if( $(this).hasClass('selected') ){
                    //
                }else{
                    $(optionSelect).removeClass('selected');
                    $(this).addClass('selected');
                    $(customSelect).children('li').children('.titleCF').html($(this).html());
                    $(selectParent).val(value);
                    settings.change.call(selectParent); // call event change
                }
            });

            // handle search
            $(seachEl).children('input').bind('keyup', function(e){
                var value = $(this).val();
                if( value ){
                    $(customSelect).addClass('searchActive');
                    $(seachElOption).each(function(){
                        if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                            // not item
                            $(this).fadeOut();
                        }else{
                            // have item
                            $(this).fadeIn();
                        }
                    })
                }else{
                    $(customSelect).removeClass('searchActive');
                    $(seachElOption).fadeIn();
                }
            })

        });
    };
    $(document).click(function(){
        if(elActive != ''){
            $(elActive).removeClass('onCF');
            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
        }
    })
}( jQuery ));

$(function(){
    $( ".test" ).selectCF({
        color: "#FFF",
        backgroundColor: "#663052",
    });
});






