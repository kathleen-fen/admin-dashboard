import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

import { createControl, validate, validateForm } from "../formFramework";
import Input from "./UI/Input";
import { userSelector } from "../selectors";

const UserForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(userSelector(+id));

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const newFormControls = { ...formControls };
      Object.keys(newFormControls).forEach((el) => {
        newFormControls[el].value = user[el];
      });
      setFormControls(newFormControls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const createFormControls = () => {
    return {
      name: createControl(
        {
          label: "Name",
          sx: { my: 1 },
          fullWidth: true,
          value: "",
        },
        {
          required: true,
        }
      ),
      email: createControl(
        {
          label: "Email",
          sx: { my: 1 },
          fullWidth: true,
          value: "",
        },
        {
          required: true,
          email: true,
        }
      ),
    };
  };
  const [formControls, setFormControls] = useState(createFormControls());
  const [isFormValid, setIsFormValid] = useState(false);
  const controlChangeHandler = (value, controlName) => {
    const newControl = {
      ...formControls[controlName],
      value: value,
      touched: true,
      valid: validate(value, formControls[controlName].validation),
    };
    setFormControls({ ...formControls, [controlName]: newControl });
    setIsFormValid(
      validateForm({ ...formControls, [controlName]: newControl })
    );
  };
  const renderControls = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return (
        <Input
          label={control.label}
          key={index}
          sx={control.sx}
          value={control.value}
          valid={control.valid}
          fullWidth={true}
          shouldValidate={!!control.validation}
          touched={control.touched}
          onChange={(e) => controlChangeHandler(e.target.value, controlName)}
        />
      );
    });
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: 650,
          mx: "auto",
        }}
      >
        <form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ my: 2 }}>
              Form
            </Typography>
          </Box>
          {renderControls()}
          <Box sx={{ display: "flex", justifyContent: "right", mt: 2 }}>
            <Button sx={{ mr: 2 }} variant="contained" disabled={!isFormValid}>
              Save
            </Button>
            <Button onClick={() => navigate("/")}>Cancel</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default UserForm;
