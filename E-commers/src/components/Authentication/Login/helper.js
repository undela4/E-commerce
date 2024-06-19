import {errorfunction } from '../../../tostify';



function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }


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
                else if(key==='email')
                {
                    if(!validateEmail(data[key]))
                    {
                        errorfunction(`Please Enter  valid ${key} `);
                      return false;
                    }
                }
            }
        }
        return true;

}

