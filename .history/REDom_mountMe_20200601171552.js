// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
  }
    
  set innerMe(innerMe){
    this.inner = innerMe;
    
  }

  set mountPointMe(mountPoint){
    this.mountPoint = mountPoint;
  }

  get innerMe(){
    return.inner;
  }
  
  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }

    set innerMe(inner);
    set mountPointMe(mountPoint);
    
  }
  
  printMe(){
    console.log("Inner Text: ", );
    console.log("Mounted at: ", mountPointMe);
  }
  
}