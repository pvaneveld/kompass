import React, { ReactNode } from "react"
import Container from "@material-ui/core/Container"
import { Slider, TextField, FormLabel } from "@material-ui/core"

interface SideNavProps {}

export const SideNav: React.FunctionComponent<SideNavProps> = props => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <TextField id="outlined-basic" label="Locatie" placeholder="voer je locatie in" variant="outlined" />

      <FormLabel>
        Search radius
      </FormLabel>
      <Slider value={value} onChange={handleChange} placeholder="straal"  aria-labelledby="continuous-slider" />
    </Container>
  )
}
