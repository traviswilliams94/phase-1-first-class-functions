
function receivesAFunction(callbackFunction){
    callbackFunction();
}


function returnsANamedFunction(){
    return receivesAFunction
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log('wassup');
    }
}