// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import {
//   Modal,
//   Tabs,
//   Tab,
//   TextField,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";

// type LoginModalProps = {
//   isOpen: boolean;
//   onRequestClose: () => void;
// };
// const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Modal
//       open={isOpen}
//       onClose={onRequestClose}
//       aria-labelledby="login-modal"
//       aria-describedby="login-modal-description"
//     >
//       <div>
//         <Tabs value={value} onChange={handleChange} centered>
//           <Tab label="Login" />
//           <Tab label="Password" />
//         </Tabs>
//         {value === 0 && (
//           <Box p={3}>
//             <TextField label="Username" placeholder="Your username" fullWidth />
//           </Box>
//         )}
//         {value === 1 && (
//           <Box p={3}>
//             <TextField
//               label="Password"
//               type="password"
//               placeholder="Your password"
//               fullWidth
//             />
//           </Box>
//         )}
//         <Box p={3}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={onRequestClose}
//           >
//             Close
//           </Button>
//         </Box>
//       </div>
//     </Modal>
//   );
// };

// export default LoginModal;
