import { OptionalId, WithId } from "mongodb";
import Payee from "./payee";
import BaseEntry from "./baseEntry";

interface User extends BaseEntry {
    payeeList?: Array<Payee>;
}

export default User;