import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import ChessLobby from "./ChessLobby";
import ChessRoom from "./ChessRoom";

const { Header, Footer, Content } = Layout;

const Home = () => {
  return (
    <>
      <Layout className="HomeLayout">
        <Header className="HomeHeader">Header</Header>
        <Content>
          <Switch>
            <Route exact path="/" component={ChessLobby} />
            <Route path="/chessRoom/:roomId" component={ChessRoom} />
          </Switch>
        </Content>
        <Footer className="HomeFooter">Company Under 5</Footer>
      </Layout>
    </>
  );
};

export default Home;
