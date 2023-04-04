import { OptionalId, WithId } from "mongodb";
import Payee from "./payee";

interface UserInterface {
    name: string;
    payeeList?: Array<Payee>;
}

type User = OptionalId<UserInterface>

export default User;