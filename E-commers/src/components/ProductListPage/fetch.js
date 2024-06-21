export  async function fetch_by_id(products,state,setimg,id){
        try{
        {
         const t=products.filter((i)=>i._id===id);
         state(t[0]);
        setimg(t[0].key_img);

        }
    }
    catch(err){
        console.log(err);
    }
}