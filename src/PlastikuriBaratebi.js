import Mastercard from './photos/Mastercard.png';
import Visaclassic from './photos/Visaclassic.png';
import Gold from './photos/Gold.png';
import Platinum from './photos/Platinum.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"
import { useEffect, useState } from "react";
import kursi1 from './photos/kursi1.png';
import kursi2 from './photos/kursi2.png';
import './PlastikuriBaratebi.css';

export default function PlastikuriBaratebi() {
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
        <div>
            <div className="links"></div>
            <p className="title">მასტერქარდ სტანდარტი</p>
            <div className="kk"><img className="Mastercard" src={Mastercard} />
            <div className="platinum">
                მასტერქარდ სტანდარტი საშუალებას გაძლევთ, გამოიყენოთ თქვენს საბარათე ანგარიშზე არსებული თანხები, როგორც საქართველოში, ასევე მსოფლიოს ნებისმიერ ქვეყანაში. განახორციელოთ უფასო ანგარიშსწორება სავაჭრო და მომსახურების ობიექტებში.
                <ul>
                    <li>განაღდების მაღალი ლიმიტები</li>
                    <li>შეუზღუდავი ონლაინ გადახდები</li>
                    <li>SMS შეტყობინებები ბარათზე განხორციელებული ტრანზაქციების შესახებ</li>
                    <li>ტერაბანკის ბარათების მფლობელთათვის თანხის გადარიცხვის შესაძლებლობა ტერაბანკის ნებისმიერ ბარათზე, ბანკომატის საშუალებით</li>
                </ul>
            </div>
            </div>

            <div className="links"></div>

            <p className="title22">ვიზა კლასიკი</p>
            <div className="kk">
            <div className="platinum">
                <p>ვიზა კლასიკი საშუალებას გაძლევთ, გამოიყენოთ თქვენს საბარათე ანგარიშზე არსებული თანხები, როგორც საქართველოში, ასევე მსოფლიოს ნებისმიერ ქვეყანაში. განახორციელოთ უფასო ანგარიშსწორება სავაჭრო და მომსახურების ობიექტებში..</p>
                <ul>
                    <li>განაღდებისა და ანგარიშსწორების მაღალი ლიმიტი</li>
                    <li>SMS შეტყობინებები ბარათზე განხორციელებული ტრანზაქციების შესახებ</li>
                    <li>ტერაბანკის ბარათების მფლობელთათვის თანხის გადარიცხვის შესაძლებლობა ტერაბანკის ნებისმიერ ბარათზე, ბანკომატის საშუალებით</li>
                    <li>საბარათე ოპერაციების უსაფრთხოების სერვისი.</li>
                </ul>
            </div>
            <img className="Visaclassic" src={Visaclassic} />
            </div>

            <div className="links2"></div>

            <p className="title">მასტერქარდ გოლდი და პლატინიუმი</p>
            <div className="kk">
                <img className="Gold" src={Gold} />
                <img className="Gold" src={Platinum} />
            </div>
            <div className="platinum2">
                <p>მასტერქარდ გოლდი საშუალებას გაძლევთ, მსოფლიოს ნებისმიერ წერტილში მიიღოთ VIP მომსახურება და ფასდაკლებები სხვადასხვა სავაჭრო თუ მომსახურების ობიექტში.</p>
                <ul>
                    <li>განაღდებისა და ანგარიშსწორების მაღალი ლიმიტი</li>
                    <li>SMS შეტყობინებები ბარათზე განხორციელებული ტრანზაქციების შესახებ</li>
                    <li>ტერაბანკის ბარათების მფლობელთათვის თანხის გადარიცხვის შესაძლებლობა ტერაბანკის ნებისმიერ ბარათზე, ბანკომატის საშუალებით</li>
                    <li>საბარათე ოპერაციების უსაფრთხოების სერვისი.</li>
                </ul>
            </div>

            {/* საუკეთესო კურსი */}
            <div className="div"><Link className="title"><h2 className="title">საუკეთესო კურსი</h2></Link> </div>
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
            <div className="links2"></div>

        </div>
    )
}