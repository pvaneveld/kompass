import React, { ReactNode } from "react"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"

interface LayoutProps {
  sideNav: ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {props.sideNav}
      </Grid>
      <Grid item xs={9}>
        asd
      </Grid>
    </Grid>
  )
}
