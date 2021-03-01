import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const LoginWithGItHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};
