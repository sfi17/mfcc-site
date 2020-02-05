$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });