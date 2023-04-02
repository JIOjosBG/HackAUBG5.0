import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { getUser } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
const ProfileCard = async (props: any) => {
  const user = props.user;
  const gamesCount = props.gamesCount;

  return (
    <div className="bg-transparent  fixed border-t-4 border-b-4   border border-spacing-x-36   border-orange-100 h-1/2 left-48 top-16  w-full max-w-xs mx-auto rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-4">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://picsum.photos/200/300"
          alt="Profile"
        />
        <div>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">User Points</h3>
        <p className="text-gray-400"> {user?.points ?? 0}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Games Created</h3>
        <p className="text-gray-400">{gamesCount}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
