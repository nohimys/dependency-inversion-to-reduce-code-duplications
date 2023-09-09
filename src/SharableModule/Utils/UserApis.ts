import get from "./CoreApis";
import IUser from "../Modals/IUser";


const UserApis = {
    getUserById: (id: number): Promise<IUser> => {
        return  get(`users/${id}`).then(result => result.json());
    }
};
export default UserApis;