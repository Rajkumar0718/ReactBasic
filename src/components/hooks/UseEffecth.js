import React, { useEffect,useContext } from 'react'
import { userContext } from './UseStateh';
import UseContexth from './UseContexth';
const UseEffecth = (counter) => {
  const count = useContext(userContext);
  useEffect(()=>{
    console.log("useEffect hook in mounting phase");
  },[])
  useEffect(()=>{
    console.log("useEffect hook in update phase");
    return()=>{
      console.log("unmounting the useeffect",count )
    }
  },[counter])
  // []=>mounting phase ->that execute only once
  //[dependency]=>updating phase -> when ever we change the dependency it will rerendering ex =>[counter]
  //return statement is used to unmounting Some effects require cleanup
  return (
    <div><h2>UseEffect</h2>
    <p>The primary purpose of the useeffect hook is to handle the side effect in the funtional component.It has two parameter sideeffct and dependency</p>
    <p>
      side effect= inside your application not in ui
      <br/><br />
    [] mounting phase -that execute only once
    <br/><br />
    [dependency]=updating phase - when ever we change the dependency it will rerendering ex =[counter]
    <br /><br />
    Return statement is used to unmounting Some effects require cleanup
    <br /><br />
    Example in console
    </p>
    <UseContexth/>
    </div>
  )
}

export default UseEffecth
// the primary purpose of the useeffect hook is to handle the side effect in the funtional component
