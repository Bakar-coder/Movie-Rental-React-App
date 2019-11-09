import React from "react";
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layouts/layout";
import Home from "./pages/Home";
const App = () => {
  return (
      <Layout>
      <ToastContainer />
        <Switch>
          <Route  exact  path='/'  component={Home}/>
        </Switch>
      </Layout>
  );
};

export default App;
