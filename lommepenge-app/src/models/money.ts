import { ObjectId, OptionalId, OptionalUnlessRequiredId, WithId } from "mongodb";
import Payee from "./payee";

interface MoneyInterface {
    currentAmount: number;
    payee: WithId<Payee>;
}

type Money = MoneyInterface

export default Money;