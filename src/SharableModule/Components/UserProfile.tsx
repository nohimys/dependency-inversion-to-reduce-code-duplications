import {useEffect, useState} from "react";
import UserApis from "../Utils/UserApis";
import IUser from "../Modals/IUser";
import {Avatar, Box, Button, CircularProgress, Typography} from "@mui/material";

type UserProfileProps = {
    id: number,
    showImage: boolean,
    showCompany: boolean
}
const UserProfile = (props: UserProfileProps) => {
    const {id, showImage, showCompany} = props;

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

    }, [id]);

    const avatarImage = () => {
        return(
            <>
                {
                    showImage
                        ?
                        <Avatar
                            src="https://facts.net/wp-content/uploads/2023/07/32-facts-about-nicole-maines-1689049554.jpg"
                            sx={{
                                width: 100,
                                height: 100,
                                margin: 'auto',
                                marginBottom: '15px'
                            }}/>
                        :
                        <Avatar
                            sx={{
                                width: 100,
                                height: 100,
                                margin: 'auto',
                                marginBottom: '15px',
                                fontSize:'3rem'
                            }}>{user?.name[0]}</Avatar>
                }
            </>
        );
    }

    if(user === undefined){
        return (
            <CircularProgress color="secondary" />
        );
    }

    //window.location.href = "mailto:address@dmail.com";

    return(
        <div style={{width:'60%', margin:"auto"}}>
            <Box sx={{
                boxShadow: 6,
                padding: '10px',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            }}>
                {avatarImage()}

               <div style={{margin:'auto 40px auto 40px'}}>
                  <div>
                      <Typography variant="h5" align={'left'}>
                          {user?.name}
                      </Typography>
                      <Typography variant="body1" align={'left'} >
                          {user?.email}
                      </Typography>
                      <Typography variant="body1" align={'left'} >
                          {user?.phone}
                      </Typography>
                      <Typography variant="body1" align={'left'} >
                          {user?.website}
                      </Typography>
                  </div>
                   <div style={{margin:'20px auto auto auto'}}>
                       <Typography variant="h6" align={'left'}>
                           Address:
                       </Typography>
                       <Typography variant="body1" align={'left'}>
                           {user?.address.suite}
                       </Typography>
                       <Typography variant="body1" align={'left'}>
                           {user?.address.street}
                       </Typography>
                       <Typography variant="body1" align={'left'}>
                           {user?.address.city} | {user?.address.zipcode}
                       </Typography>
                   </div>
                   {
                       showCompany
                       &&
                       <div style={{margin: '20px auto auto auto'}}>
                           <Typography variant="h6" align={'left'}>
                               Company:
                           </Typography>
                           <Typography variant="body1" align={'left'}>
                               {user?.company.name}
                           </Typography>
                           <Typography variant="body1" align={'left'}>
                               {user?.company.catchPhrase}
                           </Typography>
                           <Typography variant="body1" align={'left'}>
                               {user?.company.bs}
                           </Typography>
                       </div>
                   }
                   <div id={'button-pane'} style={{textAlign:'right'}}>
                       <Button
                           variant="contained"
                           onClick={() => {window.location.href = "mailto:address@dmail.com"}}
                       >
                           Send Message
                       </Button>
                   </div>
               </div>
            </Box>
        </div>
    );
}
export default UserProfile;