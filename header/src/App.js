import React, { Suspense } from 'react'
const Search = React.lazy(() => import('search/App'))

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#efefef',
        color: '#000',
        border: '1px solid #ececec',
        padding: 5,
        margin: 10,
      }}
    >
      <h1>Header</h1>
      <Suspense fallback={'loading...'}>
        <Search />
      </Suspense>
    </div>
  )
}

export default App
