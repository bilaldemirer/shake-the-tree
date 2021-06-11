import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberOfApples, shakingStatus } from "../redux/actions";
import tree from "../assets/tree.svg";
import "../default.scss";

function Tree() {
  const dispatch = useDispatch();
  const { shake } = useSelector((state) => ({
    shake: state.shake,
  }));

  useEffect(() => {
    numberOfApples(dispatch);
    shakingStatus(dispatch);
  }, []);

  return (
    <div className="center">
      <div className={shake ? "shake-slow shake-constant" : ""}>
        <img className="tree" src={tree} alt="tree" />
      </div>
    </div>
  );
}

export default Tree;
