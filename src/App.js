import './App.css';
import { Component } from "react";
import Menu from "./components/Menu/Menu.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import routes from "./routes.js";
class App extends Component {
    render() {
        return (
            <Router>

                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                           
                            {this.showContentMenu(routes)}
                        </div>

                    </div>
                </div>
            </Router>

        );
    }


    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {

            var result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    element={route.main("Duy")}

                />)
            })
        }
        return <Routes>

            {result}



        </Routes>
    }

}

export default App;
