import "./App.css";
import { Footer, Nav } from "./components";
import {Home,Visit,AboutUs,Donation,FoodBank,Event} from "./Routes";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/visit"  component={Visit} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/donation" exact component={Donation} />
        <Route path="/food-bank" exact component={FoodBank} />
        <Route path="/event" exact component={Event} />
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
