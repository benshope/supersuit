import React from "react";
import { connect } from "react-redux";

const TYPE = "STRING_LIST_INPUT";

const SET_STRING_LIST_INPUT_VALUE = "SET_STRING_LIST_INPUT_VALUE";
const setInputAction = payload => ({
  type: SET_STRING_LIST_INPUT_VALUE,
  payload
});

const reducer = (state, { type, payload }) => {
  if (type === SET_STRING_LIST_INPUT_VALUE) {
    const { id, value } = payload;
    return {
      ...state,
      [id]: { ...state[id], value }
    };
  }
  return state;
};

const StringListComponent = ({ value = [], type = "text", onChange }) => {
  return (
    <div>
      {value.map((v, i) => (
        <input
          key={i}
          type={type}
          value={v}
          placeholder="String input..."
          autoFocus={i === value.length - 1}
          onChange={e => {
            onChange(Object.assign([...value], { [i]: e.target.value }));
          }}
        />
      ))}
      <button
        onClick={() => {
          onChange([...value, ""]);
        }}
      >
        {"Add Input"}
      </button>
    </div>
  );
};

const ConnectedComponent = connect(
  (state, { id }) => ({ id, ...state[id] }),
  (dispatch, { id }) => ({
    onChange: value => dispatch(setInputAction({ id, value }))
  })
)(StringListComponent);

export default {
  name: "String List Input",
  type: TYPE,
  inputs: () => null,
  component: ConnectedComponent,
  reducer
};
