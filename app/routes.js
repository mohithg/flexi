import {Route} from 'react-router-dom';
import Flexi from './flexi/index';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Flexi} />
  </React.Fragment>
);

export default Routes;
