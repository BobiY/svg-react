import React,{Component} from "react";


export class EllipsePos extends Component{
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  change(e){
    this.props.currentObj.cx = this.refs.cx.value;
    this.props.currentObj.cy = this.refs.cy.value;
    this.props.getPos(this.refs.cx.value,this.refs.cy.value);
  }
  componentWillMount(){
    this.props.getPos(this.props.currentObj.cx,this.props.currentObj.cy);
  }
  render(){
    return(
      <div className = "posBox">
         <div>
            <h4>{"在此处选择圆心横坐标"}</h4>
            <span>CX:</span>
            {" "}
            <input type = "range" min = "0" max = "800" value = {this.props.currentObj.cx} onChange = {this.change} ref = "cx"/>
            {this.props.currentObj.cx}
         </div>
         <div>
            <h4>{"在此处选择圆心纵坐标"}</h4>
            <span>CY:</span>
            {" "}
            <input type = "range" min = "0" max = "800" ref = "cy" value = {this.props.currentObj.cy} onChange = {this.change}/>
            {this.props.currentObj.cy}
         </div>
      </div>
    )
  }
};

export class EllipseSize extends Component{
  constructor(props) {
     super(props);
  }
  change(){
    this.props.currentObj.rx = this.refs.rx.value;
    this.props.currentObj.ry = this.refs.ry.value;
    this.props.getSize(this.refs.rx.value,this.refs.ry.value)
  }
  render(){
    return(
      <div className = "sizeBox">
          <div>
              <h4>{"在此处选择椭圆横向半径"}</h4>
              <span>RX:</span>
              {" "}
              <input type = "range" min = "0" max = "400" value = {this.props.currentObj.rx} onChange = {this.change.bind(this)} ref = "rx"/>
              {this.props.currentObj.rx}
          </div>
          <div>
              <h4>{"在此处选择椭圆纵向半径"}</h4>
              <span>RY:</span>
              {" "}
              <input type = "range" min = "0" max = "400" value = {this.props.currentObj.ry} onChange = {this.change.bind(this)} ref = "ry"/>
              {this.props.currentObj.ry}
          </div>
      </div>
    )
  }
};
