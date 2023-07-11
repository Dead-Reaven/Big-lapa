import { styled } from 'styled-components'

import { ReactComponent as FbIcon } from './svgs-footer/fb.svg'
import { ReactComponent as InstaIcon } from './svgs-footer/insta.svg'

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.green};
  @media screen and (max-width: 1279px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1279px) and (max-width: 1438px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  @media (min-width: 1438px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`

const FlexWrapper = styled.div`
  padding-bottom: 55px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 55px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 0 0 83px 0;
  }
  @media screen and (min-width: 1279px) and (max-width: 1440px) {
    padding: 0 0 83px 0;
  }
`

const StyledLinksList = styled.ul`
  /* @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  } */
`

const ListItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 12px;
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

const AbsoluteLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`

const StyledContactsList = styled.ul`
  /* @media (max-width: 767px) {
    margin-bottom: 18%;
  } */
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

const FlexList = styled.ul`
  display: flex;
  gap: 24px;
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
  StyledLinksList,
  StyledContactsList,
  ContactItem,
}
