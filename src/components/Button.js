import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberOfApples, shakingStatus } from "../redux/actions";

function Button() {
  const dispatch = useDispatch();
  const { count, shake } = useSelector((state) => ({
    count: state.count,
    shake: state.shake,
  }));

  useEffect(() => {
    numberOfApples(dispatch);
    shakingStatus(dispatch);
  }, []);

  const handleClick = () => {
    dispatch({ type: "SHAKE_THE_TREE" });
    const timeId = setTimeout(() => {
      // After 3 seconds call the actions
      dispatch({ type: "STOP_SHAKING" });
      dispatch({ type: "DECREASE_APPLE" });
      dispatch({ type: "FALLING_APPLE" });
    }, 3000);

    const timeout = setTimeout(() => {
      // After 5 seconds call the actions
      dispatch({ type: "DISAPPEAR_APPLE" });
      dispatch({ type: "APPLE_ON_BASKET" });
    }, 5000);

    return () => {
      clearTimeout(timeId, timeout);
    };
  };

  return (
    <div>
      <button onClick={handleClick} className="button">
        Shake It!
      </button>
    </div>
  );
}

export default Button;
