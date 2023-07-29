import { styled } from 'styled-components'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import { theme } from '../../../../Components/UI/Theme.styles'
import Button from '../../../../Components/UI/Button.styles'

const PartnersStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`

const PartnersLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoPartners = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  ${TitleH3} {
    color: ${theme.colors.grey};
  }
`

const PartnersItems = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const PartnersItemStyled = styled.div`
  padding: 26px 10px;
  height: 100px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }

  button {
    z-index: 2;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const AddPartnerStyled = styled.div`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-size: ${theme.fontSizes.buttonText};
      font-weight: ${theme.fontWeights.semiBold};
    }
  }

  input[type='file'] {
    height: 1px;
    width: 1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`

const PartnersButton = styled(Button)`
  width: 100%;
  max-width: 400px;
`

export {
  PartnersStyled,
  PartnersLogos,
  NoPartners,
  PartnersItems,
  PartnersItemStyled,
  AddPartnerStyled,
  PartnersButton,
}
