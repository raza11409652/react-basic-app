import {Alert, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../redux/slices/auth.slice";
import {useEffect, useState} from "react";
import {getBookings} from "../../redux/slices/booking.slice";
import {Content} from "antd/es/layout/layout";
import MurtazaButton from "../../component/button/mutuza.button";
import SingleBooking from "../../component/booking/single.booking";

const DashboardContainer = () => {
    let [query, setQuery] = useState(1)
    let dispatch = useDispatch()
    let {admin} = useSelector((state) => state.AuthReducer)
    let {bookings, isLoading} = useSelector((state) => state.BookingReducer)
    useEffect(() => {
        dispatch(getBookings({query}))
    }, [query])
    let logout = () => {
        dispatch(logoutAction())
    }
    let next = () => {
        setQuery(++query)
    }
    return (
        <p>
            This is dashboard
            <Button onClick={logout}>Logout</Button>
            {JSON.stringify(admin, null, 4)}
            {isLoading && <p>Loading from server</p>}
            <p>{query}</p>
            {bookings.length > 0 ? <>
                <div style={{"display":"flex" , "flexDirection":"row" , "marginBottom":"10px"}}>
                    {bookings.map((item, index) => {
                        return <Content title={"Booking #1"}>
                            <SingleBooking item={item}></SingleBooking>
                        </Content>
                    })}
                </div>
            </> : <>
                <p>No data found</p>
            </>}
            {/*<Button onClick={next}>NEXT</Button>*/}
            <MurtazaButton text={"Clcik ghere"} onClick={next} ></MurtazaButton>
        </p>
    )
}
export default DashboardContainer
