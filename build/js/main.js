/*
 * Third party
 */
// ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
$(function () {

    // Scroll to anchor
    $(".navbar__list").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    // Modal request
    $('.navbar__button--text').on('click', function (e) {
        e.preventDefault();
        $('.modal__request').css({
            'display': 'block'
        });
        $('.overlay').css({
            'display': 'block'
        });
    });
    $('#modal-req-btn').on('click', function (e) {
        e.preventDefault();
        $('.modal__request').css({
            'display': 'none'
        });
        $('.modal__thank').css({
                'display': 'block'
            });
            //  $('.overlay').css({'display':'block'})
    });
    $('.overlay').add('.modal__close').on('click', function (e) {
        e.preventDefault();
        $('.modal__request').css({
            'display': 'none'
        });
        $('.modal__thank').css({
            'display': 'none'
        });
        $('.overlay').css({
            'display': 'none'
        });
    });


    // Tabs Strategy 
    $('.strategy__link').on('click', function (e) {
        e.preventDefault();

        var item = $(this).closest('.strategy__item'),
            content = $('.strategy__text--inner'),
            itemPosition = item.index(),
            video = $('.strategy__board'),
            videoNumber = video.index();

        content.eq(itemPosition)
            .addClass('active__text')
            .siblings()
            .removeClass('active__text');

        item.addClass('active__tab')
            .siblings()
            .removeClass('active__tab');

        video.eq(itemPosition)
            .addClass('active__video')
            .siblings()
            .removeClass('active__video');

    });
    
    
    if ( navigator.userAgent.match(/iPad/i) != null) ) {
        $('.strategy__img').css({'display': 'inline-block'});
        console.log('!!!');
    }
    // Accordion 
//    $('.strategy__accordion').add('.strategy__arrow').on('click', function (e) {
//        e.preventDefault();
//
//        var $this = $(this),
//            item = $this.closest('.strategy__item'),
//            list = $this.closest('.strategy__list--small'),
//            items = list.find('.strategy__item'),
//            arrow = item.find('.strategy__arrow'),
//            otherArrow = list.find('.strategy__arrow'),
//            content = item.find('.accordion__inner'),
//            otherContent = list.find('.accordion__inner'),
//            duration = 300;
//
//        if (!item.hasClass('active__accordion')) {
//            items.removeClass('active__accordion');
//            item.addClass('active__accordion');
//            otherContent.stop(true, true).slideUp(duration);
//            content.stop(true, true).slideDown(duration);
//            otherArrow.css({
//                'transform': 'rotate(0deg)'
//            });
//            arrow.css({
//                'transform': 'rotate(90deg)'
//            });
//        } else {
//            content.stop(true, true).slideUp(duration);
//            item.removeClass('active__accordion');
//            arrow.css({
//                'transform': 'rotate(0deg)'
//            });
//        }
//
//    });

});