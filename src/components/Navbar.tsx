'use client'

import {Bars3Icon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {FunctionComponent} from "react";

const navigation = [
    {name: 'About', href: '/about', current: true},
    {name: 'Happy Hour', href: '/happyhour', current: false},
    {name: 'Pokemon', href: '/pokemon', current: false},
]


const LoginButton: FunctionComponent = () => {
    const {loginWithRedirect} = useAuth0();

    return <button className="btn btn-ghost"
                   onClick={() => loginWithRedirect()}>
        Log In
    </button>
};

const LogoutButton: FunctionComponent = () => {
    const {logout} = useAuth0();

    return <button className="btn btn-ghost"
                   onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
        Log Out
    </button>
};

const getRightNav = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user, isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return <>
            <span className="pr-4">
                Hello {user?.name}
            </span>
            <LogoutButton/>
        </>;
    }
    return <LoginButton/>;
}

export default function Navbar() {

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className={"dropdown"}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <Bars3Icon className={"h-10 w-10"}/>
                    </label>
                    <ul tabIndex={0}
                        className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                        {navigation.map(n => {
                            return <li key={n.name}><Link to={n.href}>{n.name}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Brian Hanna</Link>
            </div>
            <div className="navbar-end">
                {getRightNav()}
            </div>
        </div>
    )
}
