var carousel = $('.owl-carousel')

carousel.owlCarousel({
        dots:0,
        rewind:1
})

$('.NextBtn').click( function() {carousel.trigger('next.owl.carousel')} )
$('.PrevBtn').click( function() {carousel.trigger('prev.owl.carousel')} )