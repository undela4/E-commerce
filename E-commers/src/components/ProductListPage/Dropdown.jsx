import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Checkbox from './checkbox/checkbox';
import { useEffect, useRef ,useState} from 'react';
import { useSelector } from "react-redux";
export function Dropdown({name,items,type,pl,setpl})
{

    const r=useRef(null);
    const[flag,setflag]=useState(false);
    const [brand,setbrand]=useState([]);
    const {products}=useSelector(state=>state.productSlice);

    

 useEffect(()=>{
    if (brand.length==0){
        return;
    }
    const t=products.filter(item=>{
        return brand.includes(item.brand);
      })
    setpl(t)
 },[brand])   

function onchangeBrand(e)
{
    let updatedBrand;
    if (e.target.checked) {
        updatedBrand = [...brand, e.target.name];
    } else {
        updatedBrand = brand.filter(item => item !== e.target.name);
    }
    setbrand(updatedBrand);
}

function drop()
    {
       !flag?(r.current.style.display="none"):(r.current.style.display="block");
       setflag(!flag);   
}

    return(
        <div className="dropdown-items">

            <div className="d-flex 
            justify-content-between
            align-items-baseline">

                <h3>{name}</h3>
                <div className="fs-3" onClick={drop}>
                    {
                        flag?(<IoIosArrowDown />):(<IoIosArrowUp />)
                    
                    }
                </div>
            </div>

            <div ref={r} style={{display:"block"}} className='dropdown-list' >
               {
                items.map((item,index)=>{
                    return(
                        <div className="check" key={index}>
                        <input  type={type}  name={item} onChange={onchangeBrand} /><span>{item}</span>
                        </div>
                    )
                })
                 
               }                
               
            </div>
           
        </div>
    )
}
