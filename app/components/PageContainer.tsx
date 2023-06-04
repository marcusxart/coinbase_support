import React from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <>
      <nav className="border-b border-line border-solid w-full flex justify-center">
        <div className="max-w-[1220px] h-[60px] flex items-center w-full">
          <div className="w-fit h-fit">
            <Image
              src="/assets/svg/logo.svg"
              alt="logo"
              width={150}
              height={50}
              className="hidden  lg:inline-block"
            />
            <Image
              src="/assets/svg/logo-sm.svg"
              alt="logo"
              width={112}
              height={50}
              className="inline-block  lg:hidden"
            />
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default PageContainer;
