import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Cake', 10),
        new Ingredient('Apple', 12)
      ];

getIngredients() {
    return this.ingredients.slice();
}
addIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredient(index: number) {
this.ingredients.splice(index, 1);
this.ingredientsChanged.next(this.ingredients.slice());
}
}
