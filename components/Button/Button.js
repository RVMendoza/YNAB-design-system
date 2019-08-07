/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({
  variant = 'primary',
  ...props
}) =>
  <div
    sx={{
      px: '10px',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      variant: `buttons.${variant}`,
    }}>
    {props.children}
  </div>


export default Button