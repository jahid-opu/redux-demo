import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./../redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCakes} type="button">
        Buy Cakes
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
