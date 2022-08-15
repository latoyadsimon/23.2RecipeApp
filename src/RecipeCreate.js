import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  
  const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
  }
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData, [target.name]: target.value,
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const addRecipes = {
      //id: recipes.length + 1,
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    }
    setRecipes([...recipes, addRecipes])
    setFormData({...initialFormState})
  }
  

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <div className='create'>
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
            
        <input
          id="name"
          type="text"
          name="name"
          placeholder="new recipe"
          onChange={handleChange}
          value={formData.name}
        />
      
            </td>
            <td>
            
        <input
          id="cuisine"
          type="text"
          name="cuisine"
          placeholder="type of cuisine"
          onChange={handleChange}
          value={formData.cuisine}
        />
      
            </td>
            <td>
              
            <input 
              id="photo" 
              name="photo" 
              type="url" 
              required={true}
              placeholder="photo url"
              onChange={handleChange}
              value={formData.photo}
              />
            </td>
            <td>
              
            <textarea 
              id="ingredients" 
              name="ingredients" 
              required={true} 
              rows={3}
              placeholder="ingredients needed"
              onChange={handleChange}
              value={formData.ingredients}
              />
            </td>
            <td>
             
              <textarea 
              id="preparation" 
              name="preparation" 
              required={true} 
              rows={3}
              placeholder="how do you prepare it?"
              onChange={handleChange}
              value={formData.preparation}
              />
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
}

export default RecipeCreate;
