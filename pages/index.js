// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

import { Box, Button, Typography } from "@mui/material";
import { jsPDF } from 'jspdf';
// import { html2pdf } from "html2pdf.js";

// import { useRouter } from "next/router"



function Home({ }) {

  // let element = window.document.getElementById("box")


  return (
    <Box sx={{ m: 2 }}>
      <Button
        variant="contained"
        onClick={async() => {
          // const element = window.document.getElementById("box")
          // html2pdf().from(element).save();
          const pdfContentEl = document.getElementById('box');

          const doc = new jsPDF();

          await doc.html(pdfContentEl.innerHTML).save('test.pdf');
        }}
      >
        PDF
      </Button>

      <Box id="box">
        <Typography variant="body1" color="initial">Darshan Prajpti</Typography>
        <p>
          CONTENTS
          html2pdf
          Installation
          CDN
          NPM
          Manual Download
          Using html2pdf
          Downloading an Invoice as a PDF
          Puppeteer
          Installing Puppeteer
          Using Puppeteer
          Advantages and Disadvantages
          Conclusion
          SHARE POST
        </p>
      </Box>
    </Box>
  );
}

export default Home;

// export default function jh() {
//   const router = useRouter();

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
//       <Button onClick={() => router.push("/signup")}>Singup</Button>
//       <Button onClick={() => router.push("/login")}>Login</Button>
//     </Box>
//   )
// }
