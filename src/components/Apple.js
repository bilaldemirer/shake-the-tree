import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberOfApples, shakingStatus } from "../redux/actions";
import { useSpring, animated } from "react-spring";
import apple from "../assets/apple.svg";

function Apple() {
  const dispatch = useDispatch();
  const { count, falling, basket } = useSelector((state) => ({
    count: state.count,
    falling: state.falling,
    basket: state.basket,
  }));

  useEffect(() => {
    numberOfApples(dispatch);
    shakingStatus(dispatch);
  }, []);

  const apples = [];
  for (var i = 0; i < count; i++) {
    apples.push(i);
  }

  const fallingApple = [];
  for (var i = 0; i < falling; i++) {
    fallingApple.push(i);
  }

  const appleOnBasket = [];
  for (var i = 0; i < basket; i++) {
    appleOnBasket.push(i);
  }

  const top = [];
  for (var i = 0; i < count; i++) {
    top.push(Math.floor(Math.random() * 500) - 1500);
  }

  const topBasket = [];
  for (var i = 0; i < basket; i++) {
    topBasket.push(Math.floor(Math.random() * 500) - 900);
  }

  const leftBasket = [];
  for (var i = 0; i < basket; i++) {
    leftBasket.push(Math.floor(Math.random() * 300) + 350);
  }

  const bottom = [];
  for (var i = 0; i < count; i++) {
    bottom.push(Math.floor(Math.random() * 10) - 50);
  }

  const left = [];
  for (var i = 0; i < count; i++) {
    left.push(Math.floor(Math.random() * 800) + 1200);
  }

  const styles = useSpring({
    from: { y: -1000 },
    to: { y: -100 },
  });

  return (
    <div>
      {apples.map((id, index) => {
        return (
          <div key={index}>
            <animated.img
              className="apple"
              style={{
                x: `${left[index]}%`,
                y: `${top[index]}%`,
              }}
              src={apple}
              alt="apple"
              id={id}
            />
          </div>
        );
      })}
      {fallingApple?.map((id, index) => {
        return (
          <div key={index}>
            <div>
              <animated.img
                style={styles}
                className="fallingApple"
                src={apple}
                alt="apple"
                id={id}
              />
            </div>
            <div>
              <animated.img
                className="fallingApple2"
                src={apple}
                alt="apple"
                id={id}
              />
            </div>
          </div>
        );
      })}
      {appleOnBasket?.map((id, index) => {
        return (
          <div key={index}>
            <div>
              <animated.img
                className="appleOnBasket"
                src={apple}
                alt="apple"
                id={id}
                style={{
                  x: `${leftBasket[index]}%`,
                  y: `${topBasket[index]}%`,
                }}
              />
            </div>
            <div>
              <animated.img
                className="appleOnBasket2"
                src={apple}
                alt="apple"
                id={id}
                style={{
                  x: `${leftBasket[index]}%`,
                  y: `${topBasket[index]}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Apple;
