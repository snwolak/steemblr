import defaultApp from "../environment";
import "firebase/auth";
import { getLoggedProfile } from "actions/stateActions";
import store from "../store";
const firebaseAuth = async () => {
  defaultApp
    .auth()
    .signInWithCustomToken(localStorage.getItem("googleToken"))
    .catch(function(error) {});
  await defaultApp.auth().onAuthStateChanged(user => {
    if (user) {
      return store.dispatch(getLoggedProfile(user));
    } else {
      // No user is signed in.
    }
  });
};

export default firebaseAuth;
