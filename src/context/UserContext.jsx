import React, { createContext } from 'react'
export const UserContext = createContext()
const UserContext = ({children}) => {

  return (
    <div>
      <UserContext.Provider >
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContext
