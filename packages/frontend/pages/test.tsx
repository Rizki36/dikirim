import backendApi from "@/configs/api/backendApi";
import { AxiosError, AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { NextPage } from "next";
import WithAuth from "hoc/WithAuth";
import { useAppDispatch } from "@/configs/redux/hooks";
import { setUser } from "@/configs/redux/userSlice";
import Router from "next/router";

const Test: NextPage = () => {
    const [username, setUsername] = useState('fitra');
    const [password, setPassword] = useState('123456789');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        backendApi.post<{}, AxiosResponse<{ data: { user: { id: number }, accessToken: string } }>>('http://localhost:5000/signin', {
            username,
            password
        }).then((res) => {
            dispatch(setUser(res.data.data.user))
            Router.replace('/secure');
        }).catch((e: AxiosError) => {
            console.log(e.response);
        })
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <div className="bg-gray-400 flex flex-col p-10">
                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input onInput={(e) => setUsername(e.currentTarget.value)} value={username} type="text" name="username" id="username" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input onInput={(e) => setPassword(e.currentTarget.value)} value={password} type="text" name="password" id="password" />
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default WithAuth(Test, { mustLoggedIn: false });