import { TextField } from "@mui/material";
import { isInvalid } from "../../formFramework";

const Input = (props) => {
  return (
    <TextField
      autoFocus={props.autoFocus}
      margin={props.margin}
      variant={props.variant}
      error={isInvalid(props)}
      fullWidth={props.fullWidth}
      type={props.type ? props.type : "text"}
      //key={props.key}
      value={props.value}
      label={props.label}
      sx={props.sx}
      onChange={props.onChange}
      helperText={
        isInvalid(props)
          ? props.errorMassage
            ? props.errorMassage
            : "Incorrect data"
          : null
      }
    />
  );
};

export default Input;
