import { signIn, signOut } from "auth";
import { cn } from "@/lib/utils";

interface SignInProps extends React.ComponentPropsWithRef<any> {
  provider: string;
}

export function SignIn({
  provider,
  className,
  ...props
}: SignInProps): JSX.Element {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button className={cn(className)} {...props}>
        Sign In
      </button>
    </form>
  );
}

interface SignOutProps extends React.ComponentPropsWithRef<any> {
  className: string;
}

export function SignOut({ props, className }: SignOutProps): JSX.Element {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/signin" });
      }}
    >
      <button className={cn(className)} {...props}>
        Sign Out
      </button>
    </form>
  );
}
