import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"
import './Home.css';
import 'swiper/swiper-bundle.css';
import slide1 from './photos/slide1.png';
import slide2 from './photos/slide2.png';
import sesxi1 from './photos/sesxi1.png';
import sesxi2 from './photos/sesxi2.png';
import barati1 from './photos/barati1.png';
import barati2 from './photos/barati2.png';
import news1 from './photos/news1.png';
import news2 from './photos/news2.png';
import news3 from './photos/news3.png';
import news4 from './photos/news4.png';
import kursi1 from './photos/kursi1.png';
import kursi2 from './photos/kursi2.png';
import GooglePlay from './photos/GooglePlay.png';
import MobileApp from './photos/MobileApp.png';
import samomsxmareblosesxi from './photos/samomsxmareblosesxi.png';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default function Home() {
    const [Yidva1, setYidva1] = useState("");
    const [Yidva2, setYidva2] = useState("");
    const [Gayidva1, setGayidva1] = useState("");
    const [Gayidva2, setGayidva2] = useState("");

    function activatekurs(e) {
        switch (e.currentTarget.textContent) {
            case "USD":
                setYidva1("3,31")
                setGayidva1("3,32");
                return
            case "EUR":
                setYidva1("3,95")
                setGayidva1("3,98");
                return
            case "GBP":
                setYidva1("4,51")
                setGayidva1("4,67");
                return
            case "RUR":
                setYidva1("0,04")
                setGayidva1("0,05")
        }

    }

    function activatekurs2(e) {
        switch (e.currentTarget.textContent) {
            case "USD":
                setYidva2("3,31")
                setGayidva2("3,32");
                return
            case "EUR":
                setYidva2("3,95")
                setGayidva2("3,98");
                return
            case "GBP":
                setYidva2("4,51")
                setGayidva2("4,67");
                return
            case "RUR":
                setYidva2("0,04")
                setGayidva2("0,05")
        }

    }

    return (
        // სლაიდერი
        <div>
            <Swiper
                className="swiper-container"
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                <SwiperSlide><img className="swiper-container" src={slide1} /></SwiperSlide>
                <SwiperSlide><img className="swiper-container" src={slide2} /></SwiperSlide>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>


            {/* იპოთეკური სესხები */}

            <div className="div"><Link className="title">იპოთეკური სესხები</Link></div>
            <div className="div2"><Link className="title2">იხილეთ ყველა</Link></div>


            <div className="sesxi">
                <Link><img className="sesxi1" src={sesxi1} /></Link>
                <div className="title3"><h2>შეიძინე ბინა ისარგებლე სუბსიდიით</h2></div>
            </div>


            <div className="sesxi">
                <Link><img className="sesxi2" src={sesxi2} /></Link>
                <div className="title4"><h2>იპოთეკური სესხი 12%-დან</h2></div>
            </div>



            {/* პლასტიკური ბარათები */}
            <div className="div"><Link to="/PlastikuriBaratebi" className="title">პლასტიკური ბარათები</Link> </div>
            <div className="div2"> <Link className="title2">იხილეთ ყველა</Link> </div>

            <div className="sesxi">
                <Link><img className="sesxi1" src={barati2} /></Link>
                <div className="title5"><h2>უნივერსალური ბარათი ყველა შემთხვევისთვის</h2></div>
            </div>

            <div className="sesxi">
                <Link><img className="sesxi2" src={barati1} /></Link>
                <div className="title6"><h2>ვიზა ბარათები გახდი სოლიდური</h2></div>
            </div>



            {/* სიახლეები */}

            <div className="div"><Link className="title" to="/Siaxleebi">სიახლეები</Link></div>
            <div className="div2"> <Link to="/Siaxleebi" className="title2">იხილეთ ყველა</Link> </div>

            <div className="news1">
                <div className="news">
                    <Link><img className="new" src={news1} /></Link>
                    <h2 className="news3">3 აგვისტო, 2020</h2>
                    <h4 className="news2">მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად</h4>
                </div>

                <div className="news">
                    <Link><img className="new" src={news2} /></Link>
                    <h2 className="news3">2 აგვისტო, 2020</h2>
                    <h4 className="news2">ტერა ბოტინი ვერცხლის პრიზიორია - ინოვაციური ბოტის კამპანიამ საერთაშორისო ჯილდო მიიღო</h4>
                </div>

                <div className="news">
                    <Link><img className="new" src={news3} /></Link>
                    <h2 className="news3">27 ივლისი, 2020</h2>
                    <h4 className="news2">სუბსიდირებული იპოთეკური კრედიტების მხარდაჭერის სახელმწიფო პროგრამა</h4>
                </div>

                <div className="news">
                    <Link><img className="new" src={news4} /></Link>
                    <h2 className="news3">20 ივლისი, 2020</h2>
                    <div className="news2"><h4 className="news2">ტერაბანკის ინიციატივა ბიზნესკლიენტების მხარდასაჭერად</h4></div>
                </div>
            </div>


            {/* საუკეთესო კურსი */}
            <div className="div"><Link className="title">საუკეთესო კურსი</Link> </div>
            <div>
                <div className="kursi11">
                    <div className="speckursi">ტერაბანკი(სპეც კურსი)</div>
                    <Link className="speckursi1" onClick={activatekurs}>USD</Link>
                    <Link className="speckursi2" onClick={activatekurs}>EUR</Link>
                    <Link className="speckursi2" onClick={activatekurs}>GBP</Link>
                    <Link className="speckursi2" onClick={activatekurs}>RUR</Link>
                    <div><img className="kursi1" src={kursi1} /></div>
                    <div className="yidva">ყიდვა</div>
                    <div className="gayidva">გაყიდვა</div>
                    <div className="usakurs1" >{Yidva1}</div>
                    <div className="usakurs2">{Gayidva1}</div>
                </div>


                <div className="kursi22">
                    <div className="speckursi">ტერაბანკი(სპეც კურსი)</div>
                    <Link className="speckursi1" onClick={activatekurs2}>USD</Link>
                    <Link className="speckursi2" onClick={activatekurs2}>EUR</Link>
                    <Link className="speckursi2" onClick={activatekurs2}>GBP</Link>
                    <Link className="speckursi2" onClick={activatekurs2}>RUR</Link>
                    <div className="yidva2">ყიდვა</div>
                    <div className="gayidva2">გაყიდვა</div>
                    <div className="evrokurs1">{Yidva2}</div>
                    <div className="evrokurs2">{Gayidva2}</div>
                    <div><img className="kursi1" src={kursi2} /></div>

                </div>
            </div>


            {/* სამომსხმარებლო სესხი */}
            <div className="div"><Link to="/SamomxmarebloSesxi" className="title">სამომხმარებლო სესხი</Link> </div>
            <div className="samsesxi">
                <img className="samomsxmareblosesxi" src={samomsxmareblosesxi} />
                <div className="samomxmareblo"><h2>აიღე სამომხმარებლო სესხი მარტივად</h2></div>
            </div>


            {/* ჩვენი მობილური აპლიკაცია */}
            <div><h2 className="mobiluri">ჩვენი მობილური აპლიკაცია</h2> </div>
            <div className="mobilurii">
                <div className="mobiluri2"> </div>
                <div className="mobiluri3">ულტრათანამედროვე დიზაინით შექმნილი,
                თქვენზე მორგებული და მინიმალისტური
                მობილური აპლიკაცია, რომლითაც
უკმაყოფილო ვერ დარჩებით.</div>
                <img className="GooglePlay" src={GooglePlay} />
                <img className="MobileApp" src={MobileApp} />
            </div>


        </div>
    )
}

