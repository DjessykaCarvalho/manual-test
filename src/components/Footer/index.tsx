'use client'

import Image from 'next/image'
import {
  ContainerIcons,
  ContainerLinks,
  ContainerList,
  ContainerLogo,
  FooterContainer,
  FooterText,
  LinkDescription,
  TitleLink
} from './styles'
import logo from '@/assets/svg/logo.svg'
import { ILinkList, linkList } from '@/data/listLinks'

const Footer = () => {
  const handleOpenLink = (url: string) => window.open(url, '_blank')

  const getIcons = (linkItem: ILinkList) => (
    <ContainerIcons>
      {linkItem.links.map((link, j) => (
        <Image
          key={j}
          src={link.icon || ''}
          alt=''
          onClick={() => link?.url && handleOpenLink(link?.url)}
        />
      ))}
    </ContainerIcons>
  )

  const getLinks = (linkItem: ILinkList) =>
    linkItem.links.map((link, j) => (
      <LinkDescription
        key={j}
        onClick={() => link?.url && handleOpenLink(link?.url)}
      >
        {link.label}
      </LinkDescription>
    ))

  const getList = () =>
    linkList.map((item, i) => (
      <ContainerList key={i}>
        <TitleLink>{item.title}</TitleLink>
        {item.icons ? getIcons(item) : getLinks(item)}
      </ContainerList>
    ))

  return (
    <FooterContainer>
      <ContainerLogo>
        <Image src={logo} alt='' />
      </ContainerLogo>
      <ContainerLinks>{getList()}</ContainerLinks>
      <FooterText>© 2023 Manual. All rights reserverd</FooterText>
    </FooterContainer>
  )
}

export default Footer
