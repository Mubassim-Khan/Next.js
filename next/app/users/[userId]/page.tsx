// This component is going to fetch data in parallel as mentioned in docs.
// The name of folder, is same as props we are going to pass i.e: userId

import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetaData({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  // If user.name is not recieved (This is Metadata for Not Found page) 
  if (!user.name){
    return {
      title: 'User not Found!'
    }
  }

  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  // We didn't use await keyowrd because we want to start requesting both at same time parallely, without creating a waterfall.
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  // It will resolve in parallel
  //   const [user, userPosts] = await Promise.all([userData, userPostData]);

  // The above method is also good, but for creating a suspense we are displaying user data first, by resolving promise and then send the promise of userPost to UserPosts component in order for suspense the post data
  const user = await userData;

  // In tutorial it was !user.name, but was recieving error of cnnot read properties of undefined 'name'.
  if (!user) return notFound()

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading... Please wait</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}

// Here we are creating dynamic parameters which tells Next.js in advance what the posssible parameters could be, which turns our SSR pages to recommended SSG pages.

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData; 

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
