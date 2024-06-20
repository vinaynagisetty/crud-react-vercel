import Table from "./Table";
import Form from "./Form";
import { getData ,deleteData,postData,putData} from "./Api";
import { useEffect, useState } from "react";
function App(){
 let [products,setProducts]= useState([])
 let [openForm,setOpenForm]=useState(false);
 let [edit,setEDit]=useState(false);
 
 let [intialData,setIntialData]=useState({
   name:'',
   price:'',
   category:''
 })
  useEffect(
   ()=>{
    getProducts();
   },[]
  )
  let getProducts= async()=>{
  let res= await  getData();
  setProducts(res.data)
  }
  let deleteProducts = async (id) => {
    await deleteData(id);
    getProducts();
  }
  let addProducts = async (product) => {
    let data={
      name:product.name,
      price:product.price,
      category:product.category
    }

    if(edit){
     await putData(product.id,data)
    }
    else{
      await postData(data);
    }
    

    getProducts();
    setOpenForm(false);
 

  }
  let editProducts = async (data) => {
    setIntialData(data)
    setOpenForm(true);
    setEDit(true);
  
 

  }
    function ShowForm(){
      setOpenForm(true);
      setIntialData({
        name:'',
        price:'',
        category:''
      })
      setEDit(false);
    }
    function CloseFom(){
      setOpenForm(false);
    }
  return (
    
      <div className="wrapper m-5 w-50">
        <h2 className="text-center text-primary">React Crud Operation </h2>
        <button className="btn btn-success float-end" onClick={ShowForm} >ADD</button>
        <Table products={products} delete={deleteProducts}  edit={editProducts} />
        {openForm&&<Form close={CloseFom} data={intialData} add={addProducts} />}
        
      </div>
  
  )
}
export default App;