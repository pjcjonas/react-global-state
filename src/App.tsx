import { Container } from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Login from './components/Login'
import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const navigate = useNavigate();
  
  const handleClick = (location: string) => {
    console.log(`/${location}`);
    navigate(`/${location}`)
    setCurrentPage(location)
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant={currentPage === "home" ? "contained" : "outlined"} onClick={() => handleClick('home')}>Home</Button>
          <Button variant={currentPage === "admin" ? "contained" : "outlined"} onClick={() => handleClick('admin')}>Admin</Button>
          <Button variant={currentPage === "login" ? "contained" : "outlined"} onClick={() => handleClick('login')}>Login</Button>
        </Stack>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </Container>

  )
}

export default App
