import { Spinner } from "@/components/ui/index";

export default function Loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Spinner className='h-4 w-4 sm:h-6 sm:w-6  md:h-10 md:w-10' />
    </div>
  );
}
