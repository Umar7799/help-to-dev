import './App.css';
import Profile from './ProfileFolder/Profile'
import Front from './components/Front';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import fileToSignUp from './signupANDlogin/fileToSignUp';
import fileToSignIn from './signupANDlogin/fileToSignIn';
import AskQuestion from './QuestionFiles/AskQuestion';
import { InfoProvider } from './Contexts/QuestionContext';
import QuestionPage from './QuestionFiles/QuestionPage';
import Saved from './ProfileFolder/Savings/Saved';




function App() {

  return (
    <>
      <div>

        <InfoProvider>
          <Switch>
            <Route exact path='/' component={Front} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/fileToSignUp' component={fileToSignUp} />
            <Route exact path='/fileToSignIn' component={fileToSignIn} />
            <Route exact path='/AskQuestion' component={AskQuestion} />
            <Route exact path='/QuestionPage' component={QuestionPage} />
            <Route exact path='/saved' component={Saved} />
          </Switch>
        </InfoProvider>

      </div>
    </>
  );
}


export default App;
