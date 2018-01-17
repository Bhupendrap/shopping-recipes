import { Component, Injectable} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']

})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService, private router: Router) {

    }
    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
            console.log(response);
            }
        );
    }
    onFetchData() {
        this.dataStorageService.getRecipes();
    }
    onSignOut() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }
}