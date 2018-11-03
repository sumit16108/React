import React from 'react';

export default class TableDataTable extends React.Component{      
   
    render(){
        console.log("in table");
        const data1 = this.props.text;
        var iter = data1.map((data,i) =>  
                <table>                    
                    <th></th>
                    <tbody>
                    <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.data}</td>
                        <td><button type="button" onClick={(e) => {
                            this.props.action(data.id)
                        }} >Remove</button></td>
                    </tr>
                    </tbody>
                </table>
        );
               
        return(
            <div>
                {iter}
            </div>
        );
    }
}