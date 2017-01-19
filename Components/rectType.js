import React,{Component} from "react";

export class Rect extends Component{
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
  componentWillMount(){
    this.setState({
      x:this.props.x,
      y:this.props.y
    })
  }
  render(){
    return(
      <div className = "posBox">
         <div>
            <h4>{"在此处选择横坐标"}</h4>
            <span>X:</span>
            {" "}
            <input type = "range" min = "0" max = "800" defaultValue = "100" onChange = {this.change} ref = "x"/>
            {this.state.x}
         </div>
         <div>
            <h4>{"在此处选择纵坐标"}</h4>
            <span>Y:</span>
            {" "}
            <input type = "range" min = "0" max = "800" ref = "y" defaultValue = "100" onChange = {this.change}/>
            {this.state.y}
         </div>
      </div>
    )
  }
}
