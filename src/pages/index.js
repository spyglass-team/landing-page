import * as React from 'react';
import { Grid, Container, Navbar, Text } from '@nextui-org/react';

function Home({ Component }) {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={'static'}>
        <Navbar.Brand href='#'>
          <Text b color='inherit'>
            Spyglass
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='md'>
          <Navbar.Link href='https://github.com/oslabs-beta/spyglass'>
            Github
          </Navbar.Link>
          <Navbar.Link href='#'>LinkedIn</Navbar.Link>
          <Navbar.Link href='#'>Press</Navbar.Link>
          <Navbar.Link href='#'>Contact Us</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container
        justify='center'
        css={{ height: '500px', backgroundImage: '../../public/stars.jpg' }}
      ></Grid.Container>
      {/* 3 Displaying Product Cards */}
    </Container>
  );
}

export default Home;
