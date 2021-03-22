import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBupHY7HGTRDl-Q4c--orovYIx6NJuINtU",
  authDomain: "notes-f95da.firebaseapp.com",
  projectId: "notes-f95da",
  storageBucket: "notes-f95da.appspot.com",
  messagingSenderId: "1096600433451",
  appId: "1:1096600433451:web:561df636e3c3f582e94b6e",
  measurementId: "G-QHQ9F1FHRZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const LobginWithGItHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

export const LobginWithFacebook = () => {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();

  return firebase.auth().signInWithPopup(providerFacebook);
};

export const OnAuthStateChange = (onChange) => {
  const normalizedUser = firebase.auth().onAuthStateChanged((user) => {
    onChange(normalizedUser);
  });
};

export const addNote = ({ avatar, content, userID, correo, title }) => {
  console.log("=avatar===============================");
  console.log(avatar);
  console.log("====================================");
  return db.collection("notes").add({
    avatar: avatar,
    content: content,
    userID: userID,
    correo: correo,
    createDate: firebase.firestore.Timestamp.fromDate(new Date()),
    title: title,
  });
};
