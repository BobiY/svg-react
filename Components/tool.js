
//处理生成图形的函数
let chartId = 2;
export function createChart(type) {
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
    y2,
    style
}
*/
//各个图形的名字数据
