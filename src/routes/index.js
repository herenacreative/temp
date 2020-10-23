import {React, BrowserRouter as Router, Switch, Route} from 'libraries'
import { Home } from 'pages'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </>
    )
}


export default Routes