// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
  }
    
  set inner(innerMe){

    
  }
  
  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }

    set inner(inner);
    set mountPoint(mount)
    
  }
  
  printMe(){
    console.log("Inner Text: ", innerMe);
    console.log("Mounted at: ", mountPointMe);
  }
  
}