import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
    private isLoggedIn = true;

    constructor(private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if(this.isLoggedIn){
            return true;
        }

        this.router.navigate(['list']);
        return false;
    }
}
