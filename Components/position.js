import React,{Component} from "react";
import {Rect} from "./RectType";
//这是位置设置区域
export class Position extends Component{
  constructor(props) {
     super(props);
     this.state = {
       x:100,
       y:100
     }
     this.change = this.change.bind(this);
  }
  change(e){
    this.setState({
       x:this.refs.x.value,
       y:this.refs.y.value
    })
    this.props.getPos(this.refs.x.value,this.refs.y.value);
  }

  render(){
    const {currentObj, getPos} = this.props;
    return(
      <Rect {...currentObj}
            change = {this.change}
            getPos = {getPos}
      />
    )
  }
};
