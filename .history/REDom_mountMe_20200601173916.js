// pull imports
const {el, mount} = redom;

// class that takes in 'el', 'inner', and 'mountPoint'
// then mounts said 'el' onto 'mountPoint'
class MountMe{
  constructor(){
    // inner=null;
    // mountPoint=null;
  }  

  innerMe = inner;
  mountPointme = mountPoint;

  make(elMe, inner, mountPoint){
    var tmp = el(elMe, inner);
    console.log(mountPoint);
    if(mountPoint==""){
      mount(document.body, tmp);        // if left "" - then add to document.body
    }else{
   mount(document.querySelector(mountPoint), tmp);  
    }

    var innerMe = inner;
    var mountPointme = mountPoint;
    
  }
  
  printMe(index){
    console.log(1index);
    console.log("Inner Text: ", innerMe);
    console.log("Mounted at: ", mountPointme);
  }
  
}