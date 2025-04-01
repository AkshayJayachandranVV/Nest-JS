import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable()
export class AgeGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    //valudate the age 

    // if(request.user.age > 20){
    //   return true
    // }else{
    //   return false
    // }

    return true
  }
}
