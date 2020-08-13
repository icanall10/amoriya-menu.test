$(document).ready(function () {

    $('.menu-box a.menu-item').click(function () {
        let $this = $(this);
        let dropdown = $this.next('.dropdown');

        if (dropdown.length > 0) {
            $(this).closest('.item').toggleClass('open');

            return false;
        }
    });


    $(document).click(function (event) {
        let selector = '.menu-box .dropdown';

        var $target = $(event.target);

        if (!$target.closest(selector).length &&
            $(selector).is(":visible")) {
            $(selector).closest('.item').toggleClass('open');
        }
    });

});