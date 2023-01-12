
const Searchinput= ({search, handleInput, getSearch}) => {

  
  return(
  <div className= 'input-wrap'>
    <div className= 'header-bar'>RECIPE SEARCH</div>
   <form className= 'form' onSubmit= {getSearch}>
     
     <input 
     className='search-input' 
     type= 'text' 
     value= {search} 
     onChange= {handleInput} 
     />
     
     <button className= 'search-btn' type= 'submit'>search</button>
     
   </form>
   </div>

  );
}

export default Searchinput;