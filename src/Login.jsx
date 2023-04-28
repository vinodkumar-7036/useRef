import React, { useState } from "react";
import { Home } from "../src/Home";
import { UserContext } from "./Context";

function Login() {
  let userNameInput = React.createRef();
  const initUser = {
    isLoggedIn: false,
    userName: null,
    lName: null,
    fName: null,
  };
  const [user, setUser] = useState(initUser);
  const [userData, setUserData] = useState([]);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const login = () => {
    setUser({
      isLoggedIn: true,
      userName: userNameInput.current.value,
      fName: fName,
      lName: lName,
      logout: logout,
    });
    setUserData([...userData, user]);
  };
  const logout = () => {
    console.log(":::::hsdfhksdfhsk");
    setUser({
      isLoggedIn: false,
    });
  };
  return (
    <div>
      {!user.isLoggedIn && (
        <div className="container">
          <label>UserName:</label>
          <input type="text" ref={userNameInput} />
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="enter first name"
              name="fistname"
              onChange={(e) => setFname(e.target.value)}
              // onChange={(event) =>
              //   dispatch({ type: "INTIALIZED", name: event.target.value })
              // }
            />
          </div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="enter first name"
              name="fistname"
              onChange={(e) => setLname(e.target.value)}
              // onChange={(event) =>
              //   dispatch({ type: "INTIALIZED", name: event.target.value })
              // }
            />
          </div>
          <div>
            <button onClick={login}>Login</button>
          </div>
        </div>
      )}

      <UserContext.Provider value={{ userData: userData }}>
        {user.isLoggedIn && <Home />}
      </UserContext.Provider>
    </div>
  );
}
export default Login;
