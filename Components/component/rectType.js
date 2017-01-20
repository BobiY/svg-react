import React,{Component} from "react";

export class RectPos extends Component{
  constructor(props) {
     super(props);
     this.change = this.change.bind(this);
  }
  change(e){
    this.props.currentObj.x = this.refs.x.value;
    this.props.currentObj.y = this.refs.y.value;
    this.props.getPos(this.refs.x.value,this.refs.y.value);
  }
  componentWillMount(){
    this.props.getPos(this.props.currentObj.x,this.props.currentObj.y);
  }
  render(){
    return(
      <div className = "posBox">
         <div>
            <h4>{"在此处选择横坐标"}</h4>
            <span>X:</span>
            {" "}
            <input type = "range" min = "0" max = "800" value = {this.props.currentObj.x} onChange = {this.change} ref = "x"/>
            {this.props.currentObj.x}
         </div>
         <div>
            <h4>{"在此处选择纵坐标"}</h4>
            <span>Y:</span>
            {" "}
            <input type = "range" min = "0" max = "800" ref = "y" value = {this.props.currentObj.y} onChange = {this.change}/>
            {this.props.currentObj.y}
         </div>
      </div>
    )
  }
};

//矩形尺寸组件
export class RectSize extends Component{
  constructor(props) {
     super(props);
  }
  change(){
    this.props.currentObj.width = this.refs.width.value;
    this.props.currentObj.height = this.refs.height.value;
    this.props.getSize(this.refs.width.value,this.refs.height.value)
  }
  render(){
    return(
      <div className = "sizeBox">
          <div>
              <h4>{"在此处选择矩形宽度"}</h4>
              <span>width:</span>
              {" "}
              <input type = "range" min = "0" max = "1000" value = {this.props.currentObj.width} onChange = {this.change.bind(this)} ref = "width"/>
              {this.props.currentObj.width}
          </div>
          <div>
              <h4>{"在此处选择矩形高度"}</h4>
              <span>height:</span>
              {" "}
              <input type = "range" min = "0" max = "1000" value = {this.props.currentObj.height} onChange = {this.change.bind(this)} ref = "height"/>
              {this.props.currentObj.height}
          </div>
      </div>
    )
  }
};
