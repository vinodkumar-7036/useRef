import React from "react";
import { UserContext } from "./Context";

export function Home() {
  const context = React.useContext(UserContext);
  console.log(":::::::;>", context);
  const logout = (e) => {
    context.userData.logout();
  };
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>UserName</th>
            <th>LastName</th>
          </tr>
          {/* {context.map((data) => {
            return ( */}
          <tr>
            <td>{context.userData.fName}</td>
            <td>{context.userData.lName}</td>
          </tr>
        </table>
      </div>

      <label>User is Logged In as {context.userData.userName}</label>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
