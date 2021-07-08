import { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import App from "./App";
import { HomeContext } from "./Home";

const ChessRoom = () => {
  const [state, setState] = useState({
    left: 100,
    top: 100
  });

  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    if (!ref.current) {
      ref.current = io(process.env.REACT_APP_SOCKET_URL);
    }
    ref.current.on("move", data => {
      setState(prev => {
        return {
          left: prev.left + data.leftRightValue,
          top: prev.top + data.upDownValue
        };
      });
    });
  }, []);

  const handleKeyPress = event => {
    const moveUnit = 10;
    //left: 37 right: 39 up: 38 down: 40
    switch (event.keyCode) {
      case 37: {
        ref.current.emit("move", { leftRightValue: -moveUnit, upDownValue: 0 });
        break;
      }
      case 39: {
        ref.current.emit("move", { leftRightValue: moveUnit, upDownValue: 0 });
        break;
      }
      case 38: {
        ref.current.emit("move", { leftRightValue: 0, upDownValue: -moveUnit });
        break;
      }
      case 40: {
        ref.current.emit("move", { leftRightValue: 0, upDownValue: moveUnit });
        break;
      }
      default: {
        break;
      }
    }
  };

  const setContentComponent = useContext(HomeContext);

  const buttonOnClick = () => {
    setContentComponent(() => {
      return <App str={"hello~"}></App>;
    });
  };

  return (
    <>
      <button onClick={buttonOnClick}>Hello</button>
    </>
  );
};

export default ChessRoom;
