import {Ingredient} from '../shared/ingredient.model'
export class Recipe{
    public name : string;
    public description : string;
    public imgpath : string;
    public ingredients: Ingredient[];

    constructor(name : string,disc : string,img : string,ingredients: Ingredient[]){
     this.name = name;
     this.description = disc;
     this.imgpath = img;
     this.ingredients = ingredients;
    }
}