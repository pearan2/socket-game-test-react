import { Layout, Avatar, Menu, Dropdown } from "antd";
import { Route, Switch } from "react-router-dom";
import ChessLobby from "./ChessLobby";
import ChessRoom from "./ChessRoom";

const { Header, Footer, Content } = Layout;

const Home = () => {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2st menu item</Menu.Item>
      <Menu.Item>3st menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout className="HomeLayout">
        <Header
          className="HomeHeader"
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>{`5인 미만 사업장`}</div>

          <Dropdown overlay={menu}>
            <a style={{ color: "black" }} onClick={e => e.preventDefault()}>
              <div
                onClick={() => {
                  console.log(`clicked!`);
                }}
                style={{ display: "flex", cursor: "pointer" }}
              >
                <div>{`Honlee`}</div>
                <div>
                  <Avatar
                    size="large"
                    src={`https://cdn.intra.42.fr/users/small_honlee.jpg`}
                  ></Avatar>
                </div>
              </div>
            </a>
          </Dropdown>
        </Header>
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
