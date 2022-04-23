import React from "react";
import PropTypes from "prop-types";

const style = {
    padding: 14,
    width: 15,
    fontSize:14,
    margin:5
};

const PinItem = React.forwardRef(({ onChange, onBackspace, max }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 8: {
        
          if (!e.target.value) onBackspace(e.target.value);
          break;
        }
        case 9: {
          e.preventDefault();
          break;
        }
        default: {
          onChange(e.target.value);
        
        }
      }
    };
    return (
      <input onKeyUp={handleKeyUp} maxLength={max} ref={ref} style={style} />
    );
  });
  PinItem.PropTypes = {
    max: PropTypes.number,
    onBackspace: PropTypes.func,
    onChange: PropTypes.func
  };
  PinItem.defaultProps = {
    max: 1
  };
  export { PinItem };