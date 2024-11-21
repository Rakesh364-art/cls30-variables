import React from 'react'

function MarkSheet(props ) {
    
    let telMar=Number(props.telMar);
    let hinMar=Number(props.hinMar);
    let engMar=Number(props.engMar) ;
    let matMar=Number(props.matMar);
    let sciMar=Number(props.sciMar); 
    let socMar=Number(props.socMar);
    let Total=telMar+hinMar+engMar+matMar+sciMar+socMar
    let per=(Total/600)*100
     
     

      


  return (
    <div>
        <table> 
            <caption>{props.name} Markslist</caption>

         <tr>
            <th>Subject</th>
            <th>Max Marks</th>
            <th>Marks Obtained</th>
            <th>Result</th>
            <th>Remarks</th>


         </tr>
         <tr>
            <td>Telugu</td>
            <td>100</td>
            <td>{telMar}</td>
            <td>{telMar >=35 ? "pass" :"fail"}</td>
            <td>{telMar >=35 ? "good" :"improve"}</td>

         </tr>
         <tr>
            <td>hindi</td>
            <td>100</td>
            <td> {hinMar}</td>
            <td>{hinMar >=35 ? "pass" :"fail"}</td>
            <td>{hinMar >=35 ? "good" :"improve"} </td>

         </tr>
         <tr>
            <td>english </td>
            <td>100</td>
            <td> {engMar}</td>
            <td> {engMar >=35 ? "pass" :"fail"}</td>
            <td> {engMar >=35 ? "good" :"improve"}</td>

         </tr>
         <tr>
            <td>maths</td>
            <td> 100</td>
            <td>{ matMar}</td>
            <td>{matMar >=35 ? "pass" :"fail"}</td>
            <td> {matMar >=35 ? "good" :"improve"}</td>

         </tr>
         <tr>
            <td>science</td>
            <td> 100</td>
            <td>{sciMar}</td>
            <td>{sciMar >=35 ? "pass" :"fail"}</td>
            <td> {sciMar >=35 ? "good" :"improve"}</td>

         </tr>
         <tr>
            <td>social</td>
            <td> 100</td>
            <td>{socMar}</td>
            <td>{socMar >=35 ? "pass" :"fail"}</td>
            <td> {socMar >=35 ? "good" :"improve"}</td>

         </tr>
         <tr>
            <th>Total</th>
            <th> 600</th>
            <th>{Total}({per.toFixed(2)}%)</th>
            <th>pass</th>
            <th> good</th>

         </tr>
         </table>
      
    </div>
  )
}

export default MarkSheet
