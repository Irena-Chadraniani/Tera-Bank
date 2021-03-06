import './App.css';
import './Home.css';
import './Home.css';
import './News.css';
import axios from 'axios';
import file from './photos/file.png';
import search from './photos/search.png';
import contact from './photos/contact.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"
import Home from "./Home";
import Chemtvis from "./Chemtvis";
import Biznesistvis from "./Biznesistvis";
import TeraPay from "./TeraPay";
import InternetBankingi from "./InternetBankingi";
import SamomxmarebloSesxi from "./SamomxmarebloSesxi";
import Footer from "./Footer";


function App() {
    return (
        <Router>
            <div>
                <ul className="Menu">
                    <li>
                        <Link to="/Home"><img className="file" src={file} /></Link>
                    </li>
                    <li>
                        <Link className="Menu1" to="/Chemtvis">ჩემთვის</Link>
                    </li>
                    <li>
                        <Link className="Menu2" to="/Biznesistvis">ბიზნესისთვის</Link>
                    </li>
                    <li>
                        <Link className="Rectangle-71" to="/TeraPay">ტერაPay</Link>
                    </li>
                    <li>
                        <Link className="Rectangle-70" to="/InternetBankingi">ინტერნეტბანკინგი</Link>
                    </li>
                    <li>
                        <Link to="/Search"><img className="search" src={search} /></Link>
                    </li>
                    <li>
                        <Link to="/Contact"><img className="search" src={contact} /></Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/SamomxmarebloSesxi">
                        <SamomxmarebloSesxi />
                    </Route>
                    <Route path="/InternetBankingi">
                        <InternetBankingi />
                    </Route>
                    <Route path="/TeraPay">
                        <TeraPay />
                    </Route>
                    <Route path="/Biznesistvis">
                        <Biznesistvis />
                    </Route>
                    <Route path="/Chemtvis">
                        <Chemtvis />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
<Footer/>
            </div>
        </Router>
    );
}


export default App;