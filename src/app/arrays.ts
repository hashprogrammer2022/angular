/**
 * Interface defining the shape of an ingredient
 */
interface Ingredient {
    name: string;
    amount: number;
  }
  
  /**
   * The original ingredients array
   */ 
  const originalIngredients: Ingredient[] = [
    {name: 'sugar', amount: 1},
    {name: 'flour', amount: 2},
  ]; 
  
  /** 
   * The new ingredients array containing potential duplicates
  */
  const tmpIngredients: Ingredient[] = [
    {name: 'oil', amount: 3}, 
    {name: 'sugar', amount: 4},
  ];
  
  /**
   * Helper set to track ingredient names already in original array
  */
  const existingNames = new Set(originalIngredients.map(i => i.name));
  
  /**
   * Loop through each ingredient in tmpIngredients
  */
  tmpIngredients.forEach(newIngredient => {
  
    // Check if name already exists
    if (existingNames.has(newIngredient.name)) {
      
      // If yes, override amount in original array
      const index = originalIngredients.findIndex(
        i => i.name === newIngredient.name
      );
      originalIngredients[index].amount = newIngredient.amount;
  
    } else {
    
      // Otherwise push new ingredient
      originalIngredients.push(newIngredient);
    
    }
  
    // Add current name to set
    existingNames.add(newIngredient.name);
  
  });
  
  console.log(originalIngredients); 
  // [{name: 'sugar', amount: 4}, {name: 'flour', amount: 2}, {name: 'oil', amount: 3}]