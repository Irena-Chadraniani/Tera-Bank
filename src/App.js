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
import TeraPay from "./TeraPay";
import InternetBankingi from "./InternetBankingi";
import SamomxmarebloSesxi from "./SamomxmarebloSesxi";
import PlastikuriBaratebi from "./PlastikuriBaratebi";
import Siaxleebi from "./Siaxleebi";
import Footer from "./Footer";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Router>
            <div>
                <ul className="Menu">
                    <li>
                        <Link to="/Home"><img className="file" src={file} /></Link>
                    </li>
                    <li>
                        <Link className="Menu1" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            ჩემთვის</Link>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>სესხები</MenuItem>
                            <MenuItem onClick={handleClose}>ანაბრები</MenuItem>
                            <MenuItem onClick={handleClose}>ბარათები</MenuItem>
                            <MenuItem onClick={handleClose}>ტარიფები</MenuItem>
                            <MenuItem onClick={handleClose}>გზავნილები</MenuItem>
                            <MenuItem onClick={handleClose}>სერვისები</MenuItem>
                        </Menu>
                    </li>
                    <li>
                        <Link className="Menu2" aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick}>ბიზნესისთვის</Link>
                        <Menu
                            id="simple-menu2"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>სესხები</MenuItem>
                            <MenuItem onClick={handleClose}>ანაბრები</MenuItem>
                            <MenuItem onClick={handleClose}>ბარათები</MenuItem>
                            <MenuItem onClick={handleClose}>ტარიფები</MenuItem>
                            <MenuItem onClick={handleClose}>გზავნილები</MenuItem>
                            <MenuItem onClick={handleClose}>სერვისები</MenuItem>

                        </Menu>
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
                    <Route path="/Siaxleebi">
                        <Siaxleebi />
                    </Route>
                    <Route path="/PlastikuriBaratebi">
                        <PlastikuriBaratebi />
                    </Route>
                    <Route path="/InternetBankingi">
                        <InternetBankingi />
                    </Route>
                    <Route path="/TeraPay">
                        <TeraPay />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}


export default App;