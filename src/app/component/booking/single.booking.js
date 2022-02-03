import MurtazaButton from "../button/mutuza.button";

const SingleBooking=({item,...props})=>{
    let addToCart=()=>{
        console.log({item})
    }
    return(
        <div className={"booking-card"}>
           <h5>{item?.restaurant_name}</h5>
            <MurtazaButton text={"Clik to add in cart"} onClick={addToCart}/>
        </div>
    )
}

export  default  SingleBooking
