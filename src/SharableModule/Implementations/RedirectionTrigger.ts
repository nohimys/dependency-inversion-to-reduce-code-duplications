import ISendMessageBehaviour from "../Interfaces/ISendMessageBehaviour";
import IUser from "../Modals/IUser";

class RedirectionTrigger implements ISendMessageBehaviour {
    onSendMessageClick(userDetails: IUser): void {
        //Mock the API Call
        const postApiCall = new Promise(resolve => {
            console.log(`POST call made for ${userDetails.name}`);
            setTimeout(() => {
                resolve(userDetails);
            }, 1000);
        });

        //Do the redirection
        postApiCall.then(() => {
            window.location.href = `https://medium.com/@nohim.godage`;
        })
    }
}

export default RedirectionTrigger;