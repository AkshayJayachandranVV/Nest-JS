import { Controller,Delete,Get,Post,Put,Param, Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-helo.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [];
    }
    
    @Get(':id')
    getOneUser(@Param('id') id : string) {
        return {id:id};
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {
            name:createUserDto.name
        };
    }


    @Put(':id')
    updateUser(@Param('id') id : string , @Body() updateUserDto: UpdateUserDto) {
        return {name : updateUserDto}
    }

    @Delete(':id')
    deleteUser(@Param('id') id : string) {
        return {}
    } 

}
