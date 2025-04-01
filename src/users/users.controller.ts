import { Controller,Delete,Get,Post,Put,Param, Body, Query, NotFoundException, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-helo.dto';
import { UsersService } from './users.service';
import { AgeGuard } from 'src/gaurds/age/age.guard';
import { LoggerMiddleware } from 'src/middleware/logger/logger.middleware';

@Controller('users')
export class UsersController {
    tor:number 
    constructor(private readonly userService : UsersService) {
      this.tor = 15
    }

    @Get()
    getUsers(@Query('weapon') weapon : 'sword' | 'Guns') {
        try {
            return this.userService.getUsers(weapon);
        } catch (error) {
            throw new NotFoundException()
        }
    }
    
    @Get(':id')
    getOneUser(@Param('id') id : number) {
        try {
            return this.userService.getUser(id);
        } catch (error) {
            throw new NotFoundException()
        }
    }

    @Post()
    @UseGuards(AgeGuard)
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
