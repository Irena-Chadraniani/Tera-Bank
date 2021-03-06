import samomsxmareblosesxi from './photos/samomsxmareblosesxi.png';
import './SamomxmarebloSesxi.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"
import online from './photos/online.png';
import operatori from './photos/operatori.png';
import filiali from './photos/filiali.png';

export default function SamomxmarebloSesxi() {

    return (
        <div className="samsesxi">
            <img className="samomsxmareblosesxi" src={samomsxmareblosesxi} />
            <h2 className="text">სწრაფი დახმარება ფინანსური სახლისგან!</h2>
            <div className="text1">
                <p>რასაც ისურვებ, შენი გახდება - ზღაპრულ დაპირებას  ჰგავს, მაგრამ რეალობაა. მხოლოდ ერთხელ გამოთქვი სურვილი ტერაბანკში და ნებისმიერი ნივთი, რომელიც მოგეწონება, შენი გახდება. საოცნებო მოგზაურობასაც დავაფინანსებთ. </p>
                <p>დაგეხმარები  იმ შემთხვევაშიც, თუ სამკურნალოდ გჭირდება თანხა შენთვის ან ნებისმიერი ახლობლისთვის.</p>
                <p>შენი ქონება ჩვენთვის მხოლოდ დამატებითი საშუალებაა, რომ უფრო დიდი მიზნის მიღწევაში დაგეხმაროთ. გამოიყენე უკვე არსებული ქონება იმისთვის, რომ უფრო მეტი მოიპოვო და ისარგებლე უზრუნველყოფილი სამომხმარებლო სესხით.</p></div>

            <h2 className="text">პროდუქტის აღწერა და პირობები</h2>
            <div className="text2">
                <h3 className="text3">სესხის ოდენობა</h3>
                <p className="text4">მინიმალური - 1,000 ლარი*</p>
                <p className="text4">მაქსიმალური - ინდივიდუალურად</p>

                <h3 className="text3">სესხის ვადა</h3>
                <p className="text4">მინიმალური - 3 თვე</p>
                <p className="text4">მაქსიმალური - 120 თვე</p>

                <h3 className="text3">სესხის ვალუტა</h3>
                <p className="text4">ლარი, აშშ დოლარი, ევრო</p>

                <h3 className="text3">ეფექტური საპროცენტო განაკვეთი</h3>
                <p className="text4">ლარი - 17,60%დან</p>
                <p className="text4">აშშ დოლარი - 10,35%დან</p>

                <h3 className="text3">სესხის დაფარვის პირობა</h3>
                <p className="text4">ყოველთვიური თანაბარი გადახდები</p>

                <h3 className="text3">სესხის უზრუნველყოფა</h3>
                <p className="text4">უძრავი ან მოძრავი ქონება (ავტომანქანა)</p>
            </div>
<div className="links">
    <ul className="Menu">
        <li><Link className="operatori">შეავსე ონლაინ</Link></li>
        <li><Link className="operatori">დაიხმარე ოპერატორი</Link></li>
        <li><Link className="operatori">ეწვიე ფილიალს</Link></li>
</ul>
</div>
<div></div>

<div className="links">
    <ul className="Menu">
        <li><img className="images" src={online} /></li>
        <li><img className="images"  src={operatori} /></li>
        <li><img className="images" src={filiali} /></li>
</ul>
</div>
        </div>


    )
}