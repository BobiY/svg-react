import React ,{Component} from "react";
import {render} from "react-dom";
import LeftPart from "../Components/left";
import RightPart from "../Components/right";
import "../style/index.css";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pos:{
        x:100,
        y:100
      },
      size:{
        w:300,
        h:300
      },
      style:{
        stroke:"#f00",
        fill:"#fff",
        strokeWidth:1
      },
      store:[

      ]
    }
  }
  getPos(x,y){
    this.setState({
       pos:{
         x,
         y
       }
    })
  }
  getSize(w,h){
    this.setState({
      size:{
        w,
        h
      }
    })
  }
  getStyle(stroke,fill,strokeWidth){
     this.setState({
       style:{
         stroke,
         fill,
         strokeWidth
     }
     })
  }
  createChart(obj){
     this.setState(function (prevState) {
          prevState.store.push(obj)
          return{
            store:prevState.store
          }
     })
     let num = this.state.store.length;
       console.log(this.state.store);
  }
  render(){
    if(this.state.store.length>0){
        var num = this.state.store.length-1;
    }
    return(
      <div className = "contain">
         <div className = "leftBox">
            <LeftPart getPos = {this.getPos.bind(this)}
                      getSize = {this.getSize.bind(this)}
                      getStyle = {this.getStyle.bind(this)}
                      createChart = {this.createChart.bind(this)}
                      currentObj = {this.state.store[num]}
             />
         </div>
         <div className = "rightBox">
            <RightPart pos = {this.state.pos}
                       size = {this.state.size}
                       style = {this.state.style}
            />
         </div>
      </div>
    )
  }
}


render(<App />,document.getElementById('app'));
