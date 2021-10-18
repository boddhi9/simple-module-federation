import React, { Suspense } from 'react'
const Search = React.lazy(() => import('search/App'))

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#efefef',
        color: '#000',
        border: '1px solid #333',
      }}
    >
      <h1>App Header</h1>
      <Suspense fallback={'loading...'}>
        <Search />
      </Suspense>
    </div>
  )
}

export default App
