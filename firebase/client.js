import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTZ2Ps-WAoomtIk1r0kFcZEt7D1BBo5ZU",
  authDomain: "proyecto1-e3611.firebaseapp.com",
  projectId: "proyecto1-e3611",
  storageBucket: "proyecto1-e3611.appspot.com",
  messagingSenderId: "965010311294",
  appId: "1:965010311294:web:d67abc38109cbc4052b02f",
  measurementId: "G-NDZVVGRXCQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const LobginWithGItHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

export const LobginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
