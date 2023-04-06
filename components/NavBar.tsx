import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row items-stretch bg-gray-800">
        <Link href="/" passHref>
          <a className="p-2 flex flex-row flex-shrink-0 self-stretch">
            <Image
              src="/logo.svg"
              width="32px"
              height="32px"
              className="w-8"
              alt="Logo"
            />
            <span className="p-2 pr-0 text-gray-200 text-xl">Preview.js</span>
          </a>
        </Link>
        <div className="flex-1"></div>
      </nav>
    </>
  );
};
