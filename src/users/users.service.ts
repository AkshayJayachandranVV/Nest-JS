import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {"id":0 , "name":"ramu", "weapon" : "sword"},
        {"id":1 , "name":"raju", "weapon" : "Guns"},
        {"id":2 , "name":"rahul", "weapon" : "Bombs"} 
    ]

    getUsers(weapon?:'sword' | 'Guns') {
            if(weapon) {
                return this.users.filter(user => user.weapon == weapon)
            }
            return this.users;
    }

    getUser(id : number) {
       
            const user =  this.users.filter(user => user.id == id)

            if(!user) {
                throw new Error("User not found")
            }
        
        return user
    }

    createUser(id:number , name:string , weapon : string) {
        if(!id || !name || !weapon) {
            throw new Error("Invalid input")
        }

        this.users.push({id,name,weapon})

        return this.users;
    }

    updateUser(id : number , name:string, weapon: string) {
        if(!id || !name || !weapon) {
            throw new Error("Invalid input")
        }

         this.users.map(user => {
            if(user.id == id) {
                user.name = name;
                user.weapon = weapon;
            }
        })

        return this.users;
    }


    removeUser(id : number) {
        if(!id) {
            throw new Error("Invalid input")
        }
        
        const tobeDeleted  = this.users.filter(user => user.id == id)

        this.users = this.users.filter(user => user.id !== id)
        console.log(id,this.users)
        return tobeDeleted
    }
}