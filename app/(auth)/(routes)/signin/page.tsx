import { Link } from "@/components/ui";
import React from "react";
import { signIn, signOut } from "auth";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 overflow-y-hidden md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Signin</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          This is the Signin page
          <div>
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/" });
              }}
            >
              <button>Sign In</button>
            </form>
          </div>
          <div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button>Sign Out</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
