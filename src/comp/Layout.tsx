import type { FC, ReactNode } from "react";
import Nav from "./Nav";
import Meta from "./Meta";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      {children}
    </>
  );
};
export default Layout;
