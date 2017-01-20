import React,{Component} from "react";
import {RectPos} from "./component/rectType";
import {CirclePos} from "./component/circleType";
import {EllipsePos} from "./component/ellipseType";

import {getType,type,typeComponent} from "./tool";
//这是位置设置区域
export class Position extends Component{
  constructor(props) {
     super(props);
     this.state = {
       type:["rect","circle","ellipse","line"],
       typeComponent:[RectPos,CirclePos,EllipsePos]
     }

  }

  render(){
    const {currentObj, getPos} = this.props;
    const t = this;
    var Type;
    this.state.type.forEach(function(val,index){
      if (val === currentObj.type) {
          Type = t.state.typeComponent[index]
      }
    })
    return(
      <Type currentObj = {currentObj}
            getPos = {getPos}
      />
    )
  }
};
