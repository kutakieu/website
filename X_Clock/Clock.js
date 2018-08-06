class Clock{

  constructor(col, cX, cY, R){
    this.col = col;
    this.centerX = cX;
    this.centerY = cY;
    this.r_small = 5;
    this.r_big = 20;
    this.R = R
    this.sec = second()
    this.col_list = []
    for(var i=0; i<60; i++)
      this.col_list.push(color(random(255),random(255),random(255)))
  }

  draw(){
    if(this.sec != second()){
      this.col_list = []
      for(var i=0; i<60; i++)
        this.col_list.push(color(random(255),random(255),random(255)))
      this.sec = second()
      // console.log(this.col_list[0])
    }

    fill(this.col);
    ellipse(this.centerX, this.centerY, 20, 20);
    for(var theta=0; theta<360; theta+=6){

      if(theta % 5 == 0){
        // console.log(this.col_list[0])
        fill(this.col_list[theta/6])
        ellipse(this.centerX+this.R*cos(PI*theta/180), this.centerY+this.R*sin(PI*theta/180), this.r_big, this.r_big);
      }else{
        fill(this.col_list[theta/6])
        ellipse(this.centerX+this.R*cos(PI*theta/180), this.centerY+this.R*sin(PI*theta/180), this.r_small, this.r_small);
      }
    }
    var H = hour()%12;
    var r_H = 500;
    var M = minute();
    var r_M = 500;
    var S = second();
    // console.log(S);

    var r_S = 500;
    stroke(255,255,255,100);
    strokeWeight(15*2);
    line(this.centerX, this.centerY, this.centerX+r_H*cos(PI*30*(H-3)/180), this.centerY+r_H*sin(PI*30*(H-3)/180));
    strokeWeight(10*2);
    line(this.centerX, this.centerY, this.centerX+r_M*cos(PI*6*(M-15)/180), this.centerY+r_M*sin(PI*6*(M-15)/180));
    strokeWeight(5*2);
    // line(centerX, centerY, centerX+r_S*cos(PI*6*(S+millis()%1000)/1000.0-15.0)/180, centerY+r_S*sin(PI*6*(S+millis()%1000)/1000.0-15.0)/180);
    line(this.centerX, this.centerY, this.centerX+r_S*cos(PI*6*(S-15)/180), this.centerY+r_S*sin(PI*6*(S-15)/180));
    noStroke()
  }

}
