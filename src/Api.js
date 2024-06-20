import axios from "axios";

let url="http://localhost:5000/products";
 export async function getData(){
    return await axios.get(url);
}
export async function deleteData(id){
    return await axios.delete(`${url}/${id}`);
}
export async function postData(data){
    return await axios.post(url,data,{
        headers:{
            "Content-Type":"application/json"
        }
    });
}
export async function putData(id,data){
    return await axios.put(url+"/"+id,data,{
        headers:{
            "Content-Type":"application/json"
        }
    });
}