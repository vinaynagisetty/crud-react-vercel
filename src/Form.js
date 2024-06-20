import { useState } from "react";

function Form(props){
    let [products,setProducts]=useState(props.data);
    let [submit,setSubmitted]=useState(false);

    let changeData=(e)=>{
       
        const {name,value}=e.target;
      setProducts({...products,[name]:value});
        
    }
    return (
        <>
        <div className="form-overlay">
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className="form-control m-2" type="text" value={products.name}  name ="name" id="name" placeholder="Enter the name" 
                    onChange={changeData} />
                    {submit&&products.name===''&&<span className="text-danger">product name is required </span>}

                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input className="form-control m-2" type="number" value={products.price}  name ="price" id="price" placeholder="Enter the price"   onChange={changeData} />
                    {submit&&products.price===''&&<span className="text-danger">product Price is required </span>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Category</label>
                     <select   value={products.category}  className="form-control m-2" name="category" id="category"   onChange={changeData}>
                        <option value={-1}></option>
                        <option value={"mobiles"}>Mobiles</option>
                        <option value={"tv"}>TV's</option>
                        <option value={"laptop"}>Laptops</option>

                     </select>
                     {submit&&products.category===''&&<span className="text-danger">product Category is required </span>}

                </div>
                <button className="btn btn-success m-3 float-end"
                onClick={
                    (e)=>{
                        setSubmitted(true)
                        e.preventDefault();
                        if(!!products.name&&!!products.price&&!!products.category){
                         
                          props.add(products) 
                        }

                    }
                }>Send</button>
                <button className="btn btn-danger m-3 float-end"
                 onClick={
                    (e)=>{
                        e.preventDefault();
                        props.close()
                    }
                }>Close</button>
            </form>

        </div>
        </>
    )
}
export default Form;