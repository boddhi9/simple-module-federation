import React, { Suspense } from 'react'
const Search = React.lazy(() => import('search/App'))

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#E3B448',
        color: '#000',
        padding: 5,
        margin: 10,
      }}
    >
      <h2>Header</h2>
      <Suspense fallback={'loading...'}>
        <Search />
      </Suspense>
    </div>
  )
}

export default App
