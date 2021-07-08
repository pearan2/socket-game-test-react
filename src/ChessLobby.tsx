import { Card, Button } from "antd";

const ChessLobby = () => {
  return (
    <>
      <Card
        size="small"
        title="No.1 Room"
        extra={<Button type="primary">Enter</Button>}
        style={{ width: 300 }}
      >
        <p>참여인원 : </p>
        <p>게임상태 : </p>
        <p>관 전 : false</p>
      </Card>

      <Card
        size="small"
        title="No.2 Room"
        extra={<Button type="primary">Enter</Button>}
        style={{ width: 300 }}
      >
        <p>참여인원 : </p>
        <p>게임상태 : </p>
        <p>관 전 : true</p>
      </Card>
    </>
  );
};

export default ChessLobby;
