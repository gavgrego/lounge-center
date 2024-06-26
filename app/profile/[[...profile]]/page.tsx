import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import Settings from "./settings";
import ManageAccount from "./manage-account";

const ProfilePage = async () => {
  const queryClient = new QueryClient();
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  await queryClient.prefetchQuery({
    queryKey: ["getSettings"],
    // queryFn: getSettings,
  });

  return (
    // this page will contain the user's profile information
    //
    // The user can select which cards they have that might provide lounge access (plat, cap1, chase, priority pass, etc)
    // The user can link their pro account to discord
    // The user can change email, password, etc

    // Ideally, this will be done w/ server actions or API routes via checks, toggles, etc
    <div>
      <h1>Profile</h1>
      <p>
        Adjust your personal profile by setting what cards and programs you
        have, making finding accessible lounges a breeze.
      </p>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Settings />
      </HydrationBoundary>

      <ManageAccount />
    </div>
  );
};

export default ProfilePage;
