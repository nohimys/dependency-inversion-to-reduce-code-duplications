import UserProfile from "../SharableModule/Components/UserProfile";

const DemoPageComponent = () => {
    const random = Math.ceil( Math.random() * 8)

    return(
        <>
            <h2>Demo Page</h2>
            <UserProfile
                id={random !== 0 ? random : 2}
            />
        </>
    );
}
export default DemoPageComponent;