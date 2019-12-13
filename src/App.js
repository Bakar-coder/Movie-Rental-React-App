import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layouts/layout";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/404";
const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/register" component={RegisterPage} />
        <Route exact path="/users/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
