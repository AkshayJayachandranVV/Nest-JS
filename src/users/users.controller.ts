import { Controller,Delete,Get,Post,Put,Param} from '@nestjs/common';

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
    createUser() {
        return {};
    }


    @Put(':id')
    updateUser(@Param('id') id : string) {
        return {}
    }

    @Delete(':id')
    deleteUser(@Param('id') id : string) {
        return {}
    }

}
