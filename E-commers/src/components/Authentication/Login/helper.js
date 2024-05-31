import { successfunction,errorfunction } from '../../../tostify';





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