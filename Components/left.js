import React,{Component} from "react";
import { createChart, createCon} from "./tool";
import {Position} from "./position";
import {Size} from "./size";

class LeftPart extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    const {getPos, getSize, getStyle, createChart, currentObj} = this.props
     return(
       <div>
          <Button createChart = {createChart}/>
          <Position getPos = {getPos} currentObj = {currentObj}/>
          <Size getSize = {getSize} currentObj = {currentObj}/>
          <Color getStyle = {getStyle} currentObj = {currentObj}/>
       </div>
     )
  }
};

//创建不同形状的不同按钮
class Button extends Component{
  constructor(props) {
    super(props);
    this.state = {
      type:{
        rect:"rect",
        circle:"circle",
        ellipse:"ellipse",
        line:"line"
      }
    }
  }
  createChart(type){
     let obj = createChart(type);
     this.props.createChart(obj);
  }
  render(){
    const {type} = this.state;
    return(
      <div className = "btnBox">
          <button onClick = {this.createChart.bind(this,type.rect)}>{type.rect}</button>
          <button onClick = {this.createChart.bind(this,type.circle)}>{type.circle}</button>
          <button onClick = {this.createChart.bind(this,type.ellipse)}>{type.ellipse}</button>
          <button>{type.line}</button>
      </div>
    )
  }
};

//这是svg图像的样式设置区域
class Color extends Component{
  constructor(props) {
     super(props)
     this.state = {
        width:1
     }
  }
  change(){
     this.props.currentObj.style = {
       stroke:this.refs.stroke.value,
       strokeWidth:this.refs.strokeWidth.value,
       fill:this.refs.fill.value
     }
     this.props.getStyle(this.refs.stroke.value,this.refs.fill.value,this.refs.strokeWidth.value)
  }
  render(){
    const {style} = this.props.currentObj;
    console.log(style);
    return(
      <div className = "colorBox">
         <p><span>stoke:</span>{" "}<input type = "color" onChange = {this.change.bind(this)} ref = "stroke" value = {style.stroke}/></p>
         <p><span>fill:</span>{" "}<input type = "color" onChange = {this.change.bind(this)} ref = "fill" value = {style.fill}/></p>
         <p><span>stoke-width:</span>{" "}<input type = "range" onChange = {this.change.bind(this)} ref = "strokeWidth" min = "0" max = "10" value = {style.strokeWidth}/>{}</p>
      </div>
    )
  }
};




export default LeftPart;
