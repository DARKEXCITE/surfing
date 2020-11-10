jQuery(document).ready(function ($) {
    // OwlCarousel Слайдер в шапке
    const headerSlider = $('#headerSlider');

    headerSlider.on('initialized.owl.carousel initialize.owl.carousel', event => {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });

    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 1500
    });

    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    })

    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    })

    headerSlider.on('changed.owl.carousel', event => {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });

    // OwlCarousel Слайдер с бордами
    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        dots: false,
        smartSpeed: 1500,
        margin: 2,
        loop: true,
        responsive: {
            0 : {
                items: 1
            },

            1334 : {
                items: 3
            }
        }
    });

    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    })

    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })

    // Скрипты
    const links = document.querySelectorAll('a');

    for (const link of links) {
        link.addEventListener('click', event => {
            event.preventDefault();
        });
    }
});