import ADD from '../Actions/add';
import BACKSPACE from '../Actions/backspace';
import CLEAR from '../Actions/clear';
import EVALU from '../Actions/evalu';

const defaultState={
    expression:''
};

const trimmm = (exp) =>{
    var lst=exp.split('');
    var str2="";
    for(let i=0;i<lst.length-1;i++)
        str2+=lst[i];
    return str2;
}

var rootReducer = (state=defaultState, {type,payload}) =>{
    switch (type){
        case ADD:
            return {expression:state.expression+payload};
        case EVALU:
                var res=eval(state.expression);
                var res1=res.toString();
                return {expression:res1}; 
        case CLEAR:
            return {expression:''};
        case BACKSPACE:
            var a=trimmm(state.expression);
            return {expression:a}
        default: return defaultState;
    }
}

export default rootReducer;