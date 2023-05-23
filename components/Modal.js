import { Box, Modal as MuiModal } from "@mui/material";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 12,
    p: 4,
};


function Modal({ children, open, onClose, sx }) {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, ...sx }}>
                {children}
            </Box>
        </MuiModal>
    );
}

export default Modal;
