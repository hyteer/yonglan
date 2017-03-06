
export function PrintTest(str){
  console.log("Out:"+str)
}

export function CallPrint(str){
  PrintTest(str)
}


export function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

export function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

export function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}

export function changeBody(){
  var obj = document.getElementsByTagName('body')[0]
  toggleClass(obj,"sidebar-compact");
}

//export default PrintTest;
