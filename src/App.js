import { Login } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LoginPage from 'pages/loginPage'

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              crypto-exchange-client
            </Typography>
            {/* <IconButton
              size="large"
              edge="end"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <LoginPage></LoginPage>
      </Box>
      <Box sx={{ p: 3 }}>
      </Box>
      {/* <Fab
        color="secondary"
        sx={{
          position: 'fixed',
          right: ({ spacing }) => spacing(3),
          bottom: ({ spacing }) => spacing(3),
        }}
      >
        <AddIcon />
      </Fab> */}
    </>
  )
}
