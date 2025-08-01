import { RecipeItem } from './model/RecipeItem';
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';

const collection = new RecipeCollection();
const template = new RecipeTemplate(collection, 'recipeContainer');

const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

template.render();

form.addEventListener('submit', e => {
  e.preventDefault();

  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value.trim().split('\n').map(i => i.trim()).filter(Boolean);
  const instructions = instructionsInput.value.trim();

  if (!title || ingredients.length === 0 || !instructions) {
    alert('pls fill in all fields!');
    return;
  }

  const newRecipe = new RecipeItem(title, ingredients, instructions);
  collection.addRecipe(newRecipe);

  titleInput.value = '';
  ingredientsInput.value = '';
  instructionsInput.value = '';

  template.render();
});

clearButton.addEventListener('click', () => {
  if (confirm('ar u sure u want to clear all recipes?')) {
    collection.clearAll();
    template.render();
  }
});
