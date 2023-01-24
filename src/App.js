import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Home from "./components/Home";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import ForgotPWD from "./components/ForgotPWD";
import Registration from "./components/Registration";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationVerification from "./components/RegistrationVerification";
import MainPage from "./components/MainPage";
import MyRequests from "./components/MyRequests";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile"
import MyWorks from "./components/MyWorks";
import MyCards from "./components/MyCards";
import EditRequest from "./components/EditRequest";
  
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/forgotpwd" component={ForgotPWD} />
          <Route path="/registration" component={Registration} />
          <Route path="/regform" component={RegistrationForm} />
          <Route path="/regverification" component={RegistrationVerification} />
          <Route path="/main" component={MainPage} />
          <Route path="/myrequests" component={MyRequests} />
          <Route path="/profile" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/myworks" component={MyWorks} />
          <Route path="/cards" component={MyCards} />
          <Route path="/editrequest" component={EditRequest} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;