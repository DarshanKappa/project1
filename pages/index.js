import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router"


export default function ({ }) {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
      <Button onClick={() => router.push("/signup")}>Singup</Button>
      <Button onClick={() => router.push("/login")}>Login</Button>
    </Box>
  )
}
