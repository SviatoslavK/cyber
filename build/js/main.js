/*
 * Third party
 */
// ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
$(function() {
    
    // Scroll to anchor
    $(".navbar__list").on("click", "a", function (event) {
          event.preventDefault();
          var id = $(this).attr('href'),
               top = $(id).offset().top;
          $('body,html').animate({
               scrollTop: top
          }, 1000);
     });

    // Modal request
    $('.navbar__button--text').on('click', function(e) {
        e.preventDefault();
        $('.modal__request').css({'display':'block'})
         $('.overlay').css({'display':'block'})
    });
    $('#modal-req-btn').on('click', function(e) {
        e.preventDefault();
        $('.modal__request').css({'display':'none'})
        $('.modal__thank').css({'display':'block'})
        //  $('.overlay').css({'display':'block'})
    });
    $('.overlay').on('click', function(e) {
        e.preventDefault();
        $('.modal__request').css({'display':'none'})
        $('.modal__thank').css({'display':'none'})
        $('.overlay').css({'display':'none'})
    });


    // Tabs Strategy 
    $('.strategy__link').on('click', function(e) {
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

});