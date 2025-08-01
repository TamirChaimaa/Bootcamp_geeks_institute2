import type { RecipeCollection } from "../model/RecipeCollection";

export class RecipeTemplate {
    collection: RecipeCollection;
    container: HTMLElement;

    constructor(collection: RecipeCollection, containerId: string) {
        this.collection = collection;
        const container = document.getElementById(containerId);

        if (!container) throw new Error('container not found');
        this.container = container;
    }

    render() {
        this.container.innerHTML = '';
        this.collection.recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.style.border = '1px solid #ccc';
            card.style.margin = '10px';
            card.style.padding = '10px';
            card.style.borderRadius = '8px';

            card.innerHTML = `
                <h3>${recipe.title} ${recipe.isFavorite ? '⭐' : ''}</h3>
                <button data-action="toggle-fav" data-id="${recipe.id}">
                    ${recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <button data-action="delete" data-id="${recipe.id}">Delete</button>
                <button data-action="toggle-details" data-id="${recipe.id}">Show/Hide Details</button>
                <div class="details" style="display:none; margin-top: 10px;">
                    <strong>Ingredients:</strong>
                    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
                    <strong>Instructions:</strong>
                    <p>${recipe.instructions}</p>
                </div>
            `;

            card.querySelector('[data-action="toggle-fav"]')?.addEventListener('click', () => {
                this.collection.toggleFavorite(recipe.id);
                this.render();
            });

            card.querySelector('[data-action="delete"]')?.addEventListener('click', () => {
                this.collection.removeRecipe(recipe.id);
                this.render();
            });

            card.querySelector('[data-action="toggle-details"]')?.addEventListener('click', e => {
                const detailsDiv = card.querySelector('.details') as HTMLElement;
                if (detailsDiv.style.display === 'none') {
                    detailsDiv.style.display = 'block';
                } else {
                    detailsDiv.style.display = 'none';
                }
            });

            this.container.appendChild(card);
        })
    }
}