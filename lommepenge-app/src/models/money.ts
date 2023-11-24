import { ObjectId, OptionalId, WithId } from "mongodb";
import Payee from "./payee";
import BaseEntry from "./baseEntry";

interface Money extends BaseEntry {
    currentAmount: number;
    // payee: Payee;
}

export default Money;