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
        {
          type:"rect",
          id:1,
          width:300,
          height:300,
          x:100,
          y:100,
          style:{
            stroke:"#ff0000",
            strokeWidth:1,
            fill:"#ffffff"
          }
        }
      ],
      currentObj:{}
    }
    this.getPos = this.getPos.bind(this);
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
  getCurrentObj(val){
     this.setState({
       currentObj:val
     })
  }
  createChart(obj){
     this.state.store.push(obj)
     let num = this.state.store.length-1;
     this.getPos(this.state.store[num].x,this.state.store[num].y);
     this.getSize(this.state.store[num].width,this.state.store[num].height)
  }
  render(){
    if(this.state.store.length>0){
        var num = this.state.store.length-1;
    }
    let temObj = this.state.currentObj.id ? this.state.currentObj : this.state.store[num];
    return(
      <div className = "contain">
         <div className = "leftBox">
            <LeftPart getPos = {this.getPos}
                      getSize = {this.getSize.bind(this)}
                      getStyle = {this.getStyle.bind(this)}
                      createChart = {this.createChart.bind(this)}
                      currentObj = {temObj}
             />
         </div>
         <div className = "rightBox">
            <RightPart pos = {this.state.pos}
                       size = {this.state.size}
                       style = {this.state.style}
                       store = {this.state.store}
                       getCurrentObj = {this.getCurrentObj.bind(this)}
            />
         </div>
      </div>
    )
  }
}


render(<App />,document.getElementById('app'));
