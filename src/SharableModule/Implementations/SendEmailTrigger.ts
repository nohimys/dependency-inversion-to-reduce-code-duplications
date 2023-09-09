import ISendMessageBehaviour from "../Interfaces/ISendMessageBehaviour";
import IUser from "../Modals/IUser";

class SendEmailTrigger implements ISendMessageBehaviour{
    onSendMessageClick(userDetails: IUser): void {
    }

}
export default SendEmailTrigger;