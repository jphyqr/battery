import React from 'react'
import { withRedux } from '../lib/redux'
import { useEffect, useState } from 'react';
import * as keys from "..//config/keys"
import fetch from "isomorphic-unfetch";
import CategorySelect from '../components/CategorySelect';
const years=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
const model =["Select Model", 'f-150', 'explorer']
const trim = ["Select Trim", 'lariat', 'xlt']



const fetchListings = async (year, make, model, trim) =>{

    console.log(`params: year ${year}, make:${make}, model: ${model}, trim:${trim}`)
     
   
    if(typeof make == 'undefined'){
        //call for makes
        console.log('GET makes ')
    } else if(typeof model == 'undefined'){
  //call for MODEL
  console.log('GET MODELS ')
    }else {
        //call for trims
        console.log('GET TRIMS ')
          }
    //  console.log('fetchListings Optipons', options)
       
    //  let optionsParamString = '';
   
    //  for(let i=0; i<options.length; i++){
    //    optionsParamString = optionsParamString + options[i].category+ '='
    //    let items = options[i].options
    //    for(let j=0; j<items.length; j++){
    //        optionsParamString = optionsParamString + items[j].item
    //        if(j<(items.length-1))
    //        optionsParamString = optionsParamString  +','
    //        else
    //        optionsParamString = optionsParamString  +'&'
    //    }
    //  }
   
    //  let b2 = {sort_by:_sortby, options:optionsParamString}
    //  console.log({optionsParamString})
   
    //  console.log('param body', b2)
   
    //  console.log('now sort by', _sortby)
    //  const body = {sort_by:_sortby, options:optionsParamString}
     
     
     try{
   
     
    //  const res = await fetch(
    //    "https://us-central1-trucks-c31b4.cloudfunctions.net/getCalgaryTrucks",
    //    {
    //      method: "post",
    //      body: JSON.stringify(body),
    //      headers: {
    //        "Content-Type": "application/json"
    //      }
    //    }
    //  );
    //  const data = await res.json();
   
   
    //  console.log('res data', data)
   
    //  return data.data; 
   return
     
   
      } catch(err){
       return console.log(err)
      }
   }
   





const Index = ({initialData}) => {


const {make} = initialData || []


const [_year, setYear] = useState(2019)
const [_make, setMake] = useState({})
const [_model, setModel] = useState()
const [_trim, setTrim] = useState()

useEffect(()=>{
    console.log('update 1 year blocked')
    //setMake()
    setModel()
    setTrim()
   let dataFromApi
     async function func(){
    //   await setLoading(true)
       dataFromApi =  await fetchListings(_year,_make,_model,_trim)
   
   //   await setData(dataFromApi)
   //   await setLoading(false)
     }
    
      func();
   
       
    
   }, [_year])

   useEffect(()=>{
    console.log('update 2 make blocked')
    setModel()
    setTrim()
    let dataFromApi
    async function func(){
   //   await setLoading(true)
      dataFromApi =  await fetchListings(_year,_make,_model,_trim)
  
  //   await setData(dataFromApi)
  //   await setLoading(false)
    }
   
     func();
  
   
    
   }, [_make])

   useEffect(()=>{
    console.log('update 2 model blocked')

    setTrim()
    let dataFromApi
    async function func(){
   //   await setLoading(true)
      dataFromApi =  await fetchListings(_year,_make,_model,_trim)
    //setModel({})
  //   await setData(dataFromApi)
  //   await setLoading(false)
    }
   
     func();
  
   
   
       
    
   }, [_model])


   useEffect(()=>{
    console.log('update 2 trim blocked')
//    let dataFromApi
//      async function func(){
//        await setLoading(true)
//        dataFromApi =  await fetchListings(sort_by, stateOptions)
   
//       await setData(dataFromApi)
//       await setLoading(false)
//      }
    
//       func();
   
       
    
   }, [_trim])

    return (
        <div>
             <CategorySelect key={"year"} title={'Select Year'} value={_year} handleSelect={setYear} options={years}/>
            <CategorySelect key={"make"}  title={'Select Make'} value={_make} handleSelect={setMake} options={make}/>
            <CategorySelect key={"model"} disabled={typeof(_model)=='undefined'} title={'Select Model'} value={_model} handleSelect={setModel} options={model}/>
            <CategorySelect key={"trim"} title={'Select Trim'} value={_trim} handleSelect={setTrim} options={trim}/>
        </div>
    )
}



Index.getInitialProps =  async ({ reduxStore }) => {

    console.log('getInitProps sort_by', reduxStore.getState().sort_by)
    const body = {sort_by:reduxStore.getState().sort_by}
    const {dispatch} = reduxStore;
    const res = await fetch(
      `http://api.marketcheck.com/v2/specs/car/terms?api_key=${keys.marketCheckKey}&year=2008&field=make|0|3000`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "host": "marketcheck-prod.apigee.net"
        }
      }
    );
    const data = await res.json();
    
    console.log('Index.js load',data);
    const { data: d1 } = data || {};
    const {make} = data || {}
    console.log({make})
    // dispatch({
    //   type: 'SET_FACETS',
    //   payload: {facets:d1.options},
    // })
  
    return {
      initialData: data || []
    };
  
  }
  

export default withRedux(Index)
