// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
  }
    
  innerMe = "";
  mountPointMe="";
  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }

    inner = inner;
    mountPoint = mountPoint;
    
  }
  
  printMe(){
    console.log("Inner Text: ", inner);
    console.log("Mounted at: ", mountPoint);
  }
  
}