
type UserProfileProps = {
    id: number
}
const UserProfile = (props: UserProfileProps) => {
    const {id} = props;

    return(
        <>
            User Profile {id}
        </>
    );
}
export default UserProfile;