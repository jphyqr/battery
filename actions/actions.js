export const getSearchResultsFromFirestore = Searchvalue => async (
    dispatch,
    getState
  ) => {

    //

    const firestore = firebase.firestore();
   const trimedSearchValue = ltrim(Searchvalue)

   
   let partsOfSearch = trimedSearchValue.replace(/\s/,'&').split('&')

  
   console.log('Entered GSRFF')
   let packagedSearch = trimedSearchValue
   
   // if(partsOfSearch&&partsOfSearch.length>1)

   //che becomes "che e"
   {
    let  leadingTerm = partsOfSearch[0]
     let trailingTerm = partsOfSearch[1]
     console.log({leadingTerm})
     console.log({trailingTerm})
     if(leadingTerm.length<4)
     {
      leadingTerm = convertLeading3IntoYear(leadingTerm)
 
     
      packagedSearch = leadingTerm 
      
      if(trailingTerm)
      packagedSearch = packagedSearch + " " + trailingTerm
     }

   }






    try {
 
     let searchSnap= await firestore
          .collection("ymmt_search_year")

          .where("keywords", "array-contains", packagedSearch.toLowerCase().replace(/\W/g, ''))
      i
          .limit(10)
          .get();

          let results = [];
          for (let i = 0; i < searchSnap.docs.length; i++) {
            let evt = { ...searchSnap.docs[i].data(), id: searchSnap.docs[i].id };
            results.push(evt);
          }


      return results

    } catch (error) {
      console.log(error);
    }
  };
