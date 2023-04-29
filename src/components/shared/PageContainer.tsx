import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => {
  return <div className="w-full px-4 font-sans md:px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">{children}</div>;
};

export default PageContainer;
