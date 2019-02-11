import * as React from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import { HomeActions } from '../containers/home'
import { AppState } from '../store'

import { hocFactory } from '../helpers/hocHello'

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
        card: {
            width: 275,
            height: 300,
        }
  })
}

// type Props = OwnProps & WithStyles<typeof styles>
type Props = OwnProps & AppState & HomeActions & WithStyles<typeof styles>

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
        <Button onClick={props.handleOpen}>Open</Button> 

        <Grow in={props.card.open}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>this is card.</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </CardActions>
            </Card>
        </Grow>
      </div>
    </div>
  )
}

// export default withStyles(styles)(HomeComponent) 
export default withStyles(styles)(hocFactory(HomeComponent))
