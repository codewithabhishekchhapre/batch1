import React from 'react'

function Protected({child}) {
     var is_login=true;
  return (
    <>
     {is_login?child:<h1>please login again</h1>}
    </>
  )
}

export default Protected