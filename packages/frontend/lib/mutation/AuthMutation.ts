import { setUser } from '@/configs/redux/userSlice';
import { AxiosResponse } from 'axios';
import backendApi from '@/configs/api/backendApi';

interface ILoginResponse {
    data: {
        user: { id: number };
        accessToken: string;
    };
}

interface ILoginParams {
    username: string,
    password: string,
    dispatch: any
}

export const loginMutation = async (params: ILoginParams) => {
    // extract data
    const { username, password, dispatch } = params;

    // post data
    const data = { username, password }

    const res = await backendApi.post<{}, AxiosResponse<ILoginResponse>>("/signin", data);

    dispatch(setUser(res.data.data.user));
}