import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import './App.css'
import useLocalStorage from '../hooks/useLocalStorage';


function App() {
  const [html, setHtml] =useLocalStorage('html', '');
  const [css, setCss] =useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('javascript', '');
  const [srcDoc, setSrcDoc] = useState('')



  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className='container1'>
     <div className='head1'>
     <h2>  Online_Code_Editor</h2>
     
     </div>
     
      
    
      <div className="pane top-pane">
       
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          
        />
        
        
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        
      
       
      
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
         
        
      </div>
      
      <div className="pane">
      <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      <div className='footer'>
        <p>Created by Md Ali Hasan | All rights reserved!</p>
      </div>
    </div>
  )
}

export default App;