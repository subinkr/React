import React, { useState } from "react";
import Header from "./Header";

function Index(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signIn = () => {
    setIsLoggedIn(true);
  }
  const signOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Header isLoggedIn = {isLoggedIn} onSignIn = {signIn} onSignOut = {signOut}/>
    </div>
  );
}

export default Index;