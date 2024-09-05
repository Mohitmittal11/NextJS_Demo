"use client";
import React from "react";
const page = ({ params: { coursename } }) => {
  //   const router = useRouter();
  //   const queryData = router.query?.coursename;
  console.log("Query Data is ", coursename);
  return (
    <div>
      <h1>Course Details</h1>
      <h2>Course Name is: {coursename}</h2>
    </div>
  );
};
export default page;
