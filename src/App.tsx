import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './PhotoViewer/ImageSelector'

function App() {

  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/>
          <ImageSelector/>
      </div>
  )
}

export default App
