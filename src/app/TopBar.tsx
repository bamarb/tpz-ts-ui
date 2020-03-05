import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ReactComponent as Logo } from '../assets/tpz-logo-pink.svg'
import ExitIcon from '@material-ui/icons/ExitToApp'
import BulbFull from '../icons/LightbulbFull'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: 112,
      height: 40,
      marginTop: 4, //Align Logo Better
      flexGrow: 1,
    },
  }),
)
//TODO: Add a Marginto 4px for logo to align
export const TopBar: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Logo className={classes.logo} />
        <IconButton>
          <BulbFull />
        </IconButton>
        <IconButton>
          <ExitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
