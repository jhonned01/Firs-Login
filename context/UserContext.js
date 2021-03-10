import { Children, createContext, useState } from "react";

const initialState = {};
const UserContext = createContext(initialState);
const { Provider, Consumer } = UserContext;

function UserProvider({ children }) {
  const [User, setUser] = useState(null);

  const Login = (User) => {
    setUser(User);
    const credential = User.credential;
    const token = credential.accessToken;
    console.log("2===================================");
    console.log(User);
    console.log("====================================");
  };

  return <Provider value={{ Login, User }}>{children}</Provider>;
}
export { UserContext, UserProvider };
