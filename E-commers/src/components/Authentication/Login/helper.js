import { successfunction,errorfunction } from '../../../tostify';
import axios from 'axios';





export function clientValidation(data)
{
        for (let key in data)
        {
            if (data.hasOwnProperty(key)) 
            {
                if (data[key].trim() === '') 
                {
                    errorfunction(`Please Enter   ${key} `);
                    return false;
                }
            }
        }
        return true;

}

export async function sign_up(use_data){
    


}