import {MinLength} from 'class-validator'
export class CreateUserDto {
    @MinLength(3)
    id:number;
    name:string;
    weapon:string;
}
