import {useEffect, useState} from "react";
import UserApis from "../Utils/UserApis";
import IUser from "../Modals/IUser";

type UserProfileProps = {
    id: number
}
const UserProfile = (props: UserProfileProps) => {
    const {id} = props;

    const [user, setUser] = useState<IUser | undefined>(undefined)

    useEffect( () => {
        (
            async () => {
                const result =  await UserApis.getUserById(id);
                result && setUser(result);
            }
        )();

        return () => {
            setUser(undefined);
        }

    }, [id])


    return(
        <>
            User Profile: {user?.name}
        </>
    );
}
export default UserProfile;