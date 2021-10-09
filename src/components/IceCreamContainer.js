import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "./../redux/iceCream/iceCreamActions";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCreams} type="button">
        Buy Icecream
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCreams: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
