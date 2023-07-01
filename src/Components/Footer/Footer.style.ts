import { styled } from 'styled-components'
import Container from '../../styles/Container.style'
import { ReactComponent as FbIcon } from '../../assets/svgs-footer/fb.svg'
import { ReactComponent as InstaIcon } from '../../assets/svgs-footer/insta.svg'
import device from '../../styles/Sizes'

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`
const ListItem = styled.li`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 0;
  }
`
const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.background};
  padding-bottom: 40px;
`
const AbsoluteLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`
const FlexWrapper = styled(Container)`
  display: flex;
  padding: 60px 0 83px 0;
  justify-content: space-between;
  @media screen and ${device.mobile} {
    display: block;
    padding: 16px 60px 41px 40px;
  }
`

const FlexList = styled.ul`
  display: flex;
  gap: 24px;
`
const ContactListItem = styled.li`
  display: flex;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`
const SocialIcons = styled.a`
  &:hover svg {
    transition: ${({ theme }) => theme.transitions.long};
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`
const StyledIcon = styled(FbIcon)`
  &:hover path {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`
const StyledInstaIcon = styled(InstaIcon)`
  &:hover path {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`
export {
  FooterSection,
  ListItem,
  Paragraph,
  AbsoluteLink,
  FlexWrapper,
  FlexList,
  ContactListItem,
  SocialIcons,
  StyledIcon,
  StyledInstaIcon,
}
