export const withdraw=()=>{
     return{type:"withdraw",value:2000}
}

export const deposit=()=>{
    return{type:"DEPOSIT",value:3000}
}

export const withdrawsync=()=>{
    return(dispatch)=>{
        setTimeout(()=>{
       dispatch(withdraw());
        },6000)
    }
}

export const depositsync=()=>{
    return(dispatch)=>{
       setTimeout(()=>{
           dispatch(deposit());
       },5000)
    }
}