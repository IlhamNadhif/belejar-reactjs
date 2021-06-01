import React, { Component, Fragment, createContext } from "react";
import YouTubeComp from "../pages/YouTubeCompPage/YouTubeCompPage";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import "./Home.css";
import GlobalProvider from "../../context/context";
import Hooks from "../pages/Hooks/Hooks";

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube">YouTube</Link>
            <Link to="/hooks">Hooks</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:postID" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube" component={YouTubeComp} />
          <Route path="/hooks" component={Hooks} />
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
