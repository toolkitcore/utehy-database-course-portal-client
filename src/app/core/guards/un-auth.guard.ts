import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from '../services/identity/auth.service';
import { Page } from '../enums/page.enum';
import { HttpStatus } from '../enums/http-status.enum';
import { AuthToken } from '../models/interfaces/common/auth-token.interface';
import { UserCurrent } from '../models/interfaces/user/user-current.interface';

@Injectable({
  providedIn: 'root',
})

export class UnAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: UserCurrent | null | undefined = this.authService.getUserCurrent();
    
    if(!user){
      return true;
    }else{
      this.router.navigate([Page.Dashboard]);
      return false;
    }
  }
}