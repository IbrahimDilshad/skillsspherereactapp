import { Fab } from '@botpress/webchat'
import { useState } from 'react'

function App() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  return <Fab onClick={() => setIsWebchatOpen(!isWebchatOpen)} />
}