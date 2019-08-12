/** @jsx jsx */
import { jsx } from 'theme-ui'

const YNABButton = ({
  variant = 'primary',
  ...props
}) =>
  <div
    sx={{
      px: '10px',
      // fontSize: 4, // picks up value from `theme.fontSizes[4]`
      variant: `buttons.${variant}`,
      fontFamily: 'body',
      fontWeight: `bold`
    }}>
    {props.children}
    <h1>hello okay</h1>
  </div>


export default YNABButton