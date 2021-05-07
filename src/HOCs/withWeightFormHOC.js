const withWeightFormHOC = (component) => {
  const Component = component;
  return function( props ) {
    return (
      <>
      <Component {...props} weight={true}/>
      </>
    )
  }
}

export default withWeightFormHOC;
