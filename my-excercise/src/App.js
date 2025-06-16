
import React from 'react'
import UseContextHook from './Components/UseContextHook';
export const OwnerContext = React.createContext()
function App() {
  return (
    <div>
      <OwnerContext.Provider value={'Shime'}>
        <UseContextHook />
      </OwnerContext.Provider>

    </div>
  );
}

export default App;
