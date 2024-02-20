import React, { useContext } from 'react'
import { userContext } from './UseStateh';
const UseContexth = () => {
  const count = useContext(userContext);
  return (
    <div><h2>UseContext   { count} <br /><br /> </h2>
      <p>
        React context is a way to manage state globally <br /><br />
        prop-drilling-passing a props from higher order component to lower<br /><br />
        3step 1.create a context 2.provider 3.UseContext hook to implement consumer

      </p>

    </div>
  )
}

export default UseContexth
