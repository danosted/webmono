import { OptionalId, WithId } from "mongodb";

interface PayeeInterface {
    name: string;
}

type Payee = OptionalId<PayeeInterface>

export default Payee;