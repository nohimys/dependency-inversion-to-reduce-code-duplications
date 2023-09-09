import ISendMessageBehaviour from "../Interfaces/ISendMessageBehaviour";
import IUser from "../Modals/IUser";

class SendEmailTrigger implements ISendMessageBehaviour {
    onSendMessageClick(userDetails: IUser): void {
        window.location.href = `mailto:${userDetails.email}`;
    }
}

export default SendEmailTrigger;