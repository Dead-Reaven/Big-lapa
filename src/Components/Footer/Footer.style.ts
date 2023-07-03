import { styled } from 'styled-components'
import Container from '../../styles/Container.style'
import { ReactComponent as FbIcon } from '../../assets/svgs-footer/fb.svg'
import { ReactComponent as InstaIcon } from '../../assets/svgs-footer/insta.svg'

const StyledContainer = styled(Container)`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    padding: 60px 41px 40px 16px;
    max-width: 393px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 60px 40px 40px 40px;
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    max-width: 100%;
    padding: 60px 40px 40px 40px;
  }
`
const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`

const StyledLinksList = styled.ul`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`
const StyledContactsList = styled.ul`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    margin-bottom: 60px;
  }
`
const ListItem = styled.li`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.subheadline};
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
  }
`
const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.background};
  padding-bottom: 40px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 12px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding-bottom: 0;
  }
`
const AbsoluteLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`
const FlexWrapper = styled.div`
  padding: 60px 0 83px 0;

  @media screen and (min-width: 393px) and (max-width: 767px) {
    display: block;
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0 0 83px 0;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding: 0 0 83px 0;
    display: flex;
    justify-content: space-between;
  }
`

const FlexList = styled.ul`
  display: flex;
  gap: 24px;
`
const ContactListItem = styled.li`
  display: flex;
  gap: 12px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
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
  StyledContainer,
  StyledLinksList,
  StyledContactsList,
}
