import React, { Suspense } from 'react'
const Search = React.lazy(() => import('search/App'))

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#E3B448',
        color: '#000',
        padding: 10,
        fontFamily: 'Helvetica Neue',
      }}
    >
      <h2 style={{ fontWeight: 400 }}>Header</h2>
      <Suspense fallback={'loading...'}>
        <Search />
      </Suspense>
    </div>
  )
}

export default App
