import instagram from './photos/instagram.png';
import twitter from './photos/twitter.png';
import youtube from './photos/youtube.png';
import facebook from './photos/facebook.png';
import FooterLogo from './photos/FooterLogo.png';

export default function Footer() {
    return (
        <div>
            <div className="mobilurii">
                <div className="footer">
                </div>
                <img className="footerLogo" src={FooterLogo} />
                <div><img className="facebook" src={facebook} /></div>
                <div><img className="twitter" src={twitter} /></div>
                <div><img className="youtube" src={youtube} /></div>
                <div><img className="instagram" src={instagram} /></div>
            </div>
            <div className="aboutus">ჩვენს შესახებ</div>
            <div className="aboutus1">
                საკონტაქტო ინფორმაცია
<p> ჩვენი გუნდი</p>
                <p>ტერაბანკის ისტორია</p></div>

            <div className="rules">წესები და პირობები</div>
            <div className="rules1">
                კონფიდენციალურობის დაცვა
<p>ცვლილებები</p>
                <p>შეზღუდვები</p>
                <p>დავების გადაწყვეტა</p>
                <p>ვებ-გვერდის წესები და პირობები</p></div>

            <div className="terabank">ტერაბანკი</div>
            <div className="terabank1">
                ვაკანსიები
<p>ფილიალების ქსელი</p>
                <p>შეგვაფასეთ</p>
                <p>კიბერუსაფრთხოება</p>
                <p>ხელშეკრულებები</p></div>

        </div>
    )
}