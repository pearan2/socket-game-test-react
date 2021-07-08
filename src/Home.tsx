import { Layout } from "antd";
import React, { useState, createContext, Dispatch } from "react";
import ChessRoom from "./ChessRoom";
import ChessLobby from "./ChessLobby";

const { Header, Footer, Content } = Layout;

export const HomeContext = createContext<
  Dispatch<React.SetStateAction<JSX.Element>>
>(() => {
  console.error("HomeContext default dispatch called!! check error");
});

const Home = () => {
  const [contentComponent, setContentComponent] = useState<JSX.Element>(
    <ChessLobby></ChessLobby>
  );

  return (
    <>
      <Layout className="HomeLayout">
        <Header className="HomeHeader">Header</Header>
        <Content>
          <HomeContext.Provider value={setContentComponent}>
            {contentComponent}
          </HomeContext.Provider>
        </Content>
        <Footer className="HomeFooter">Company Under 5</Footer>
      </Layout>
    </>
  );
};

export default Home;
