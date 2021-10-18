import React, { Suspense } from 'react'
const App1 = React.lazy(() => import('app1/App'))
const App2 = React.lazy(() => import('app2/App'))

const App = () => {
  return (
    <div style={{ margin: 10, bordeRadius: 10, border: '1px solid #999' }}>
      <Suspense fallback={'loading...'}>
        <App1 />
      </Suspense>
      <Suspense fallback={'loading...'}>
        <App2 />
      </Suspense>
    </div>
  )
}

export default App