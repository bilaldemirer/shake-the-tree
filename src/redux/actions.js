import ActionsTypes from "./action.types";

export const decrementApple = () => ({
  type: ActionsTypes.DECREASE_APPLE,
});

export const numberOfApples = () => ({
  type: ActionsTypes.NUMBER_OF_APPLES,
});

export const shakeTheTree = () => ({
  type: ActionsTypes.SHAKE_THE_TREE,
});

export const stopShaking = () => ({
  type: ActionsTypes.STOP_SHAKING,
});

export const shakingStatus = () => ({
  type: ActionsTypes.SHAKING_STATUS,
});

export const fallingApple = () => ({
  type: ActionsTypes.FALLING_APPLE,
});

export const disappearApple = () => ({
  type: ActionsTypes.DISAPPEAR_APPLE,
});

export const appleOnBasket = () => ({
  type: ActionsTypes.APPLE_ON_BASKET,
});
