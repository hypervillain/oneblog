import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks'

import { Box } from 'theme-ui'
import Posts from '../Posts'

import Header from '../components/Header'

import { postsRootQuery } from '../App'

const Index = ({ preloadedQuery }) => {
  const data = usePreloadedQuery(
    postsRootQuery,
    preloadedQuery
  );
  const respository = data?.gitHub ? data?.gitHub.repository : null;
  if (!respository || !data.gitHub) {
    return <p>cannot find Gihtub repository...</p>
  } else {
    return (
      <>
        <Header gitHub={data.gitHub} adminLinks={[]} />
        <Box as="main" mt={5} >
          <Posts repository={respository} />
        </Box>
      </>
    );
  }
}

export default Index