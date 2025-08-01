import { RecipeItem } from './RecipeItem';

export class RecipeCollection {
    recipes : RecipeItem[];

    constructor (){
        this.recipes = this.loadFromLocalStorage();
    }

    addRecipe(recipe : RecipeItem){
        this.recipes.push(recipe);
        this.saveToLocalStorage();
    }

    removeRecipe(id : string){
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        this.saveToLocalStorage();
    }

    toggleFavorite(id : string){
        const recipe = this.recipes.find(r => r.id === id);
        if (recipe) {
            recipe.isFavorite = !recipe.isFavorite;
            this.saveToLocalStorage();
        }
    }

    saveToLocalStorage(){
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }

    loadFromLocalStorage(): RecipeItem[]{
        const data = localStorage.getItem('recipes');
        if (!data) return [];

        const rawArray = JSON.parse(data) as RecipeItem[];

        return rawArray.map(
            r => new RecipeItem (r.title, r.ingredients, r.instructions, r.isFavorite, r.id)
        );
    }

    clearAll() {
        this.recipes = [];
        this.saveToLocalStorage();
    }
}