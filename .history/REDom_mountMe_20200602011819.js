// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
    this.innerMe=null;
    this.mountPointMe=null;
  }  

  

  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    //console.log(mountPoint);
    if(mountPoint==""||mountPoint==''){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
       mount(document.querySelector(mountPoint), tmp);  
    }

    this.innerMe = inner;
    this.mountPointMe = mountPoint;
    
  }
  
  printMe(){
    if(!this.mountPointMe){
      console.log(document.querySelector(this.mountPointMe));
    }
 }
}


function printBody(){
    for(var i=0; i<document.body.children.length; i++){
      if(document.body.children[i].tagName=="DIV"){
        console.log(document.body.children[i]);
      }
    }
}