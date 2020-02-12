import { Ingredient } from 'src/app/shared/ingredient.module';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}