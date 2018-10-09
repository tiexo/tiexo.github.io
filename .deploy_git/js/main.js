(function($){
    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

      // Profile card
    var profileElem = $('#profile');
    $(document).on('click', function () {
        profileElem.removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        profileElem.toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    var sidebarElem = $('#sidebar'),
        toTopElem = $('#toTop');

    (function () {
        if (!sidebarElem.length) return;

        checkDisplayToTop();
        $(document).on('scroll', function () {
            checkDisplayToTop();
        });

        toTopElem.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 600);
        });

        var isToTopDisplayed = false;
        function checkDisplayToTop() {
            var toTop = (sidebarElem.height() - $(window).height()) + 60;
            var currentScrollTop = $(document).scrollTop();
            var needDisplay = (currentScrollTop > toTop) && (currentScrollTop > 0);

            if ($(document).width() >= 800) {
                if (needDisplay) {
                    if (isToTopDisplayed) return;
                    toTopElem.fadeIn();
                    toTopElem.css('left', sidebarElem.offset().left);
                    isToTopDisplayed = true;
                } else {
                    if (!isToTopDisplayed) return;
                    toTopElem.fadeOut();
                    isToTopDisplayed = false;
                }
            } else {
                toTopElem.show();
                toTopElem.css('right', 20);
            }
        }
    })();

    // Fixed Profile
    (function () {
        checkFixedProfile();
        $(document).on('scroll', function () {
            checkFixedProfile();
        });

        var isFixedProfile = false;
        function checkFixedProfile() {
            if (!profileElem.is('.profile-fixed')) return;
            if ($(document).width() < 800) return;

            var currentScrollTop = $(document).scrollTop();
            var profileInnerElem = $('#profile .profile-inner');
            var needFixed = currentScrollTop >= profileElem.offset().top + profileElem.outerHeight(true);

            if (needFixed) {
                if (isFixedProfile) return;

                profileInnerElem.css('position', 'fixed')
                    .css('width', profileElem.innerWidth() + 'px')
                    .css('top', '0');

                // css animation fade-in
                profileInnerElem.css('animation', '');
                profileInnerElem.addClass('anim-fade-in');
                isFixedProfile = true;
            } else {
                if (!isFixedProfile) return;

                profileInnerElem.css('position', '')
                    .css('width', '')
                    .css('top', '');

                profileInnerElem.css('animation', 'none');
                isFixedProfile = false;
            }
        }
    })();

})(jQuery);