import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './SliderCard.module.css'

function SliderCard() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={css.wrapper}>
            <Slider {...settings}>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/yhd/hyk/osw/ifw0p4waaeehzmemrvbmi6r/custom_cover/logo-350x440.jpg?v=1675843653%22)" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/bxf/kx6/38c/zx16c7xyxdhfclxtezpxzrr/custom_cover/logo-350x440.jpg?v=1676026860" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/a1m/6fm/f6k/0jqhrleogoqn5twqow7afg3/custom_cover/logo-350x440.jpg?v=1675356813" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/vxp/0op/pyj/eaxaldsys3rwssa6qptgw1x/custom_cover/logo-350x440.jpg?v=1675357131" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/v5h/bqf/nlf/h4xvpnpeqwqziv4zxll1kmj/custom_cover/logo-350x440.jpg?v=1675357139" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/2yt/hge/s5e/0psdbtctopuph5my38jknyb/custom_cover/logo-350x440.jpg?v=1668483834" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/kn1/ft6/all/5b9m2lrxqdk5anqjr3ylbmt/custom_cover/logo-350x440.jpg?v=1675357152" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/gio/mne/xuf/o3vbldczhdx4dwames9uaaf/custom_cover/logo-350x440.jpg?v=1675357161" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/vvj/0ui/9hq/h1c6cadsdmtdipbifbwysi5/custom_cover/logo-350x440.jpg?v=1675357189" alt="" />
                </div>
                <div className={css.card}>
                    <img src="https://cdn.inappstory.com/story/hhw/zfr/uns/gpzzgbvlijh7nqzog0wohzr/custom_cover/logo-350x440.jpg?v=1675357199" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderCard