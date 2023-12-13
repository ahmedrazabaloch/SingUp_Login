import {
  GoogleAuthProvider,
  Googleprovider,
  signInWithPopup,
  auth,
} from "../firebase.js";

const googlelogin = () => {
  console.log("connected");
  signInWithPopup(auth, Googleprovider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("errorMessage", errorMessage);
    });
};

const google_login = document
  .getElementById("google_login")
  .addEventListener("click", googlelogin);
