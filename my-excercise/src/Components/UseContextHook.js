import React, {useContext} from 'react'
import {OwnerContext} from '../App'

function useContextHook() {
    const owner = useContext(OwnerContext)
  return (
    
    <div>
        {owner}
    </div>
  )
}

export default useContextHook