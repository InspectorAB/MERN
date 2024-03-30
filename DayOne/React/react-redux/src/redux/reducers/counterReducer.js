const counterReducer = 
(state=101,action) =>{
    switch(action.type){
        case 'INC':
            return state+1;
        case 'DEC':
            return state-1;
        default:
            return state=100;
    }
}

export default counterReducer;