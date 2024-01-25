import axios from "axios";

export class usersService{
    static async getAllUsers () {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response.data
        }
        catch (error){
            console.log(error)
        }
    }
}