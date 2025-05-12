import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector, imageUrls } from './PhotoViewer/ImageSelector'

function App() {

  const [url, setNewUrl ] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
      <div>
          <h1>React Photo Viewer</h1>
          
          <PhotoViewer srcUrl={url} />
          <ImageSelector srcUrl={url} setNewUrl = {setNewUrl}/>

      </div>
  )
}

export default App
