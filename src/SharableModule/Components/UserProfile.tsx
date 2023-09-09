import {useEffect, useState} from "react";
import UserApis from "../Utils/UserApis";
import IUser from "../Modals/IUser";
import {deepOrange} from "@mui/material/colors";
import {Avatar, CircularProgress} from "@mui/material";

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

    if(user === undefined){
        return (
            <CircularProgress color="secondary" />
        );
    };


    return(
        <div style={{width:'50%', margin:"auto", border:'solid 2px red'}}>
            User Profile: {user?.name}
            <Avatar
                sx={{ bgcolor: deepOrange[500],  width: 100, height: 100}}>
                {user?.name[0]}
            </Avatar>
        </div>
    );
}
export default UserProfile;