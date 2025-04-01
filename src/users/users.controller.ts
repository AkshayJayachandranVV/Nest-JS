import { Controller,Delete,Get,Post,Put,Param, Body, Query} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-helo.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService : UsersService) {}

    @Get()
    getUsers(@Query('weapon') weapon : 'sword' | 'Guns') {
        return this.userService.getUsers(weapon);
    }
    
    @Get(':id')
    getOneUser(@Param('id') id : number) {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto.id,createUserDto.name,createUserDto.weapon);
    }


    @Put()
    updateUser( @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(updateUserDto.id,updateUserDto.name,updateUserDto.weapon)
    }

    @Delete(':id')
    deleteUser(@Param('id') id : number) {
        return this.userService.removeUser(id)
    } 

}
