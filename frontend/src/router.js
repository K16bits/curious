import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './pages/Home';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="" exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;