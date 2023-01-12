
const Recipe= ({title, ingredients, calories, image, key}) => {

  return(
    <div key= {key} className= 'recipes'>
      <div className= 'img-wrap'><img src= {image} alt= '' /></div>
      <div className= 'text-wrap'>
        <h2>{title}</h2>
        <ol className='list'>
          {ingredients.map((ingredient) => (
           <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>Calories: {calories}</p>
      </div>
      
    </div>
  )
}

export default Recipe;