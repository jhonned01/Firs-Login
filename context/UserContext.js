import { Children, createContext, useState } from "react";

const initialState = {};
const UserContext = createContext(initialState);
const { Provider } = UserContext;

function UserProvider({ children }) {
  const [User, setUser] = useState(null);
  const [UserCredential, setUserCredential] = useState(null);

  const Login = (User) => {
    const credential = User.credential;
    setUser(User);
    const UserInto = User.user;
    setUserCredential(UserInto);
    console.log("2c===================================");
    console.log(UserInto);
    console.log("====================================");
  };

  return (
    <Provider value={{ Login, User, UserCredential }}>{children}</Provider>
  );
}
export { UserContext, UserProvider };
