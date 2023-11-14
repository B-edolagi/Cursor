import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";

import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PasswordRecoveryForm from "../PasswordRecovery";

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
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleButtonClick = () => {
    setValue(2);
  };

  const handleRegister = () => {
    // Здесь вы можете обработать введенные данные регистрации и выполнить необходимую логику
    console.log(`Логин: ${username}, Пароль: ${password}`);
    // Закрываем модальное окно
    onRequestClose();
  };
  const getStyles = () => {
    return {
      tabs: {
        backgroundColor: "Colors.teal200",
        display: "none",
        color: "#4485ED",
        "font-family": "Montserrat",
        "font-size": "18px",
        "font-style": "normal",
        "font-weight": "600",
        "line-height": "20px",
      },
    };
  };
  const getStyles1 = () => {
    return {
      tabs: {
        backgroundColor: "Colors.teal200",
        color: "#4485ED",
        "font-family": "'Montserrat', sans-serif",
        "font-size": "16px",
        "font-style": "normal",
        "font-weight": "600",
        "line-height": "20px",
      },
    };
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Register__modal}
      style={{
        overlay: { backgroundColor: "rgba(0,0,0, 0.5)" },
      }}
    >
      <div className={styles.Tabs__div}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Войти" {...a11yProps(0)} style={getStyles1().tabs} />
          <Tab
            label="Регистрация"
            {...a11yProps(1)}
            style={getStyles1().tabs}
          />
          <Tab label="" {...a11yProps(2)} style={getStyles().tabs}></Tab>

          <button onClick={onRequestClose} className={styles.CloseButton}>
            <img src="./src/assets/Union.svg" alt="close" />
          </button>
        </Tabs>
      </div>
      <div>
        <TapPanel value={value} index={0}>
          <SignInForm
            isOpen={true}
            onRequestClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <button
            className={styles.PasswordRecoveryBtn}
            onClick={handleButtonClick}
          >
            Восстановить пароль
          </button>
        </TapPanel>
        <TapPanel value={value} index={1}>
          <SignUpForm
            isOpen={true}
            onRequestClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </TapPanel>
        <TapPanel value={value} index={2}>
          <PasswordRecoveryForm
            isOpen={true}
            onRequestClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </TapPanel>
      </div>
      <div
        className={styles.Register__modal_bottom}
        style={{ display: value !== 2 ? "flex" : "none" }}
      >
        {["vk", "google-plus", "github"].map((icon) => (
          <a key={icon} href="#">
            <img src={`./src/assets/${icon}-svgrepo-com.svg`} alt={icon} />
          </a>
        ))}
      </div>
    </Modal>
  );
};

export default AuthModal;
