import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import { getUserHistory } from "@/actions/user-history-products";
import UserCarousel from "./User-Carousel";
import { cn } from "@/lib/utils";
import { type client } from "@/types/index";

async function UserHistory({ user }: { user: client }) {
  if (!user) {
    return null;
  }
  const clientId = user.id;
  const history: any = await getUserHistory(clientId);

  if (!history) return <div></div>;
  return (
    <>
      {history.length > 0 ? (
        <div className='flex animate-in flex-col gap-2 md:gap-4'>
          <div className='flex w-full items-center justify-end px-2 text-end'>
            <Link
              href='/user/history'
              className='group flex flex-row gap-1 text-xs underline-offset-4 transition-all duration-200 ease-linear hover:text-brand hover:underline md:text-sm'
            >
              {"View All"}
              <span>
                <GoArrowRight size={18} className={"group-hover:-rotate-45"} />
              </span>
            </Link>
          </div>
          <div className={cn("flex flex-col gap-2 md:gap-8", "sm:flex-row")}>
            <div
              className='flex flex-col items-center justify-center text-wrap rounded-md border border-secondary bg-secondary
            p-2
              text-center transition-all duration-300'
            >
              <span className='text-sm font-bold sm:w-[100px] md:w-[240px] md:text-lg'>
                Last Viewed
              </span>
            </div>

            <UserCarousel Content={history} userId={clientId} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default UserHistory;
