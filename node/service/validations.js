function checkName(name){
    let marker = true;
    if(name==null||name==undefined||name==""){
     marker= false;
     return marker;
    }

    if(!/^[a-zA-Z]+$/.test(name)){
        marker= false;
     return marker;
    }
    if(name.charAt(0)!==name.charAt(0).toUpperCase()){

     marker = false;
     return marker;
    }

    if(name.substring(1)!==name.substring(1).toLowerCase()){

        marker = false;
        return marker;
       }
 return marker;
}



function checkAge(age){
    let marker = true;
    if(isNaN(age)||age===undefined||age===null){
        marker=false;
        return marker;
    }
    if(age<=0||age>110)
    marker=false;
    return marker;

}

module.exports = {
    checkName,
    checkAge,
  };


