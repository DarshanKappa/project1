import  SwipeableDrawer from "@mui/material/SwipeableDrawer";


function SlideBar({ children, open, setOpen }) {

    const toggleDrawer = (value) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(value);
    };

    return (
        <>
            <SwipeableDrawer
                sx={{ opacity: 1 }}
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                ModalProps={{
                    BackdropProps: {
                        sx: { bgcolor: "rgb(0 0 0 / 12%)" }
                    }
                }}
            >
                {children}
            </SwipeableDrawer>
        </>
    );
}

export default SlideBar;

