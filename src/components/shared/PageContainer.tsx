import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => {
  return <div className="w-full m-auto px-6 pb-12 font-sans md:px-8 md:w-screen-md lg:w-screen-lg xl:w-[1420px]">{children}</div>;
};

export default PageContainer;
