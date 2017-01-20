import React,{Component} from "react";


export class CirclePos extends Component{
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  change(e){
    this.props.currentObj.cx = this.refs.cx.value;
    this.props.currentObj.cy = this.refs.cy.value;
    console.log(this.props.currentObj);
    this.props.getPos(this.refs.cx.value,this.refs.cy.value);
  }
  componentWillMount(){
    console.log("我执行了");
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


export class CircleSize extends Component{
  constructor(props) {
     super(props);
  }
  change(){
    this.props.currentObj.r  = this.refs.r.value;
    console.log(this.props.currentObj.r);
    this.props.getSize()
  }
  render(){
    return(
      <div className = "sizeBox">
          <div>
              <h4>{"在此处选择圆形的半径"}</h4>
              <span>r:</span>
              {" "}
              <input type = "range" min = "0" max = "400" value = {this.props.currentObj.r} onChange = {this.change.bind(this)} ref = "r"/>
              {this.props.currentObj.r}
          </div>
      </div>
    )
  }
};
