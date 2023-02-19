import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import ForgotPWD from "./pages/ForgotPWD";
import Registration from "./pages/Registration";
import RegistrationForm from "./pages/RegistrationForm";
import RegistrationVerification from "./pages/RegistrationVerification";
import MainPage from "./pages/MainPage";
import MyRequests from "./pages/MyRequests";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile"
import MyWorks from "./pages/MyWorks";
import MyCards from "./pages/MyCards";
import EditRequest from "./pages/EditRequest";
  
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