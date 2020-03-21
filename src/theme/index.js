/** @jsx jsx */
import React, { memo } from 'react'

import { Global } from '@emotion/core'
import { jsx, useThemeUI, ThemeProvider as ThemeP, Styled } from 'theme-ui'
import { system } from '@theme-ui/presets/dist'
import theme from './theme'

const ThemeProvider = memo(({ children, ...props }) => (
  <ThemeP theme={{ ...system, ...theme }} {...props}>
    <Styled.root>{children}</Styled.root>
  </ThemeP>
))

const Reset = () => (
  <Global
    styles={{
      html: {
        background: 'tomato'
      },
      body: {
        margin: '0px 8px 0 8px',
        border: '1px solid #111'
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
      },
      small: {
        fontSize: '100%',
      },
      a: {
        textDecoration: 'none',
      },
      'a:hover': {
        textDecoration: 'underline'
      },
      'a:visited': {
        color: 'inherit'
      },
      button: {
        border: 0,
        padding: 0,
        fontSize: '100%',
        backgroundColor: 'transparent',
      },
      'pre code': {
        background: 'none',
      },
      pre: {
        overflow: 'scroll'
      },
      code: {
        background: 'rgb(248, 248, 248)',
        fontSize: '0.8 em',
        padding: '2px 4px'
      }
    }}
  />
)

export {
  useThemeUI as useTheme,
  theme,
  Reset,
  ThemeProvider as default,
}