import { Subject } from 'rxjs/Subject';
import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe('a Cake',
        'Choklate cake',
        'https://cdn.lifestyle.com.au/cache/400x225/recipes/thumbnails/CakeRecipeCollection.jpg',
    [
        new Ingredient('Banana', 1),
        new Ingredient('Orange', 3)
    ]),
        new Recipe('another Cake',
        'Choklate Other',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Download_%2853%29.jpg/220px-Download_%2853%29.jpg',
   [
    new Ingredient('Banana', 1),
    new Ingredient('Orange', 3)
   ] )
      ];
    constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes() {
          return this.recipes.slice();
      }
      getRecipe(index: number) {
          return this.recipes[index];
      }
      addIngredientsToShop(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
