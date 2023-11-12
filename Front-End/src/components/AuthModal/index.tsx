import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";

import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";
import { Tab, Tabs, Box, Typography } from "@mui/material";

type AuthModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onRequestClose }) => {
  function TapPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleRegister = () => {
    // Здесь вы можете обработать введенные данные регистрации и выполнить необходимую логику
    console.log(`Логин: ${username}, Пароль: ${password}`);
    // Закрываем модальное окно
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Register__modal}
    >
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item One" {...a11yProps(1)} />
        </Tabs>
      </div>
      <div>
        <TapPanel  value={value} index={0}><SignInForm /></TapPanel>
        <TapPanel  value={value} index={1}><SignUpForm /></TapPanel>
      </div>
    </Modal>
  );
};

export default AuthModal;
