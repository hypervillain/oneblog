import React from 'react'

import { Flex, Box } from 'theme-ui'

import Link from '../../PreloadLink';

import { PostBox } from '../../Post';

import config from '../../config';

import Avatar from '../Avatar'

const linkCurrentStyle = {
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'auto',
  fontWeight: '500'
}

const absBoxSx = {
  position: 'absolute',
  width: '70px',
  height: '100%',
  bg: '#F7F7F7',
  top: '0',
  left: '0',
  zIndex: '-1'
}

const Header = ({
  gitHub,
  adminLinks
}) => {
  return (
    <>
      <Flex
        as="header"
        bg="background"
        sx={{
          borderBottom: '1px solid black',
          alignItems: 'center',
          position: 'fixed',
          width: 'calc(100% - 16px - 2px)',
          left: '9px',
          top: '0'
        }}
      >
        <Box p={2} pl={4} sx={{ flex: '1 1 auto' }}>
          <Box p={2} pl={4} sx={absBoxSx} />
          <Link
            getProps={({ isCurrent }) => ({
              style: isCurrent ? linkCurrentStyle : { color: 'inherit' },
            })}
            to="/"
          >
            { config.title }
          </Link> | <a href="#">Index</a> | <a href="#">About</a>
        </Box>
        <Box p={2} pr={4} bg="tomato">
          <Avatar gitHub={gitHub} adminLinks={adminLinks} />
        </Box>
      </Flex>
    </>
  );
}

export default Header
