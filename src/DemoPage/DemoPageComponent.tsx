import UserProfile from "../SharableModule/Components/UserProfile";

const DemoPageComponent = () => {
    const random1 = Math.ceil( Math.random() * 8)
    const random2 = Math.ceil( Math.random() * 8)
    const random3 = Math.ceil( Math.random() * 8)

    return(
        <div style={{marginBottom: '20px'}}>
            <h2>Demo Page</h2>
            <h3>Client 01</h3>
            <UserProfile
                id={random1 !== 0 ? random1 : 2}
                showImage={true}
                showCompany={false}
            />
            <div>
                <hr/>
            </div>
            <h3>Client 02</h3>
            <UserProfile
                id={random2 !== 0 ? random2 : 2}
                showImage={false}
                showCompany={true}
            />
            <div>
                <hr/>
            </div>
            <h3>Client 03</h3>
            <UserProfile
                id={random3 !== 0 ? random3 : 2}
                showImage={false}
                showCompany={true}
            />
        </div>
    );
}
export default DemoPageComponent;