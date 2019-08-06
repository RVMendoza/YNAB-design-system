/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({
  variant = 'primary',
  ...props
}) =>
  <div
    sx={{
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: 'primary', // picks up value from `theme.colors.primary`
    }}>
    {props.children}
  </div>
export default Button