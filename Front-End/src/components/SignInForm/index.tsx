import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  Modal,
  Tabs,
  Tab,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

type SignInFormProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};
const SignInForm: React.FC<SignInFormProps> = ({}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <p>
      SignInForm
      </p>
    </div>
  );
};

export default SignInForm;
