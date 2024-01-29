import { Suspense } from "react";
import { Metadata } from "next";
import { ProfileSettings } from "@/components/auth/user-profile";

export const metadata: Metadata = {
  title: "User Settings",
};

export default async function Page() {
  return (
    <>
      <div className='divide-y-secondary flex flex-col gap-16 px-4 md:gap-24 md:px-6'>
        <div className='flex animate-in flex-col gap-8'>
          <h2 className='text-3xl font-bold text-primary'>Profile Settings</h2>
          <p className='text-lg text-secondary'>
            Change your profile settings and information.
          </p>
        </div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <ProfileSettings />
        </div>
      </div>
    </>
  );
}
