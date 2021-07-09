import { Layout, Avatar, Menu, Dropdown, Input, Row, Col } from "antd";
import { Route, Switch } from "react-router-dom";
import ChessLobby from "./ChessLobby";
import ChessRoom from "./ChessRoom";
import { UserOutlined } from "@ant-design/icons";

const { Header, Footer, Content, Sider } = Layout;
const { Search } = Input;

enum UserStatusEnum {
  LOGIN,
  LOGOUT,
  INGAME
}

interface UserInfoType {
  nickName: string;
  imageURL: string;
  status: UserStatusEnum;
  numberOfDM: number;
}

const userInfos: UserInfoType[] = [
  {
    nickName: "kilee",
    imageURL: "https://cdn.intra.42.fr/users/small_kilee.jpg",
    status: UserStatusEnum.LOGIN,
    numberOfDM: 0
  },
  {
    nickName: "hyeonkim",
    imageURL: "https://cdn.intra.42.fr/users/small_hyeonkim.jpg",
    status: UserStatusEnum.LOGOUT,
    numberOfDM: 0
  },
  {
    nickName: "mijeong",
    imageURL: "https://cdn.intra.42.fr/users/small_mijeong.jpg",
    status: UserStatusEnum.INGAME,
    numberOfDM: 0
  }
];

const Home = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">My Page</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout className="HomeLayout">
        <Sider>
          <div
            style={{
              padding: "10%",
              width: "100%"
            }}
          >
            <Search
              style={{ width: "100%" }}
              placeholder="input search user"
              onSearch={() => {
                //
                console.log("search clicked");
              }}
            ></Search>
          </div>
          <Menu theme="dark" mode="inline">
            {userInfos.map((user, index) => {
              return (
                <Menu.Item style={{ padding: 0 }} key={index}>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "2%" }}>
                      <Avatar size="small" src={user.imageURL}></Avatar>
                    </div>
                    <div style={{ marginLeft: "2%" }}>{user.nickName}</div>
                  </div>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
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
      </Layout>
    </>
  );
};

export default Home;
