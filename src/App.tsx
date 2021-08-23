import React, {Suspense} from 'react';
import './App.css';
import 'materialize-css'
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader/Preloader";


const Home = React.lazy(() => import("./pages/Home/Home"))
const Users = React.lazy(() => import("./pages/Users/Users"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))

function App() {
    return (
        <div>
            <Header />
            <Suspense fallback={<Preloader />}>
                <Route path={'/'} exact render={() => <Home />}/>
                <Route path={'/users'}  render={() => <Users />}/>
                <Route path={'/profile/:userId?'} render={() => <Profile />}/>
            </Suspense>
        </div>
    );
}

export default App;
