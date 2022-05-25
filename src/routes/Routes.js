import React from 'react'
import { Router, Scene, Stack } from "react-native-router-flux";
import LoginScreen from "../views/loginScreen";
import Home from "../views/Home";

const Routes = () => (
  <Router>
    <Stack key = "root">
      <Scene key = "home" component = {Home} title = "Home" initial = {true} />
      <Scene key = "login" component = {LoginScreen} title = "Login" />
    </Stack>
  </Router>
)
export default Routes;
