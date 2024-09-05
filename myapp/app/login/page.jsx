"use client";
import React from "react";
import { useRouter } from "next/navigation";
const login = () => {
  const router = useRouter();
  const redirectToMain = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>This is Login Page</h1>
      <button style={{ cursor: "pointer" }} onClick={redirectToMain}>
        Back to Main
      </button>
    </div>
  );
};

export default login;


    //   <GoogleLogin
    //     clientId={clientId}
    //     buttonText="Login With Google"
    //     onSuccess={onSuccess}
    //     onFailure={onFailure}
    //     cookiePolicy={"single_host_origin"}
    //     isSignedIn={true}
    //   />

// <button
// style={{ cursor: "pointer", marginTop: "120px" }}
// onClick={() => alert("This is onclick Event")}
// >
// Click Me
// </button>// "use client";

