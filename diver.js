AFRAME.registerComponent("diver-plane",{
    schema:{
        rotation:{type:"number",default:0},
        position:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(y)=>{
            this.data.rotation=this.el.getAttribute("rotation")
            this.data.position=this.el.getAttribute("position")
            var pos=this.data.position
            var rot=this.data.rotation

            if(y.key==="ArrowUp"){
                if(pos.z>-10){
                    pos.z-=0.1
                    this.el.setAttribute("position",pos)
                }
                if (pos.y > -20) {
                    pos.y += 0.05;
                    this.el.setAttribute("position", pos);
                  }
            }
            if(y.key==="ArrowDown"){
                if(pos.z<20){
                    pos.z+=0.1
                    this.el.setAttribute("position",pos)
                }
                if (pos.y > 1) {
                    pos.y -= 0.05;
                    this.el.setAttribute("position", pos);
                  }
            }
            if(y.key==="ArrowRight"){
                if (rot.y > -360) {
                    rot.y -= 0.5;
                    this.el.setAttribute("rotation", rot);
                  }
                  if (pos.x < 20) {
                    pos.x += 0.05;
                    this.el.setAttribute("position", pos);
                  }
            }
            if(y.key==="ArrowLeft"){
                if (rot.y <360) {
                    rot.y += 0.5;
                    this.el.setAttribute("rotation", rot);
                  }
                  if (pos.x  >-20) {
                    pos.x -= 0.05;
                    this.el.setAttribute("position", pos);
                  }
            }
        })
    }
})