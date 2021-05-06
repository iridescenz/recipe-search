const withWeightFormHOC = (component) => {
  const Component = component;
  return function( props ) {
    return (
      <>
      <Component {...props} weight={true}/>
      {console.log(props)}
      </>
    )
  }
}

export default withWeightFormHOC;
