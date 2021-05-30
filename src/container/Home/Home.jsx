import React, { Component, Fragment } from "react";
import YouTubeComp from "../pages/YouTubeCompPage/YouTubeCompPage";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    /* setTimeout(() => {
      this.setState({
        showComponent: false,
      });
    }, 4000); */
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube">YouTube</Link>
          </div>
          {/* <Switch>
            <Route path="/" exact>
              <BlogPost />
            </Route>
            <Route path="/detail-post/:id">
              <DetailPost />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/lifecycle">
              <LifeCycleComp />
            </Route>
            <Route path="/youtube">
              <YouTubeComp />
            </Route>
          </Switch> */}
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:postID" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube" component={YouTubeComp} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
