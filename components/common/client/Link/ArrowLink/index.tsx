import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

type InteractiveLinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <Link
      className='group flex items-center gap-x-1'
      href={href}
      onClick={onClick}
      {...props}
    >
      <div className=''>{children}</div>
      <RxArrowTopRight className='duration-150 ease-in-out group-hover:rotate-45' />
    </Link>
  );
};

export default InteractiveLink;
