import React from 'react'
import { useEffect, useState } from 'react';







const CategorySelect = ({ options, value, handleSelect, title,disabled}) => {
   


 
  const [_value, setValue] = useState(value)

  useEffect(()=>{
    console.log('NEW VALUE IN ', value)
    setValue(value)
    
   }, [value])


   const  setOptionsShiv = (item, category) =>{
        console.log('S9trueHIV')
        selectCategory(true)
       setOptions(item, category);
    }
    
   
    const handleChange = (event) =>{
        console.log('handleChange event', event.target.value)
       
     //   removeOption("year")
        // setOptions(event.target.value);
        // setSelectedIndex(index)
        // setValue(event.target.value)
    }
   
   
   
    return (
    

     
       <div className='container'>
           
       <select disabled={disabled} value={_value}  onChange={(e)=>handleSelect(e.target.value)}>
     <option selected={typeof(value) =='undefined'} key={-1} value={title}>{title}</option>
            {options&&options.map((item,index)=>(
          
 <option key={index} selected={value==item} value={item}>{item}</option>
            ))}
             
          </select>
      
             <style jsx>{`
 

 .container{
     display:flex;
     flex-wrap:wrap;
     justify-content: left;
     margin-right: 10px;
     margin-bottom: 10px;
 }
select {
    width: 200px;
    font-size:24px;
    background-color: ${_value? "lightblue                                ": "lightgrey"};
}
span {
  width: 80px;
  text-transform: uppercase;
}
option {
  width: 100px;
    background-color: blue;
    
}
 
 
 `}</style>     
         
           </div>
    )
}

export default CategorySelect
