import axios from "../index";

export const getBookingsApi=async({query})=>{
   try{
      let {data}  =await axios.get(`filter/${query}`)
      return data
   }catch (e){
      throw  new Error(e)
   }
}
