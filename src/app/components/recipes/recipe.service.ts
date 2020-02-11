import { Recipe } from './recipes.module';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', "This is simply a test", 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another test recipe', "This is simply a test", 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}