import Head from "next/head";
import { FC } from "react";
import { Footer, Header } from ".";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="flex bg-surface min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hired</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col px-20 text-center font-body">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
