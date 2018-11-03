import React from 'react';
import TableDataTable from './TableDataTable.jsx';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {    
            textEneter:[],
            index:1
        };
    }

    filterFunc(dataID){
        console.log("in filter func"+dataID);
        // var arr = this.state.textEneter.filter((data,key)=>data.id !==dataID);
        // console.log("in filter func dara"+arr);
        // this.setState({textEneter:arr});
    }

    buttonClick(){
        console.log("inside add button function");   
        this.state.textEneter.push({'id':this.state.index, 'data':document.getElementById("field").value});
        this.setState({index: this.state.index + 1});
    }

    render(){        

        // console.log("text check"+JSON.stringify(this.state.textEneter));
        // var comp = <TableDataTable textEneter={this.state.textEneter} action={this.filterFunc}/>

        // var textEneter = [{
        //     'id': "1",
        //     'data': "Sumit"
        // },
        // {
        //     'id': "2",
        //     'data': "Amit"  
        // }];
        return(
            <div>
                Hello,<br/>
                Input: <input type="text" id="field" /><br/>
                <button type="button" onClick={this.buttonClick.bind(this)}>Add Data</button>
                <TableDataTable text={this.state.textEneter} action={this.filterFunc}/>
            </div>
        );
    }
}