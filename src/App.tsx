import React, { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import FileList from 'wnderlvst-react-components/dist/components/FileList'
import './App.css'

function App() {
  return (
    <div className='app'>
      <FileList items={
        [{name: "test", isDirectory: true, items: [{name: "test3"}]}, {name: "test2"}]
      }/>
    </div>
  )
}

export default App
