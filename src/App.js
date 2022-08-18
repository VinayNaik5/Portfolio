import { useState } from 'react';
import './App.css';
import Circle from './components/circle';
function App() {
  const colors = ["rgb(225,125,96)","rgb(133,220,186)","rgb(232,168,124)","rgb(195,141,158)","rgb(65,180,164)","#ADEFD1FF",
"#D6ED17FF","#D85A7FFF","#97BC62FF","#E0C568FF","#CBCE91FF","#EA738DFF","#E3CD81FF","#B1B3B3FF"]
  const[color,setColor] = useState(colors[Math.floor(Math.random()*colors.length)])
  
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const getPosition = () =>{
    let w = Math.floor(Math.random() * ((windowDimensions.width-10) - 50))
    let h = Math.floor(Math.random() * ((windowDimensions.height-50) - 50))
    return {width: w,height: h}
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [circlePosition,setCirclePosition] = useState(getPosition())

  const changeColor = () =>{
    console.log(windowDimensions);
    setColor(colors[Math.floor(Math.random()*colors.length)])
    console.log("pressed",color)
    setCirclePosition(getPosition())
    console.log(windowDimensions,circlePosition)
  }

  return (
    <>
    <div className="App" style={{backgroundColor: color}}>
      <div className="circle_class " onClick={changeColor} style={{position:"absolute", right:circlePosition.width, top: circlePosition.height, animation: "appear"}}>
        <Circle/>
      </div>
      <div className='content'>
        <h1 className='name'>Vinay Naik</h1>
        <p className='p'>somthing about me </p>
      </div> 
    </div>
    </>
  );
}

export default App;