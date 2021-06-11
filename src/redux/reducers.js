import ActionsTypes from "./action.types";
const initialState = {
  count: 50,
  shake: false,
  falling: 0,
  basket: 0,
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.DECREASE_APPLE:
      return { ...state, count: state.count - 2 };
    case ActionsTypes.NUMBER_OF_APPLES:
      return { ...state, count: state.count };
    case ActionsTypes.FALLING_APPLE:
      return { ...state, falling: state.falling + 2 };
    case ActionsTypes.DISAPPEAR_APPLE:
      return { ...state, falling: state.falling - 2 };
    case ActionsTypes.SHAKE_THE_TREE:
      return { ...state, shake: !state.shake };
    case ActionsTypes.STOP_SHAKING:
      return { ...state, shake: !state.shake };
    case ActionsTypes.SHAKING_STATUS:
      return { ...state, shake: state.shake };
    case ActionsTypes.APPLE_ON_BASKET:
      return { ...state, basket: state.basket + 2 };
    default:
      return state;
  }
}
