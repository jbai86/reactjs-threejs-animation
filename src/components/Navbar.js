import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  `

const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

`

const Logo = styled.img`
height:50px;

`

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none; 
`

const ListItem = styled.li`


`


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`

const Icon = styled.img`
 cursor: pointer;
 width: 20px;

`

const Button = styled.button`
 width: 100px;
 border-radius: 5px;
 cursor: pointer;
 padding: 10px;
 background-color: #da4ea2;
 color: white;
 border: none;

`

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src='./img/logo.png' />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            
            <Icons>
                <Icon src="./img/search.png"></Icon>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>

  )
}
