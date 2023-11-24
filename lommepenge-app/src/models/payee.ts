import { OptionalId, WithId } from "mongodb";

interface PayeeInterface extends Document {
    name: string;
}

type Payee = OptionalId<PayeeInterface>

export default Payee;