import { Recipe } from './recipes.module';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            "This is simply a test", 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another test recipe', 
            "This is simply a test", 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('buns', 2),
                new Ingredient('Meat', 2),
                new Ingredient('lettuce', 2),
                new Ingredient('onions', 2)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}