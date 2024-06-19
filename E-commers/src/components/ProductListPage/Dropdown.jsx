import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef ,useState} from 'react';
import { useSelector } from "react-redux";
export function Dropdown({Key,name,items,type,pl,setpl})
{

    const r=useRef(null);
    const[flag,setflag]=useState(true);
    const [brand,setbrand]=useState([]);
    const [price,setprice]=useState([]);

    const {products}=useSelector(state=>state.productSlice);

    

 useEffect(()=>{

    if (brand.length==0){
        setpl(products)
        return;
    }

    const t=products.filter(item=>{
        return brand.includes(item.brand);
      })
    
    setpl(t)

 },[brand])   


 
 useEffect(()=>{


    if (price.length==0){
        setpl(products)
        return;
    }

    var t=pl.filter(item=>{

        if(item.price<=price[price.length-1])
            return item
        })

    setpl(t)

 },[price])   


 function Price(e){

    let updatedPrice;
    const d=e.target.name.match(/\d+/g).map(Number);

    if (e.target.checked) 
        updatedPrice = [...price, d[0],d[1]]
    else 
        updatedPrice=[]
    
    setprice(updatedPrice);

    }
  


function Brand(e){

    let updatedBrand;
    if (e.target.checked) {
        updatedBrand = [...brand, e.target.name];
    } else {
        updatedBrand = brand.filter(item => item !== e.target.name);
    }
    setbrand(updatedBrand);
}

function onchange(e)
{
    switch(Key){
        case 0: Price(e)
                 break;
        case 1: Brand(e)
                break;

        case 2: break;

    }


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

            <div ref={r} style={{display:"none"}} className='dropdown-list' >
               {
                items.map((item,index)=>{
                    return(
                        <div className="check" key={index} >
                        <input  type={type}  name={item} onChange={onchange} /><span>{item}</span>
                        </div>
                    )
                })
                 
               }                
               
            </div>
           
        </div>
    )
}
