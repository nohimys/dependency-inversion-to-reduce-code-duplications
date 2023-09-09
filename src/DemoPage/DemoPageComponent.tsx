import UserProfile from "../SharableModule/Components/UserProfile";

const DemoPageComponent = () => {
    return(
        <>
            <h2>Demo Page</h2>
            <UserProfile
                id={2}
            />
        </>
    );
}
export default DemoPageComponent;