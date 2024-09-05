"use client"
import React from "react";
import Link from "next/link";
import '../Style/about.css';

const about = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <Link className="routinglink" href={"/"}>Back to Main</Link>
      <Link className="routinglink" href={"/about/aboutclient"}>Go to Client Info</Link>
    </div>
  );
};

export default about;
