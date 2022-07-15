import { Switch, Route } from "react-router-dom"
import Home from "../../home";

const MainLayout = () => (
        <Switch>
            <Route path ='/home' exact component={Home}/>
            <Route path ='/world' exact component={Home}/>
            <Route path ='/science' exact component={Home}/>
        </Switch>
);

export default MainLayout;