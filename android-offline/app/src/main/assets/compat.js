(function(){
  if(typeof window.structuredClone!=="function"){
    window.structuredClone=function(obj){return JSON.parse(JSON.stringify(obj));};
  }
})();
