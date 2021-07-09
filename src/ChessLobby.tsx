import { Card, Button, Row, Col, Modal, Form, Input, message } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface RoomInfo {
  title: string;
  numberOfParticipants: number;
  roomId: string;
  password: string | null;
}

const ChessLobby = () => {
  const roominfos: RoomInfo[] = [
    {
      title: "No.1 Room",
      numberOfParticipants: 1,
      roomId: "1",
      password: "1234"
    },
    {
      title: "No.2 Room",
      numberOfParticipants: 2,
      roomId: "2",
      password: "1234"
    },
    {
      title: "No.3 Room",
      numberOfParticipants: 3,
      roomId: "3",
      password: "1234"
    },
    {
      title: "No.4 Room",
      numberOfParticipants: 4,
      roomId: "4",
      password: "1234"
    },
    {
      title: "No.5 Room",
      numberOfParticipants: 2,
      roomId: "5",
      password: "1234"
    },
    {
      title: "No.6 Room",
      numberOfParticipants: 2,
      roomId: "6",
      password: "1234"
    },
    {
      title: "No.7 Room",
      numberOfParticipants: 2,
      roomId: "7",
      password: "1234"
    },
    {
      title: "No.8 Room",
      numberOfParticipants: 2,
      roomId: "8",
      password: "1234"
    }
  ];

  const InputPasswordModal = (props: RoomInfo) => {
    const history = useHistory();

    interface PasswordInputType {
      password: string;
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      // 이미 예전에 한번 참가한적이 있었던 경우 (BackEnd 로 보내서 참가되어 있는지 확인)
      if (props.roomId === "1") history.push(`/chessRoom/${props.roomId}`);
      setIsModalVisible(true);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const onFinish = async (values: PasswordInputType) => {
      setIsModalVisible(false);
      if (values.password === "1234") {
        // backEnd 로 password validation 요청 보내서 통과했을 경우
        history.push(`/chessRoom/${props.roomId}`);
      } else {
        message.error("Password is not correct!");
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Enter
        </Button>
        <Modal
          title="Input Password"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[]}
        >
          <Form
            name="passwordInputForm"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input password!" }]}
            >
              <Input.Password></Input.Password>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };

  const CardCol12Component = (props: RoomInfo) => {
    return (
      <Col span={12} style={{ padding: "1%" }}>
        <Card
          title={props.title}
          extra={<InputPasswordModal {...props}></InputPasswordModal>}
        >
          <p>numberOfParticipants: {props.numberOfParticipants}</p>
          <p>isPublic: {props.password === null ? "true" : "false"}</p>
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
        } else {
          return null;
        }
      })}
    </>
  );
};

export default ChessLobby;
