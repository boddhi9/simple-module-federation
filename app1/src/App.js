import React, { Suspense } from 'react'
const Header = React.lazy(() => import('app2/App'))
const Footer = React.lazy(() => import('app3/App'))

const App = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Header />
      </Suspense>
      <div
        style={{
          margin: 10,
          padding: 10,
          textAlign: 'center',
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        <h1>Content</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
