import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks'
import makeRoute from './utils/makeRoute'
import Posts from './Posts'

import Header from './components/Header'

// const postsRootQuery = graphql `
//   # repoName and repoOwner provided by fixedVariables
//   query IndexPagssse_Query($repoName: String!, $repoOwner: String!)
//     @persistedQueryConfiguration(
//       accessToken: {environmentVariable: "OG_GITHUB_TOKEN"}
//       fixedVariables: {environmentVariable: "REPOSITORY_FIXED_VARIABLES"}
//       cacheSeconds: 300
//     ) {
//     gitHub {
//       ...Avatar_gitHub @arguments(repoName: $repoName, repoOwner: $repoOwner)
//       repository(name: $repoName, owner: $repoOwner) {
//         ...Posts_repository
//       }
//     }
//   }
// `;

// const Index = ({ preloadedQuery }) => {
//   const data = usePreloadedQuery(
//     postsRootQuery,
//     preloadedQuery
//   );
//   console.log({ git: data && data.gitHub.repository })
//   const respository = data?.gitHub ? data?.gitHub.repository : null;
//   if (!respository || !data.gitHub) {
//     return <p>cannot find Gihtub repository...</p>
//   } else {
//     return (
//       <>
//         <Header gitHub={data.gitHub} adminLinks={[]} />
//         <main className="layout">
//           <Posts repository={respository} />
//         </main>
//       </>
//     );
//   }
// }

// export default makeRoute({
//   path: '/',
//   query: postsRootQuery,
//   getVariables(_) {
//     return {};
//   },
//   component: Index,
// });