"use client";
import * as React from "react";
import Image from "next/image";

const HomeIcon = () => (
  <>
    <Image
      src="/home.png"
      height={30}
      width={30}
      alt="Logo Bikes"
      className="left-12"
    />
  </>
);

export default HomeIcon;
