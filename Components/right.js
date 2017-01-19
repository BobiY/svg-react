import React,{Component} from "react";

class RightPart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      width:300
    }
  }
  render(){
    const {pos, size ,style} = this.props;
    return(
      <div>
         <svg>
             <rect width = {size.w} height = {size.h} style = {style} x = {pos.x} y = {pos.y}/>
         </svg>
      </div>
    )
  }
}

export default RightPart;
