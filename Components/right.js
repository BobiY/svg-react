import React,{Component} from "react";

class RightPart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      width:300
    }
    this.draw = this.draw.bind(this)
  }
  draw(){
    let tu = [];
    this.props.store.forEach(function (val,index) {
        if(val.type === "rect"){
          tu.push(<rect width = {val.width} height = {val.height} style = {val.style} key = {index} x = {val.x} y = {val.y}/>)
        }
        if(val.type === "circle"){
          tu.push(<circle cx = {val.cx} cy = {val.cy} style = {val.style} r = {val.r} key = {index}/>)
        }
        if(val.type === "ellipse"){
          tu.push(<ellipse cx = {val.cx} cy = {val.cy} style = {val.style} rx = {val.rx} ry = {val.ry} key = {index}/>)
        }
    })
    return tu
  }
  render(){
    const {pos, size ,style} = this.props;
    return(
      <div>
         <svg>
             {this.draw()}
         </svg>
      </div>
    )
  }
}

export default RightPart;
