import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Home = () => {
  const [state, setState] = useState({
    left: 100,
    top: 100
  });

  const ref = useRef(null);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    if (!ref.current) {
      ref.current = io("http://10.14.3.8:4000/");
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

  return (
    <>
      <button
        style={{
          position: "absolute",
          left: state.left + "px",
          top: state.top + "px"
        }}
      >
        Hello
      </button>
    </>
  );
};

export default Home;
