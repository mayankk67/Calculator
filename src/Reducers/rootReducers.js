const defaultState={
    expression:''
};

var trimmm = (exp) =>{
    var lst=exp.split('');
    var str2="";
    for(let i=0;i<lst.length-1;i++)
        str2+=lst[i];
    return str2;
}

var rootReducer = (state=defaultState, {type,payload}) =>{
    switch (type){
        case 'ADD':
            return {expression:state.expression+payload};
        case 'EVAL':
            var res=eval(state.expression);
            var res1=res.toString();
            return {expression:res1}; 
        case 'CLEAR':
            return {expression:''};
        case 'BACKSPACE':
            var a=trimmm(state.expression);
            return {expression:a}
        default: return defaultState;
    }
}

export default rootReducer;