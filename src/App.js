/*import React from 'react';
import react,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions/bankactions';
class App extends Component{
  constructor(props){
    super(props);
  }
  
  fun_one=()=>{
    this.props.withdraw()
  }
  fun_two=()=>{
    this.props.deposit()
  }
  render(){
    return(
      <React.Fragment>
        <h1>{this.props.bal}</h1>
        <button onClick={this.fun_one}>WITHDRAW</button>
        <button onClick={this.fun_two}>DEPOSIT</button>
      </React.Fragment>
    )

  }
}
const receive=(state)=>{
  return{
    bal:state.bal
  }
}
const send=(dispatch)=>{
      return{
        withdraw:()=>dispatch(actions.withdrawsync()),
        deposit:()=>dispatch(actions.depositsync())
      }
}

export default connect(receive,send)(App);*/



//functionalk level component

import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from './Actions/bankactions';


function App(){
    const result=useSelector(state=>state);
    const {bal} = result;
    const dispatch=useDispatch();

     const withdraw=()=>{
          dispatch(actions.withdrawsync());
     }
     const deposit=()=>{
            dispatch(actions.depositsync());
     }
    return(
      <React.Fragment>
        <center>
        <h1>{bal}</h1>
        <button onClick={withdraw}>WITHDRAW</button>
        <button onClick={deposit}>DEPOSIT</button>
        </center>
      </React.Fragment>
    )
}
export default App;