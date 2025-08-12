import { useState } from 'react'
import { Button } from 'antd'
import Monetization from './components/monetization/Monetization'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Monetization>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Button Clicker</h1>
          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-4">Clicks:</p>
            <p className="text-6xl font-bold text-blue-600">{count}</p>
          </div>
          <Button 
            type="primary" 
            size="large" 
            onClick={handleClick}
            className="text-xl px-8 py-4 h-auto"
          >
            Click Me!
          </Button>
        </div>
      </div>
    </Monetization>
  )
}

export default App