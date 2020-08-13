
$(document).ready(function() {

    $(".send-phone").inputmask("+7 (999) 999-99-99");
    $('.scroll').click( function(){ // РµСЃР»Рё РІ href РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ # РёР»Рё ., С‚Рѕ Р»РѕРІРёРј РєР»РёРє
        var scroll_el = $(this).attr('href'); // РІРѕР·СЊРјРµРј СЃРѕРґРµСЂР¶РёРјРѕРµ Р°С‚СЂРёР±СѓС‚Р° href
        if ($(scroll_el).length != 0) { // РїСЂРѕРІРµСЂРёРј СЃСѓС‰РµСЃС‚РІРѕРІР°РЅРёРµ СЌР»РµРјРµРЅС‚Р° С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ РѕС€РёР±РєРё
            var scroll_el_fix = $(scroll_el).offset().top - 85;
            $('html, body').animate({ scrollTop: scroll_el_fix }, 900); // Р°РЅРёРјРёСЂСѓРµРј СЃРєСЂРѕРѕР»РёРЅРі Рє СЌР»РµРјРµРЅС‚Сѓ scroll_el
        }
        return false; // РІС‹РєР»СЋС‡Р°РµРј СЃС‚Р°РЅРґР°СЂС‚РЅРѕРµ РґРµР№СЃС‚РІРёРµ
    });



    setdispHeight();
    $(window).resize( setdispHeight );

    function setdispHeight() {
        $('#screen-main').css({
            height: $(window).height() + 'px'
        });

    }


    $('.rino-item').hover(function(){
        var rino_item_number = $(this).data('number');
        $('.rp-item').removeClass('active');
        $('.rp-item:nth-child('+rino_item_number+')').addClass('active');
    });

    gender = '';
    city = 'РќРµ РѕРїСЂРµРґРµР»РµРЅ';



    $('.effect-marker, .effect-button').hover(function(){
        $('.effect-marker, .effect-button').removeClass('active');
        em_marker = $(this).data('marker');
        $('.'+em_marker+'').addClass('active');
    });

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            if (key == 'gender'){
                gender = value;
                console.log(gender);
            }
            if (key == 'city'){
                city = value;
                console.log(city);

            }

        });

        return vars;
    }

    getUrlVars()


    if( gender == 'man'){
        $('.women-btn').removeClass('active');
        $('.man-btn').addClass('active');

        $('.women').fadeOut(300);
        $('.man').delay(300).fadeIn(300);
    }

    if( gender == 'woman'){
        $('.man-btn').removeClass('active');
        $('.women-btn').addClass('active');

        $('.man').fadeOut(300);
        $('.women').delay(300).fadeIn(300);
    }

    if( city == 'spb'){
        $('.msk-btn').removeClass('active');
        $('.spb-btn').addClass('active');

        $('.msk').fadeOut(300);
        $('.spb').delay(300).fadeIn(300);

        $(".input-city").val('РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі');
    }

    if( city == 'msk'){
        $('.spb-btn').removeClass('active');
        $('.msk-btn').addClass('active');

        $('.spb').fadeOut(300);
        $('.msk').delay(300).fadeIn(300);

        $(".input-city").val('РњРѕСЃРєРІР°');
    }

    /*======================= SEX-BTN ========================*/

    $('.man-btn').click(function(){
        $('.women-btn').removeClass('active');
        $('.man-btn').addClass('active');

        $('.women').fadeOut(300);
        $('.man').delay(300).fadeIn(300);
    });

    $('.women-btn').click(function(){
        $('.man-btn').removeClass('active');
        $('.women-btn').addClass('active');

        $('.man').fadeOut(300);
        $('.women').delay(300).fadeIn(300);
    });


    $('.msk-btn').click(function(){
        $('.spb-btn').removeClass('active');
        $('.msk-btn').addClass('active');

        $('.spb').fadeOut(300);
        $('.msk').delay(300).fadeIn(300);
    });

    $('.spb-btn').click(function(){
        $('.msk-btn').removeClass('active');
        $('.spb-btn').addClass('active');

        $('.msk').fadeOut(300);
        $('.spb').delay(300).fadeIn(300);
    });


    /*========================= SLIDERS =============================*/
    $('.feed-box').slick({
        autoplay: false,
        infinite: true,
        arrows:true,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]

    });

    $('.rino-slider').slick({
        autoplay: false,
        infinite: false,
        arrows:false,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]

    });


    $('.shema-slider').slick({
        autoplay: false,
        infinite: true,
        arrows:false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $('.cond-slider').slick({
        autoplay: false,
        infinite: true,
        arrows:true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.cert-box').slick({
        autoplay: false,
        infinite: true,
        arrows:true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.result-box').slick({
        autoplay: false,
        infinite: true,
        arrows:true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    /*======================= //SLIDERS =============================*/



    /*============================ VIDEO ===========================*/
    $('.feed-video').click(function(){

        var video = $(this).data('video');

        $('.video-popup').fadeIn(500);

        setTimeout(function() {
            $('#video-box').html('<iframe id="video" src="'+ video +'?autoplay=1&showinfo=0&border=0&rel=0"  frameborder="0" allowfullscreen></iframe>')
        }, 500);

        $('body').css({'overflow':'hidden'});

    });

    var video_open = 0;
    $('#feed-video').click(function(){
        if (video_open == 0){
            var video = $(this).data('video');

            $('.video-popup').fadeIn(500);


            $('body').css({'overflow':'hidden'});

            video_open=1;
        }
        else{
            var video = $(this).data('video');

            $('.video-popup').fadeIn(500);

            setTimeout(function() {
                $('#video-box').html('<iframe id="video" src="'+ video +'?autoplay=1&showinfo=0&border=0&rel=0"  frameborder="0" allowfullscreen></iframe>')
            }, 500);

            $('body').css({'overflow':'hidden'});
        }

    });

    $('.video-popup, .video-close').click(function(){
        $('.video-popup').fadeOut(500);

        setTimeout(function() {
            $('#video-box').html('')
        }, 500);

        $('body').css({'overflow':'auto'});
    });


    /*============================ //VIDEO ===========================*/



    /*================================ POPUPS ==================================*/

    function view_thank(){

        $('.popup').removeClass('popup-active popup-deactive');
        $('.call-popup').removeClass('active');
        $('.price-popup').removeClass('active');

        $('.thank-popup').addClass('active');

        setTimeout(function() {
            $('.popup-box').addClass('active');
            $('.popup-close-area').addClass('active');
            $('body').css({'overflow':'hidden'});
        }, 100);
    }


    function view_call(){

        $('.popup').removeClass('popup-active popup-deactive');
        $('.form-popup').removeClass('active');

        $('.call-popup').addClass('active');

        setTimeout(function() {
            $('.popup-box').addClass('active');
            $('.popup-close-area').addClass('active');
            $('body').css({'overflow':'hidden'});
        }, 100);
    }

    function view_site(){

        $('.popup').removeClass('popup-active popup-deactive active');
        $('.form-popup').removeClass('active');
        $('.site-popup').addClass('active');

        setTimeout(function() {
            $('.popup-box').addClass('active');
            $('.popup-close-area').addClass('active');
            $('body').css({'overflow':'hidden'});
        }, 100);
    }


    function view_price(price_header, price_price){

        $('.price-popup').find('.price-header').text(price_header);
        $('.price-popup').find('.price-price').html(price_price);
        $('.price-popup .tarif').val(price_header);

        $('.popup').removeClass('popup-active popup-deactive active');
        $('.form-popup').removeClass('active');
        $('.price-popup').addClass('active');

        setTimeout(function() {
            $('.popup-box').addClass('active');
            $('.popup-close-area').addClass('active');
            $('body').css({'overflow':'hidden'});
        }, 100);
    }

    function view_conf(){

        $('.popup').removeClass('popup-active popup-deactive active');
        $('.form-popup').removeClass('active');
        $('.conf-popup').addClass('active');

        setTimeout(function() {
            $('.popup-box').addClass('active');
            $('.popup-close-area').addClass('active');
            $('body').css({'overflow':'hidden'});
        }, 100);
    }



    $('.popup-zvonok-close, .popup-close-area').click( function(){ 		close_zvon();    });
    $('.view-call').click( function(){ 		view_call();   	 });
    $('.view-price').click( function(){
        price_header = $(this).parents('.rino-item-fix').find('.ri-header').text();
        price_price = $(this).parents('.rino-item-fix').find('.ri-price-box').html();
        view_price(price_header, price_price);

    });
    $('.conf').click( function(){ 		view_conf();   	 });

    $('.site-popup-button').click( function(){ 		view_site();   	 });

    function close_zvon() {

        $('.popup').addClass('popup-deactive');

        function func() {

            $('.popup').removeClass('popup-active active');
            $('.popup-box').removeClass('active');
            $('body').css({'overflow':'auto'});
            $('.popup-close-area').removeClass('active');

        }		setTimeout(func, 500);
        $('.bg').removeClass('bg-active');

    }



    /*================================ //POPUPS ==================================*/

    /*======================= MENU =========================*/

    $('#m-menu-button').click(function(){
        $('.header-bottom').addClass('active');
    });

    $('.header-bottom .menu-item').not('.has-dropdown').click(function(){
        $('.header-bottom').removeClass('active');
    });

    $('.header-bottom .close-button').click(function(){
        $('.header-bottom').removeClass('active');
    });

    /*======================= //MENU =========================*/

    /*================================ CONFIGURATOR ==================================*/

    $('.cbb-item').click(function(){
        $(this).toggleClass('active');

        if ( $(this).find('.cbb-item-plus').text() == '+'){
            $(this).find('.cbb-item-plus').text('-');
        }
        else{
            $(this).find('.cbb-item-plus').text('+');
        }

        var gc = $(this).data('gc');
        $('#'+gc+'').toggleClass('active');

        var zone = '';

        $('.cbb-item.active').each(function(){

            if (zone == ''){
                zone = $(this).find('.cbb-item-button span').text();
            }
            else{
                zone = zone +', '+ $(this).find('.cbb-item-button span').text();
            }

            console.log(zone);
        });

        $('#ctb-item-text').text(zone);

        if (zone == ''){
            $('#ctb-item-text').text('Р’С‹Р±РµСЂРёС‚Рµ Р’Р°С€Рё РїСЂРѕР±Р»РµРјРЅС‹Рµ Р·РѕРЅС‹');
        }

        $('#form-configurator .tarif').val(zone);
    });

    /*================================ //CONFIGURATOR ==================================*/
    /*================================ FORMS ==================================*/

    /*function validEmailAddress(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }*/

    $('.no-valid').click(function(){
        $(this).removeClass('no-valid');
        alert();
    });




    $(".form").submit(function() {
        if ($('.lead-commets').val){}
        else{
            var lead_price = $('#price-total').text();
            $('.lead-commets').val(lead_price);
        }
        if( $(this).find('.send-name').val().length == 0) {

            $(this).find('.send-name').addClass('no-valid');
            return false;
        }

        else if ($(this).find('[name="DATA[PHONE_WORK]"]').val().replace(/[^0-9]/g, '').length < 10) {

            $(this).find('[name="DATA[PHONE_WORK]"]').addClass('no-valid');
            return false;

        } else {

            view_thank();

            $('#good').removeClass('no-good');

            var form = this;
            $.ajax({
                type: "POST",
                url: "post/send.php",
                data: $(this).serialize()
            }).done(function() {
                $('.send-name, .send-phone, .send-mail,  text, textarea').val('').text('');
                $('.send-phone').removeClass('no-valid');
                yaCounter31602368.reachGoal('send_form');

                window.location = "thankyou.php";

            });

        }

        return false;

    });



    /*
        $(".form").submitwa(function() {


                var form = this;
                $.ajax({
                    type: "POST",
                    url: "post/sendwa.php",
                    data: $(this).serialize()
                }).done(function() {

                                window.location = "https://api.whatsapp.com/send?phone=79853629869";
                });


        });

    */




    $('input').bind('keyup', function () {
        $(this).removeClass('no-valid');
    });



    $('.form').find('[name="DATA[PHONE_WORK]"]').bind('keyup', function () {
        if (this.value.replace(/[^0-9]/g, '').length < 11) {
            $(this).css({
                color: 'red'
            });
        } else {
            $(this).css({
                color: 'green'
            });
        }
    });

    /*$('.form').find('[name="DATA[EMAIL_WORK]"]').bind('keyup', function () {
        if (!validEmailAddress(this.value)) {
            $(this).css({
                color: 'red'
            });
        } else {
            $(this).css({
                color: 'green'
            });
        }
    });*/

    /*================================ //FORMS ==================================*/

});








ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.799561, 37.505333],
        controls: ['zoomControl'],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(new ymaps.Placemark([55.799561, 37.505333], {
            hintContent: 'РљР»РёРЅРёРєР° РІ РњРѕСЃРєРІРµ',
            balloonContent: 'Рі. РњРѕСЃРєРІР°, СѓР». РђР»Р°Р±СЏРЅР°, Рґ.13, Рє.1'
        }, {
            preset: 'islands#icon',
            iconLayout: 'default#image',
            iconImageHref: 'img/screen-cont/marker.png',
            iconImageSize: [77, 114],
            iconImageOffset: [-38, -80]
        }))

        .add(new ymaps.Placemark([59.914666, 30.324264], {
            hintContent: 'РљР»РёРЅРёРєР° РІ РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРіРµ',
            balloonContent: ' Рі. РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі, СѓР». РЎРµСЂРїСѓС…РѕРІСЃРєР°СЏ, Рґ.22'
        }, {
            preset: 'islands#icon',
            iconLayout: 'default#image',
            iconImageHref: 'img/screen-cont/marker.png',
            iconImageSize: [77, 114],
            iconImageOffset: [-38, -80]
        }))

    $('.spb-btn').click(function(){
        myMap.setCenter([59.915061, 30.321058]);
    });

    $('.msk-btn').click(function(){
        myMap.setCenter([55.800024, 37.502119]);
    });


    if( city == 'spb'){
        myMap.setCenter([59.915061, 30.321058]);
    }
    if( city == 'msk'){
        myMap.setCenter([55.800024, 37.502119]);
    }




    /* myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
         hintContent: 'РљРѕРјРЅР°С‚Р° РјР°РЅРёРєСЋСЂР° Princess Room',
         balloonContent: 'СѓР». РљРёСЂРѕРІРѕРіСЂР°РґСЃРєР°СЏ 2, РїРѕРґСЉРµР·Рґ 5, РєРІ.147'
     }, {
         iconLayout: 'default#image',
         iconImageHref: 'img/master/screen-7/marker.png',
         iconImageSize: [62, 90],
         iconImageOffset: [-31, -90]
     });




 myMap.geoObjects.add(myPlacemark);*/

});




$(document).ready(function() {

    /*
        ifBrowser 0.0.3
        a function which returns specified data depending on a user's browser
        written by Plyushch Gregory, 2012
        is free to use for everyone in condition of saving the author's name
    */
    function ifBrowser (obj) {
        var none = obj["none"] || "none";
        function cBrowser() {
            var ua = navigator.userAgent;
            var bName = function () {
                if (ua.search(/MSIE/) > -1) return "ie";
                if (ua.search(/Firefox/) > -1) return "firefox";
                if (ua.search(/Opera/) > -1) return "opera";
                if (ua.search(/Chrome/) > -1) return "chrome";
                if (ua.search(/Safari/) > -1) return "safari";
                if (ua.search(/Konqueror/) > -1) return "konqueror";
                if (ua.search(/Iceweasel/) > -1) return "iceweasel";
                if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();
            var version = function (bName) {
                switch (bName) {
                    case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
                    case "firefox" : return ua.split("Firefox/")[1];break;
                    case "opera" : return ua.split("Version/")[1];break;
                    case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
                    case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
                    case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
                    case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
                    case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
                }}(bName);
            return [bName,bName + version.split(".")[0],bName + version];
        }
        var current_browser = cBrowser();
        for (var key in obj) {
            var trg = key.toLowerCase();
            if (trg.indexOf(current_browser[2]) > -1) return obj[key];
            else if (trg.indexOf(current_browser[1]) > -1) return obj[key];
            else {
                var nsymbol = trg.charAt(trg.indexOf(current_browser[0])+current_browser[0].length);
                if (trg.indexOf(current_browser[0]) > -1 && (nsymbol == " " || nsymbol == "")) return obj[key];
            };
        }
        return none;
    }

    var golden = ifBrowser({
        "ie":"no-golden",
        "chrome":"golden-ok",
        "safari":"no-golden",
        "firefox":"no-golden",
        "opera":"golden-ok",

    }) // РѕРїСЂРµРґРµР»СЏРµРј РЅР°Р·РІР°РЅРёРµ РЅСѓР¶РЅРѕРіРѕ РЅР°Рј css СЃРІРѕР№СЃС‚РІР°
    $('.s1c-ooo-name, .gold, .s5-col-header').addClass(golden);
});
