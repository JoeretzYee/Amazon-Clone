import "./App.css";
import db from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

import { auth } from "./firebase";
import { useEffect } from "react";

// import useStateValue from data layer
import { useStateValue } from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log("The user is : ", authUser);
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                console.log("There is no login user");
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
