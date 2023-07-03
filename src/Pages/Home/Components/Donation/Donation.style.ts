import styled from 'styled-components'
import firstGreenRectangle from '../../../../assets/img/First_green_rectangle.svg'
import secondGreenRectangle from '../../../../assets/img/Second_green_rectangle.svg'

const StyledDonation = styled.section`
  background-image: url(${firstGreenRectangle}), url(${secondGreenRectangle});
  background-repeat: no-repeat;
  background-position: left top, right bottom;
`
export default StyledDonation
