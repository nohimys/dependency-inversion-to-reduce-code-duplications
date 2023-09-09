import IUser from "../Modals/IUser";

interface ISendMessageBehaviour {
    onSendMessageClick(userDetails: IUser): void;
}
export default ISendMessageBehaviour;