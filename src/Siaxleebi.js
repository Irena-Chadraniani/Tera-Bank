import news1 from './photos/news1.png';
import news2 from './photos/news2.png';
import news3 from './photos/news3.png';
import news4 from './photos/news4.png';
import './Siaxleebi.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Swiper from 'swiper';
import { useEffect, useState } from "react";



export default function Siaxleebi() {
    SwiperCore.use([Navigation, Pagination]);

    const [News1, setNews1] = useState("");


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
            activeIndexChange: function () {
                switch (swiper.activeIndex) {
                    case 0: setNews1("ტერაბანკი ახალ საზაფხულო ამპანიას „მივდივართ საქართველოში“ იწყებს და ამ ინიციატივით შიდა ტურიზმის მხარდაჭერას კვლავაც აგრძელებს");
                        return
                    case 1: setNews1("1ტერაბანკი ახალ საზაფხულო ამპანიას „მივდივართ საქართველოში“ იწყებს და ამ ინიციატივით შიდა ტურიზმის მხარდაჭერას კვლავაც აგრძელებს");
                        return
                    case 2: setNews1("2ტერაბანკი ახალ საზაფხულო ამპანიას „მივდივართ საქართველოში“ იწყებს და ამ ინიციატივით შიდა ტურიზმის მხარდაჭერას კვლავაც აგრძელებს");
                        return
                    case 3: setNews1("3ტერაბანკი ახალ საზაფხულო ამპანიას „მივდივართ საქართველოში“ იწყებს და ამ ინიციატივით შიდა ტურიზმის მხარდაჭერას კვლავაც აგრძელებს");
                }
            }
        }
    });

    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }

    return (
        <div>
            <div className="links"></div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src={news1} /></div>
                    <div class="swiper-slide"><img src={news2} /></div>
                    <div class="swiper-slide"><img src={news3} /></div>
                    <div class="swiper-slide"><img src={news4} /></div>


                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

            <div>{News1}</div>

        </div>
    )
}