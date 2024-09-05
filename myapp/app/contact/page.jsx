"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../Style/contact.css";
const contact = () => {
  const router = useRouter();

  let index = 0;
  const courseidarr = ["MongoDB", "ExpressJS", "Node.js", "ReactJS", "NextJS"];

  return (
    <div>
      <h1>This is Contact Page</h1>
      <Link href={"/"}>Back to Main</Link>
      <div className="course-list">
        {courseidarr &&
          courseidarr.map((value, index) => {
            return (
              <Link href={`/contact/${value}`}>
                <ul key={index}>{value}</ul>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default contact;

// <Link href={`/contact/${courseidarr[index++]}`}>
//           //   {" "}
//           //   <li>MongoDB </li>{" "}
//           // </Link>
// <Link href={`/contact/${courseidarr[index++]}`}>
//   <li>ExpressJS</li>
// </Link>
// <Link href={`/contact/${courseidarr[index++]}`}>
//   <li>Node.js</li>
// </Link>
// <Link href={`/contact/${courseidarr[index++]}`}>
//   <li>ReactJS</li>
// </Link>
// <Link href={`/contact/${courseidarr[index++]}`}>
//   <li>Next.js</li>
// </Link>
