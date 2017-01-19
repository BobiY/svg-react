import React,{Component} from "react";

let chartId = 1;
class LeftPart extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const {getPos, getSize, getStyle, createChart} = this.props
     return(
       <div>
          <Button createChart = {createChart}/>
          <Position getPos = {getPos}/>
          <Size getSize = {getSize}/>
          <Color getStyle = {getStyle}/>
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
          <button onClick = {this.createChart.bind(this,type.line)}>{type.line}</button>
      </div>
    )
  }
};

//这是位置设置区域
class Position extends Component{
  constructor(props) {
     super(props);
     this.state = {
       x:100,
       y:100
     }
  }
  change(e){
    this.setState({
       x:this.refs.x.value,
       y:this.refs.y.value
    })
    this.props.getPos(this.refs.x.value,this.refs.y.value)
  }

  render(){
    return(
      <div className = "posBox">

         <div>
            <h4>{"在此处选择横坐标"}</h4>
            <span>X:</span>
            {" "}
            <input type = "range" min = "0" max = "800" defaultValue = "100" onChange = {this.change.bind(this)} ref = "x"/>
            {this.state.x}
         </div>
         <div>
            <h4>{"在此处选择纵坐标"}</h4>
            <span>Y:</span>
            {" "}
            <input type = "range" min = "0" max = "800" ref = "y" defaultValue = "100" onChange = {this.change.bind(this)}/>
            {this.state.y}
         </div>
      </div>
    )
  }
};

//这是尺寸设置区域
class Size extends Component{
  constructor(props) {
     super(props);
     this.state = {
       width:300,
       height:300
     }
  }
  change(){
    this.setState({
      width:this.refs.width.value,
      height:this.refs.height.value
    });
    this.props.getSize(this.refs.width.value,this.refs.height.value)
  }
  render(){
    return(
      <div className = "sizeBox">
          <div>
              <h4>{"在此处选择矩形宽度"}</h4>
              <span>width:</span>
              {" "}
              <input type = "range" min = "0" max = "1000" defaultValue = "300" onChange = {this.change.bind(this)} ref = "width"/>
              {this.state.width}
          </div>
          <div>
              <h4>{"在此处选择矩形高度"}</h4>
              <span>height:</span>
              {" "}
              <input type = "range" min = "0" max = "1000" defaultValue = "300" onChange = {this.change.bind(this)} ref = "height"/>
              {this.state.height}
          </div>
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
     this.setState({
       width:this.refs.strokeWidth.value
     })
     this.props.getStyle(this.refs.stroke.value,this.refs.fill.value,this.refs.strokeWidth.value)
  }
  render(){
    return(
      <div className = "colorBox">
         <p><span>stoke:</span>{" "}<input type = "color" onChange = {this.change.bind(this)} ref = "stroke" defaultValue = "#ff0000"/></p>
         <p><span>fill:</span>{" "}<input type = "color" onChange = {this.change.bind(this)} ref = "fill" defaultValue = "#ffffff"/></p>
         <p><span>stoke-width:</span>{" "}<input type = "range" onChange = {this.change.bind(this)} ref = "strokeWidth" min = "0" max = "10" defaultValue = "1"/>{}</p>
      </div>
    )
  }
};

function createChart(type) {
    let temObj = {}
    if(type === "rect"){
        temObj = {
          type,
          id:chartId,
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
    }
    if(type === "circle"){
        temObj = {
          type,
          id:chartId,
          cx:200,
          cy:200,
          r:50,
          style:{
            stroke:"#ff0000",
            strokeWidth:1,
            fill:"#ffffff"
          }
       }
    }
    if(type === "ellipse"){
        temObj = {
          type,
          id:chartId,
          cx:50,
          cy:50,
          rx:100,
          ry:50,
          style:{
            stroke:"#ff0000",
            strokeWidth:1,
            fill:"#ffffff"
          }
       }
    }
    if(type === "line"){
        temObj = {
          type,
          id:chartId,
          x1:0,
          y1:0,
          x2:50,
          y2:50,
          style:{
            stroke:"#ff0000",
            strokeWidth:1,
            fill:"#ffffff"
          }
       }
    }
    chartId++;
    return temObj;
}
/*
   矩形
   {
    type:"rect",
    id:1,
    x
    y
    width
    height
    style
 }

   圆形
   {
     type:"circle",
     id:1,
     cx,
     cy,
     style
  }
  椭圆
  {
    type:"ellipse",
    cy,
    cx
    rx
    ry
    style
  }
  直线
  {
    type:"line",
    id:1,
    x1,
    y1,
    x2,
    y2
}
*/



export default LeftPart;
