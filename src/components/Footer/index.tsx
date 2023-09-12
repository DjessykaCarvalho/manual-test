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
import { linkList } from './listLinks'

const Footer = () => {
  const getList = () =>
    linkList.map((item, i) => (
      <ContainerList key={i}>
        <TitleLink>{item.title}</TitleLink>
        {item.icons ? (
          <ContainerIcons>
            {item.links.map((link, j) => (
              <Image key={j} src={link.icon || ''} alt='' />
            ))}
          </ContainerIcons>
        ) : (
          item.links.map((link, j) => (
            <LinkDescription key={j}>{link.label}</LinkDescription>
          ))
        )}
      </ContainerList>
    ))

  return (
    <FooterContainer>
      <ContainerLogo>
        <Image src={logo} alt='' />
      </ContainerLogo>
      <ContainerLinks>{getList()}</ContainerLinks>
      <FooterText>© 2021 Manual. All rights reserverd</FooterText>
    </FooterContainer>
  )
}

export default Footer
