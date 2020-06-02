// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
    this.inner=null;
    this.mountPoint=null;
  }  

  

  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }

    this.innerMe = inner;
    this.mountPointMe = mountPoint;
    
  }
  
  printMe(idMe){
    console.log(idMe);
    console.log(document.querySelector(this.mountPointMe));
  }

}
