import { Collection, OptionalId, WithId } from "mongodb";
import Payee from "./payee";

type MyCollection = Pick<Collection, "collectionName">

export default MyCollection;