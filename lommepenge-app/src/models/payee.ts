import { OptionalId, OptionalUnlessRequiredId, WithId } from "mongodb";

interface PayeeInterface {
    name: string;
}

type Payee = PayeeInterface

export default Payee;