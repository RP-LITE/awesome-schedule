// decode property from jwt-decode a token to get User Info
import decode from "jwt-decode";
import { redirect } from "react-router-dom";

import * as API from './API';

// create a new class to instantiate for a user
class AuthService {
  // get user data
  get profile() {
    return decode(this.token);
  }

  // check if user's logged in
  get loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.token && this.isValid; // handwaiving here
  }

  // check if token is expired
  get isValid() {
    try {
      const decoded = decode(this.token);
      if (decoded.exp >= Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  get token() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token") || {};
  }

  async login(loginDetails) {
    const response = await API.loginUser(loginDetails);
    // Saves user token to localStorage
    localStorage.setItem("id_token", response.token);
    return response;
  }
  
  async signup(signupDetails){
    const response = await API.createUser(signupDetails);
    localStorage.setItem('id_token',response.token);
    return response;
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    return redirect("/");
  }
}

export default new AuthService();
