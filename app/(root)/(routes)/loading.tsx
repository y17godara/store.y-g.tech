import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      {/* <Spinner className='h-4 w-4 sm:h-6 sm:w-6  md:h-10 md:w-10' /> */}
      <SyncLoader color='#8b0d0d' size={10} loading speedMultiplier={2} />
    </div>
  );
}
