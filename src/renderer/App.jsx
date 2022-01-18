import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import PrivateRoute from 'hocs/PrivateRoute';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Playground from 'screens/common/Answer/child-screens/Playground';
import Login from './screen-wrappers/Login';
import Student from './screen-wrappers/Student';
import Answer from './screens/common/Answer';
import Logout from './screens/public/Logout';
import './scss/App.global.scss';

const App = () => (
  <HashRouter>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <React.Suspense fallback={() => <div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />

          <PrivateRoute
            path="/logout"
            render={(props) => <Logout {...props} />}
          />

          <PrivateRoute
            name="Answer"
            path="/student/answer/:taskId/question/:questionNumber"
            render={(props) => <Answer isPractice={false} {...props} />}
          />

          <PrivateRoute
            name="Review"
            path="/student/review/:taskId/question/:questionNumber"
            render={(props) => <Answer isPractice {...props} />}
          />

          <PrivateRoute
            name="Playground"
            path="/playground"
            render={(props) => (
              <>
                <Playground {...props} />
              </>
            )}
          />

          <PrivateRoute
            path="/student"
            render={(props) => <Student {...props} />}
          />
        </Switch>
      </React.Suspense>
    </MuiPickersUtilsProvider>
  </HashRouter>
);

export default App;
