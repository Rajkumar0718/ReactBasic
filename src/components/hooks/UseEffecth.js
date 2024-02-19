import React, { useEffect } from 'react'

const UseEffecth = (counter) => {
  useEffect(()=>{
    console.log("useEffect hook in mounting phase");
  },[])
  useEffect(()=>{
    console.log("useEffect hook in update phase");
  },[counter])
  // []=>mounting phase ->that execute only once
  //[dependency]=>updating phase -> when ever we change the dependency it will rerendering ex =>[counter]
  return (
    <div>UseEffect</div>
  )
}

export default UseEffecth
