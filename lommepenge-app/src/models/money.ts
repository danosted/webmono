import { ObjectId, OptionalId, WithId } from "mongodb";
import Payee from "./payee";

interface MoneyInterface {
    currentAmount: number;
    payee: Payee;
}

type Money = OptionalId<MoneyInterface>

export default Money;