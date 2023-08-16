import {useAuth0} from "@auth0/auth0-react";

const ProfilePage = () => {
    const {user} = useAuth0();

    if (user) {
        return (
            <section className="">
                <div className="text-center">
                    <img className="max-w-sm avatar rounded-box" src={user.picture} alt={user.nickname}/>
                    <h1>{user.name}</h1>
                    <p>Nickname: {user.nickname}</p>
                    <p>Updated At: {user.updated_at}</p>
                </div>
            </section>
        )
    }

    return <div>No user data...</div>
}

export default ProfilePage
