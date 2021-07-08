import { Card, Button, Row, Col } from "antd";
import { useState } from "react";
import { Redirect, Link } from "react-router-dom";

interface RoomInfo {
  title: string;
  numberOfParticipants: number;
  isStarted: boolean;
  canWatch: boolean;
  roomId: string;
}

const ChessLobby = () => {
  const roominfos: RoomInfo[] = [
    {
      title: "No.1 Room",
      numberOfParticipants: 1,
      isStarted: false,
      canWatch: true,
      roomId: "1"
    },
    {
      title: "No.2 Room",
      numberOfParticipants: 2,
      isStarted: true,
      canWatch: true,
      roomId: "2"
    },
    {
      title: "No.3 Room",
      numberOfParticipants: 3,
      isStarted: false,
      canWatch: true,
      roomId: "3"
    },
    {
      title: "No.4 Room",
      numberOfParticipants: 4,
      isStarted: true,
      canWatch: true,
      roomId: "4"
    },
    {
      title: "No.5 Room",
      numberOfParticipants: 2,
      isStarted: true,
      canWatch: false,
      roomId: "5"
    },
    {
      title: "No.6 Room",
      numberOfParticipants: 2,
      isStarted: true,
      canWatch: false,
      roomId: "6"
    },
    {
      title: "No.7 Room",
      numberOfParticipants: 2,
      isStarted: true,
      canWatch: false,
      roomId: "7"
    }
  ];

  const CardCol12Component = (props: RoomInfo) => {
    return (
      <Col span={12} style={{ padding: "1%" }}>
        <Card
          title={props.title}
          extra={
            <Link to={`/chessRoom/${props.roomId}`}>
              <Button type="primary">Enter</Button>
            </Link>
          }
        >
          <p>numberOfParticipants: {props.numberOfParticipants}</p>
          <p>isStarted: {props.isStarted ? "true" : "false"}</p>
          <p>canWatch: {props.canWatch ? "true" : "false"}</p>
        </Card>
      </Col>
    );
  };

  return (
    <>
      {roominfos.map((roominfo, index) => {
        if (index && index % 2 === 1) {
          return (
            <Row key={roominfo.roomId}>
              <Col></Col>
              <CardCol12Component
                key={roominfos[index - 1].roomId}
                {...roominfos[index - 1]}
              ></CardCol12Component>
              <CardCol12Component
                key={roominfo.roomId}
                {...roominfo}
              ></CardCol12Component>
            </Row>
          );
        }
      })}
    </>
  );
};

export default ChessLobby;
