import get from "./CoreApis";
import IUser from "../Modals/IUser";


const UserApis = {
    getUserById: async (id: number): Promise<IUser> => {
        return  await get(`users/${id}`).then(result => result.json());
    }
};
export default UserApis;