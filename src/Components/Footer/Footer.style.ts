import { styled } from 'styled-components'
import Container from '../../styles/Container.style'
import { ReactComponent as FbIcon } from '../../assets/svgs-footer/fb.svg'
import { ReactComponent as InstaIcon } from '../../assets/svgs-footer/insta.svg'

const StyledContainer = styled(Container)`
  @media (max-width: 767px) {
    padding: 16% 41px 40px 5%;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 7% 40px 40px 40px;
  }
  @media screen and (min-width: 1279px) and (max-width: 1438px) {
    max-width: 100%;
    padding: 60px 40px 40px 40px;
  }
  @media (min-width: 1438px) {
    max-width: 100%;
    padding: 40px 84px 60px;
  }
`
const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
`

const StyledLinksList = styled.ul`
  @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  }
`
const StyledContactsList = styled.ul`
  @media (max-width: 767px) {
    margin-bottom: 18%;
  }
`
const ListItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${({ theme }) => theme.fontSizes.bodyText};
  }
`
const ContactItem = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${({ theme }) => theme.fontSizes.bodyText};
  }
`
const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.background};
  padding-bottom: 40px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 0;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding-bottom: 0;
  }
  @media (min-width: 1440px) {
    padding-bottom: 0;
  }
`
const AbsoluteLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`
const FlexWrapper = styled.div`
  @media (max-width: 768px) {
    display: block;
    padding: 0;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 0 0 83px 0;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1279px) and (max-width: 1440px) {
    padding: 0 0 83px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 0 0 91px 0;
  }
`

const FlexList = styled.ul`
  display: flex;
  gap: 24px;
`
const ContactListItem = styled.li`
  display: flex;
  gap: 12px;
  font-size: ${({ theme }) => theme.fontSizes.bodyText};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
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
  ContactItem,
}
