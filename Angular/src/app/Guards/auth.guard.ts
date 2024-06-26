import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth=inject(DataService)
  const router= inject(Router)
  if(auth.showLogin()){
     router.navigate(['/tours']);
    return true;
   
  }else{
router.navigate(['/login'])
 return false;
  }
 
};
