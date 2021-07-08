import { List } from "antd";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
const io = require("socket.io-client");

interface ChessRoomMatchParamsType {
  roomId: string;
}

const ChessRoom: React.SFC<RouteComponentProps<ChessRoomMatchParamsType>> = ({
  match
}) => {
  const data: string[] = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."
  ];

  return (
    <>
      <List
        header={<div>{`this is room number ${match.params.roomId}`}</div>}
        bordered={true}
        dataSource={data}
        renderItem={item => {
          return <List.Item>{item}</List.Item>;
        }}
      ></List>
    </>
  );
};

export default ChessRoom;
