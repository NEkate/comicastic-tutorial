jQuery(function($){
    var tabs = $('#tabs .tab'),
        lis = $('#tabs ul li');

    lis.find('a').click(function(e){
        e.preventDefault();
        lis.removeClass('active').addClass('hide');
        $(this).parent().removeClass('hide').addClass('active');
        tabs.removeClass('active');
        $(this.getAttribute('href')).removeClass('hide').addClass('active');
    });
});