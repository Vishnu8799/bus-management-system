import React from "react";
import "./index.css";

const Validation_Regex = {
  NUMBER: /^[0-9]*$/,
  STRING: /^[a-zA-Z ]*$/,
  DECIMAL: /^(100|([0-9][0-9]?(\.[0-9]+)?))$/,
  UPPERCASE: /^[a-zA-Z0-9]*$/,
  EMAIL: "/^[a-z0-9@.]*$/",
  RESTRICTED: /^[a-zA-Z0-9 ()'&.,-/]*$/gi,
  RESTRICTED2: /^[a-zA-Z0-9 ()@.,-]*$/gi,
  RESTRICTED3: /^[A-Z0-9_-]*$/gi,
};

const InputFeild = ({
  name = "Input",
  fontsize,
  placeholder = "",
  width = "100%",
  height = "90px",
  inputHeight = "37px",
  keyname,
  style,
  onBlur,
  onChange,
  onClick,
  maxLength,
  value = "",
  type = "text",
  index = "",
  disable = false,
  toast = false,
  avoidSplChar = false,
  toastMsg = "Require field",
  inputType = "mixedString",
  important = false,
  min,
  max,
  handleKeyDown,
  id = "input_id",
  onKeyPress = true,
  classNameInLabel = "",
  Error_Message,
}) => {
  const inputProps = {
    style: { ...style, width: width, height: height },
  };
  const [errorValue, setErrorValue] = React.useState(false);

  const _handleOnChange = (e) => {
    if (Object.keys.length > 0) {
      setErrorValue(true);
    }
    if (inputType === "number") {
      if (Validation_Regex.NUMBER.test(Number(e.target.value))) {
        onChange(keyname, e.target.value.trim(), index);
      } else {
        e.preventDefault();
      }
    }
    if (inputType === "decimal") {
      if (Validation_Regex.DECIMAL.test(Number(e.target.value))) {
        onChange(keyname, e.target.value.trim(), index);
      }
    }
    if (inputType === "numberString") {
      if (Validation_Regex.R.test(e.target.value)) {
        onChange(keyname, e.target.value.trim(), index);
      }
    }
    if (inputType === "string") {
      if (Validation_Regex.STRING.test(e.target.value)) {
        onChange(keyname, e.target.value, index);
      }
    }
    if (inputType === "upperCase") {
      if (Validation_Regex.UPPERCASE.test(e.target.value)) {
        onChange(keyname, e.target.value.toUpperCase(), index);
      }
    }

    if (inputType === "restrictedString") {
      if (Validation_Regex.RESTRICTED.test(e.target.value)) {
        onChange(keyname, e.target.value, index);
      }
    }
    if (inputType === "reasonString") {
      if (Validation_Regex.RESTRICTED2.test(e.target.value)) {
        onChange(keyname, e.target.value, index);
      }
    }
    if (inputType === "employeeCode") {
      if (Validation_Regex.RESTRICTED3.test(e.target.value)) {
        onChange(keyname, e.target.value.toUpperCase(), index);
      }
    }

    // if (inputType === "emailType") {
    //   if (Validation_Regex.EMAIL.match(e.target.value)) {
    //   onChange(keyname, e.target.value, index);
    //   }
    //   }

    if (inputType === "mixedString") {
      let value = avoidSplChar
        ? e.target.value.replace(/[^\w\s]/gi, "")
        : e.target.value;
      if (type === "text") {
        onChange(keyname, String(value), index);
      } else {
        onChange(keyname, value, index);
      }
    }

    if (inputType === "emailType") {
      let value = avoidSplChar
        ? e.target.value.replace(/[^\w\s@.]/gi, "")
        : e.target.value;
      if (type === "email") {
        onChange(keyname, String(value).toLowerCase(), index);
      } else {
        onChange(keyname, value, index);
      }
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="Dimmenxion-input-container" {...inputProps}>
      {toast && <div className="Dimmenxion-input-toast-con">{toastMsg}</div>}
      <div
        className={`Dimmenxion-input-name-block ${classNameInLabel}`}
        style={{ fontSize: "18px" ,fontWeight:"bold"}}
      >
        {name}
        {important && <span className="important-field">*</span>}{" "}
      </div>
      <input
        index={index !== "" ? index : 0}
        type={type}
        name={name}
        label={name}
        id={id}
        min={min}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`Dimmenxion-input ${classNameInLabel}_input`}
        placeholder={placeholder !== "" ? placeholder : name}
        style={{ height: inputHeight }}
        onChange={_handleOnChange}
        value={value}
        disabled={disable}
        max={max}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        // onKeyPress={onKeyPress}
      />
      <div className="input_error">{Error_Message}</div>
    </div>
  );
};

export default InputFeild;
