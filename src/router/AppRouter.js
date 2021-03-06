import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';


const AppRouter = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage/>
    </Route>
  </Switch>
);

export default AppRouter;