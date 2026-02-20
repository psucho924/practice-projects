import { useState } from 'react'
import './index.css'
function App() {
  const [color, setcolor] = useState("white")

  return (
    <div className="body"
    style={{backgroundColor: color, position: 'relative',width:"100vw", height:"100vh",display:'flex',justifyContent: "center"}}
    >
    <div className="banner"
    style={{display: 'flex',flexWrap:'wrap',padding:8,backgroundColor:"white", justifyContent: "center",position:"absolute",bottom:48 
      , gap:8,borderRadius:53,
    }}
    >
      <button
      onClick={() => setcolor("red")}
      style={{backgroundColor:"red",borderRadius:53,text:"white"}}
      >
        red
      </button>
      <button
      onClick={() => setcolor("blue")}
      style={{backgroundColor:"blue",borderRadius:53,text:"white"}}
      >
        blue
      </button>
      <button
      onClick={() => setcolor("green")}
      style={{backgroundColor:"green",borderRadius:53,text:"white"}}
      >
        green
      </button>
      <button
      onClick={() => setcolor("purple")}
      style={{backgroundColor:"purple",borderRadius:53,text:"white"}}
      >
        purple
      </button>
      <button
      onClick={() => setcolor("yellow")}
      style={{backgroundColor:"yellow",borderRadius:53,text:"white"}}
      >
        yellow
      </button>
      <button
      onClick={() => setcolor('olive')}
      style={{backgroundColor:"olive",borderRadius:53,text:"white"}}
      >
        olive
      </button>
      <button
      onClick={() => setcolor('grey')}
      style={{backgroundColor:"grey",borderRadius:53,text:"white"}}
      >
        grey
      </button>
      <button
      onClick={() => setcolor("aqua")}
      style={{backgroundColor:"aqua",borderRadius:53,text:"white"}}
      >
        aqua
      </button>
      <button
      onClick={() => setcolor("salmon")}
      style={{backgroundColor:"salmon",borderRadius:53,text:"white"}}
      >
        salmon
      </button>
      <button
      onClick={() => setcolor("navy")}
      style={{backgroundColor:"navy",borderRadius:53,text:"white"}}
      >
        navy
      </button>
    </div>
   </div>
  )
}

export default App
