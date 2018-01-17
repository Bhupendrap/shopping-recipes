import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import * as firebase from "firebase";

@Injectable()
export class DataStorageService {

constructor(private http: Http, private recipeService: RecipeService,
private authService: AuthService) {}

storeRecipes() {
    return this.http.put('https://my-pro-db.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
}
getRecipes() {
   const token = this.authService.getToken();
    this.http.get('https://my-pro-db.firebaseio.com/recipes.json?auth=' + token)
    .subscribe(
        (response: Response) => {
            const recipes: Recipe[] = response.json();
            this.recipeService.setRecipes(recipes);
            console.log(response);
        }
    );
}
}
