import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";
import { Tab, Tabs, Box, Typography, makeStyles } from "@mui/material";
import BuyUrSelfForm from "../BuyUrSelfForm";
import BuyGiftForm from "../BuyGiftModal";

type AuthModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  defaultValue: number;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onRequestClose,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setValue(defaultValue);
    }
  }, [isOpen, defaultValue]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          <Box sx={{ p: 3, padding: "0px" }}>
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

  const getStyles = () => ({
    tabs: {
      backgroundColor: "Colors.teal200",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "20px",
      width: "131px",
      "border-radius": "0px 5px 5px 0px",
      border: "1px solid rgba(0, 0, 0, 0.50)",
    },
  });

  const getStyles1 = () => ({
    tabs: {
      backgroundColor: "Colors.teal200",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "20px",
      width: "73px",
      "border-radius": "5px 0px 0px 5px",
      border: "1px solid rgba(0, 0, 0, 0.50)",
    },
  });

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
        <div className={styles.Tabs__div_main}>
          <h2 className={styles.Tabs_h2}>
            Оплата доступа к курсу "Добрый, добрый Python ООП - обучающий курс
            от Сергея Балакирева"
          </h2>
          <button onClick={onRequestClose} className={styles.CloseButton}>
            <img src="../src/assets/Union.svg" alt="close" />
          </button>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& button": {
              color: "rgba(0, 0, 0, 0.80)",
              padding: "0px",
              minHeight: "44px",
              height: "44px",
              minWidth: "73px",
              width: "73px",
            },
            "& button.Mui-selected": {
              backgroundColor: "#171A53",
              color: "#FFF",
            },
            "& span.MuiTabs-indicator": {
              display: "none",
            },
            minHeight: "44px",
            height: "44px",
            "& div.MuiBox-root": {
              padding: "0px",
            },
          }}
        >
          <Tab label="Себе" {...a11yProps(0)} style={getStyles1().tabs} />
          <Tab label="В подарок" {...a11yProps(1)} style={getStyles().tabs} />
        </Tabs>
      </div>
      <div className={styles.TabContainer}>
        <TapPanel value={value} index={0}>
          <BuyUrSelfForm isOpen={true} onRequestClose={() => {}} />
        </TapPanel>
        <TapPanel value={value} index={1}>
          <BuyGiftForm isOpen={true} onRequestClose={() => {}} />
        </TapPanel>
      </div>
    </Modal>
  );
};

export default AuthModal;
