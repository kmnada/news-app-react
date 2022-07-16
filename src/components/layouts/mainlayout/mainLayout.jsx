import { Switch, Route } from "react-router-dom"
import Home from "../../home";
import Search from "../../search";

const MainLayout = () => (
        <Switch>
            <Route path ='/home' exact component={Home}/>
            <Route path ='/world' exact component={Home}/>
            <Route path ='/science' exact component={Home}/>
            <Route path ='/search' exact component={Search}/>
        </Switch>
);

export default MainLayout;