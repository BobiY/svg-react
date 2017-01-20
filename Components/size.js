import React,{Component} from "react";
import {RectSize} from "./component/rectType";
import {CircleSize} from "./component/circleType";
import {EllipseSize} from "./component/ellipseType";

//这是尺寸设置区域
export class Size extends Component{
  constructor(props) {
     super(props);
     this.state = {
       type:["rect","circle","ellipse","line"],
       typeComponent:[RectSize,CircleSize,EllipseSize]
     }
  }
  render(){
    const {currentObj, getSize} = this.props;
    var Type,t = this;
    this.state.type.forEach(function(val,index){
      if (val === currentObj.type) {
          Type = t.state.typeComponent[index]
      }
    })
    return(
        <Type currentObj = {currentObj}
                  getSize = {getSize}
        />
    )
  }
};
