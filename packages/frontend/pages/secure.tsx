import backendApi from "@/configs/api/backendApi";
import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks"
import { logout } from "@/configs/redux/userSlice";
import WithAuth from "hoc/WithAuth"

const Secure = () => {
    const user = useAppSelector(state => state.user.account)
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        backendApi.post('/logout').then(res => {
            console.log(res);
            dispatch(logout())
        }).catch(e => {
            console.log(e);
        })
    }

    return <div>
        secure
        <button onClick={handleClick}>Logout</button>
        <div>id :{user?.id}</div>
    </div>
}

export default WithAuth(Secure, { mustLoggedIn: false });