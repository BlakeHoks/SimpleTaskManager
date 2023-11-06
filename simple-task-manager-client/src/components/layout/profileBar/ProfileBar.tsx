import { Avatar, createTheme, List, Paper, ThemeProvider } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { deepOrange } from '@mui/material/colors'
import styles from './ProfileBar.module.scss'
import { useAuth } from '../../../hooks/UseAuth.ts'
import { useNavigate } from 'react-router-dom'

export const ProfileBar = () => {
  const darkTheme = createTheme({ palette: { mode: 'light' } })
  const nav = useNavigate()
  const { logOut } = useAuth()

  const handleSettingsClick = () => {
    console.log('123')
    //nav()
  }

  const handleLogoutClick = () => {
    logOut()
    nav('/login')
  }

  return (
    <div className={styles.cont}>
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={3} sx={{ p: 0.1 }}>
          <Avatar sx={{ bgcolor: deepOrange[500], m: 1 }}>Y</Avatar>
        </Paper>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleSettingsClick}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogoutClick}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Выйти" />
            </ListItemButton>
          </ListItem>
        </List>
      </ThemeProvider>
    </div>
  )
}
