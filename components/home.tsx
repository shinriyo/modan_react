import * as React from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

interface OwnProps {}

const styles = (theme: Theme) => {
    return createStyles({
        layout: {
            marginTop: 100,
            padding: theme.spacing.unit * 2,
            maxWidth: 1200,
            [theme.breakpoints.up(1200)]: {
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
  })
}

type Props = OwnProps & WithStyles<typeof styles>

const HomeComponent: React.SFC<Props> = (props: Props) => {
  const { classes } = props

  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color='inherit'>Hello World</Typography>
            </Toolbar>
        </AppBar>
      <div className={classes.layout}>
        <Typography>this is home component</Typography>
        <Button>Open</Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(HomeComponent) 
