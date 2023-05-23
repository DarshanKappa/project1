import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Stack, Typography, } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TabScrollButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import SlideBar from '../components/SlideBar';
import ArticleForm from '../components/Dashboard/ArticleForm2';
import Modal from '../components/Modal';

export default function Home() {

  const ref = useRef();

  const [value, setValue] = useState(0);
  console.log(value)

  const onScroll = (e) => {

    // console.log("099999999999999999999999")
    // console.log((e.currentTarget.scrollTop)/(e.currentTarget.scrollHeight-e.currentTarget.offsetHeight)*100, "%")
    setValue((e.currentTarget.scrollTop) / (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) * 90)


  }

  const theme = createTheme({
    // status: {
    //   primary: "black"
    // },
    palette: {
      primary: {
        main: "#4615b2"
      },
      error: {
        main: "#26a69a"
      },
      my: {
        light: "#e6ee9c",
        main: "#9e9d24",
        dark: "#827717"
      },
      mycolor: {
        main: "#eeeeee"
      }
    }
  })

  const [state, setState] = useState(false);

  const toggleDrawer = (value) => (event) => {
    if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
    ) {
        return;
    }

    setState(value);
};

  return (

    // <ThemeProvider theme={theme}>
    <>

      <Button onClick={()=>setState(true)}>Open Modal</Button>

      {/* <SlideBar open={state} setOpen={setState}>
        <ArticleForm />
      </SlideBar> */}

      <Modal open={state} onClose={()=>setState(false)}>
        <Typography variant="h6" color="initial">Darshan Prjapati</Typography>
      </Modal>

      {/* <Box display={"flex"} flexDirection={"column"}>


        <Stack spacing={2} sx={{ p: 2, width: 200, placeItems: "center", bgcolor: "my.light" }}>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="primary" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="secondary" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="error" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="success" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="warning" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="info" >Primary</Button>
          <Button variant='contained' sx={{color: "mycolor.main"}} color="my" >Primary</Button>
          
        </Stack>


        <Typography variant="h2" color="initial">Darshan Prajapati</Typography>
        <Stack sx={{
          m: 5,
          bgcolor: "lightblue",
          width: 300,
          height: 100,
          overflowY: "auto"

        }}
          onScroll={onScroll}
          ref={ref}
        >
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
          <Box>Darshasn</Box>
        </Stack>
        <Stack sx={{
          m: 10,
          bgcolor: "lightgray",
          height: 700,
          width: 20,
          borderRadius: 100,
          pt: "10%",
          position: "relative",
        }}>
          <Box
            sx={{
              width: 20,
              borderRadius: 100,
              height: "10%",
              bgcolor: "black",
              position: "absolute",
              top: value + "%"
            }}>

          </Box>
        </Stack>
      </Box> */}
    </>
    // </ThemeProvider>
  )
}
