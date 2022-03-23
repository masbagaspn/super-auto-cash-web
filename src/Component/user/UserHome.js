import { useLocalStorage } from "../../app/useLocalStorage"


export default function UserHome() {
    const [user, setUser] = useLocalStorage("user", "{}")

    return (
        <div>
            <p> User Home </p>
            <p> Welcome {user.fullName}</p>
        </div>
    )
}