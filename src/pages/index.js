import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks'
import makeRoute from '../utils/makeRoute'
import Posts from '../Posts'

import Header from '../components/Header'

import { postsRootQuery } from '../App'

const Index = ({ preloadedQuery }) => {
  const data = usePreloadedQuery(
    postsRootQuery,
    preloadedQuery
  );
  console.log({ git: data && data.gitHub.repository })
  const respository = data?.gitHub ? data?.gitHub.repository : null;
  if (!respository || !data.gitHub) {
    return <p>cannot find Gihtub repository...</p>
  } else {
    return (
      <>
        <Header gitHub={data.gitHub} adminLinks={[]} />
        <main>
          <Posts repository={respository} />
        </main>
      </>
    );
  }
}

export default Index