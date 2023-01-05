let observation = 90;                                                        
function oxygenSaturation(observation) {
    if (observation > 95){
        console.log("Acceptable to continue home monitoring"); 
    } else if (observation = 95){
        console.log("Normal reading");
    } else if ( (observation > 91) && (observation < 95) ){
        console.log("Seek advice from health professional");
    } else{
        console.log("Seek urgent medical advice");
    }      
}
oxygenSaturation(observation);


let obs = 0;
function prBpm(obs){
    if ( obs => 131 ){
        console.log("Seek urgent medical advice.");
    }else if ( (obs < 131) && (obs > 109) ){
        console.log("Seek advice from health professionals.")
    }else if ( (obs < 110) && (obs > 100) ){
        console.log("Acceptable to continue home monitoring.")
    }else{
        console.log("Normal reading.")
    }
}
prBpm(obs);
