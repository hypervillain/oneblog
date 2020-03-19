function makeRoute({
  path,
  query,
  getVariables,
  component
}) {
  return {
    path,
    query,
    getVariables,
    component,
    preload(cache: PreloadCache, environment: Environment, props: any) {

      // const cache = React.useContext(PreloadCacheContext)

      const preloadedQuery = cache.get(
        environment,
        query,
        getVariables(props),
        {
          fetchPolicy: 'store-and-network',
        },
      );
      if (props.notificationContext) {
        try {
          preloadedQuery.source.subscribe({
            complete: () => {
              props.notificationContext.clearCorsViolation()
            },
            error: e => {
              if (e.type === 'missing-cors') {
                props.notificationContext.setCorsViolation()
              }
            },
          });
        } catch (e) {
          console.error('error in cors check', e)
        }
      }
      return preloadedQuery
    },
  };
}

export default makeRoute
