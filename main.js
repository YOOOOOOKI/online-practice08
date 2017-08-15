'use strict';
module.exports =function main(str)
{   
   if(str.length<=10)
        {
                return zipToBarcode(str,buildTransfer());
        }
        else
        {
                return barcodeToZip(str,buildTransfer());
        }
           
} 

function buildTransfer()
{
        let list=new Map([
        [":::||",1],
        ["::|:|",2],
        ["::||:",3],
        [":|::|",4],
        [":|:|:",5],
        [":||::",6],
        ["|:::|",7],
        ["|::|:",8],
        ["|:|::",9],
        ["||:::",0]
]);
        return list;
}
function zipToBarcode(str,list)
{
        let result='|';
        for(let i of str)
            {
                for(let [key, value] of list.entries())
                        {
                                if(i===value.toString())
                                        {
                                                result=result+key;
                                        }
                        }
            }
        for(let [key, value] of list.entries())
                {
                        if(value===calNum(str))
                                {
                                        result=result+key;
                                }
                }
        return result+"|";
}
function calNum(string)
{
        let arr=string.split("");
        arr=arr.filter(x=>(x!=='-'));
        arr=arr.map(Number);
        let num=10-arr.reduce((x,y)=>(x+y))%10;
        return num;

}
function barcodeToZip(str,list)
{       
        let result='';
        str=str.substring(1,str.length-6);
        for(let i=0;i<str.length;i=i+5)
                {
                      for(let  [key, value] of list.entries())
                        {
                        
                                if(str.substring(i,i+5)===key)
                                        {
                                                result=result+value.toString();
                                        }
                         }   
                }
        if(result.length>5)
                {
                        result= result.split("");
                        result.splice(5,0,'-');
                        result=result.join("");


                }
       

       return result;

}

   //console.log(calNum("95713"));
//console.log(zipToBarcode("95713-9571",buildTransfer()));
//console.log(barcodeToZip("||:|:::|:|:|:::|:::||::||:|:|:::|:|:|:::|:::||::||:|",buildTransfer()));