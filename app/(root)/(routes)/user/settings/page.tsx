import { Suspense } from "react";
import { Metadata } from "next";
import { ProfileSettings } from "@/components/auth/user-profile";

export const metadata: Metadata = {
  title: "User Settings",
};

export default async function Page() {
  return (
    <>
      <Suspense>
        <div className='divide-y-secondary flex flex-col gap-16 md:gap-24 '>
          <div className='flex animate-in flex-col gap-8'>User Settings</div>

          <div
            className='flex animate-in flex-col gap-8'
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <ProfileSettings />
          </div>
        </div>
      </Suspense>
    </>
  );
}
