import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'

const RoundedButton = styled(Button)`
  background: transparent linear-gradient(#E7774A, #DF5B27) repeat scroll 0% 0%;
  border: 0 none;
  border-radius: 22px;
  color: #FFF;
  cursor: pointer;
  display: block;
  height: 42px;
  margin: 20px auto 0;
  width: 182px;
`

RoundedButton.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default RoundedButton
