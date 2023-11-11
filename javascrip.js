$(document).ready(function() {
    $('.card__social a').css({
        'color': 'white',
        'padding': '25px 20px',
        'font-size': '20px',
        'transition': '0.5s',
    }).hover(
        function() {
            $(this).css('color', '#f2726a');
        },
        function() {
            $(this).css('color', '#fff'); 
        }
    );
    $('.card_img').css({
        'height': '120px',
        'width': '120px',
        'border': '4px solid var(--primary-color)',
        'border-radius': '50%',
        'overflow': 'hidden',
        'margin': '0 auto',
        'margin-top':'20px',
        'transition': '0.5s',
    }).hover(
        function(){
            $(this).css(
                {
                    'width': '100%',
                    'height':'100%',
                    'border-radius': 'unset',
                    'margin-top': '0px',
                    'border':'unset',
                }
            )
        },
        function() {
            $(this).css(
                {
                    'height': '120px',
                    'width': '120px',
                    'border': '4px solid var(--primary-color)',
                    'border-radius': '50%',
                    'overflow': 'hidden',
                    'margin': '0 auto',
                    'margin-top':'20px',
                    'transition': '0.5s',
                }
            ); 
        }
    )
});

