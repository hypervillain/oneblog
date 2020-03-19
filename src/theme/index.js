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


// .add - reaction - emoji {
//     fill: rgb(88, 96, 105);
//     stroke: rgb(88, 96, 105);
//     display: flex;
//     align - items: center;
//     font - size: 16 px;
//     cursor: pointer;
//     outline: none;
//   }

//   .add - reaction - emoji: hover {
//     fill: #0366d6;
//   stroke: # 0366 d6;
//   }


// .layout {
//   box - sizing: border - box;
//   max - width: 704 px;
//   margin: auto;
//   width: 100 % ;
//   height: 100 % ; -
//   webkit - box - pack: center; -
//   webkit - justify - content: center; -
//   ms - flex - pack: center;
//   justify - content: center;
//   grid - template - rows: auto 1 fr;
//   overflow - wrap: break -word;
// }

// blockquote {
//   font - style: italic;
//   box - shadow: inset 3 px 0 0 0 rgba(0, 0, 0, 0.27);
//   margin - inline - start: 0;
//   margin - inline - end: 0;
//   padding - left: 1 em;
// }

// li p {
//   margin: 0;
// }

const Reset = () => (
  <Global
    styles={{
      body: {
        margin: '0',
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