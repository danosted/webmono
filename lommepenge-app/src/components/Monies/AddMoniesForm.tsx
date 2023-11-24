"use client"
import Payee from "@/models/payee";
import { FormEvent, useEffect, useState, useContext } from "react";
import SelectPicker from "../SelectPicker";
import { MongoClientServiceContext } from "../MongoClientServiceProvider";
import getClientDb from "../getClientDb";
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";
import getFromDb from "../getFromDb";

type AddMoniesFormProps = {
  callback: () => Promise<void>;
}

const AddMoniesForm = ({ callback }: AddMoniesFormProps) => {
  const clientService = useContext(MongoClientServiceContext)
  const [amount, setAmount] = useState(0);
  const [payee, setPayee] = useState<Payee>();
  const [localPayeeList, setLocalPayeeList] = useState<Array<Payee>>([]);

  useEffect(() => {
    const doStuf = async () => {
      const db = await getClientDb(clientService, DATABASE_NAMES.MAIN_DB);
      if(!db) return;
      const payeelist = await getFromDb<Payee>(db, DATABASE_COLLECTIONS.PAYEE_DB);
      setLocalPayeeList(payeelist);
    }
    doStuf();
  }, [])

  const addToCol = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!payee) return;
    // await callback({
    //   currentAmount: amount,
    //   payee: { name: payee.name, _id: new ObjectId(payee._id) },
    // });
    setAmount(0);
    setPayee(localPayeeList[0]);
  }

  const payeeSelectCallback = (id?: string) => {
    if (!id) return;
    const match = localPayeeList.find(p => p._id?.equals(id));
    if (!match) return;
    setPayee(match);
  }
  return <form onSubmit={addToCol}>
    <label>
      Name:
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.valueAsNumber)}
      />
    </label>
    <label>
      Select Payee:
      <SelectPicker
        onChange={v => payeeSelectCallback(v.id)}
        pickList={localPayeeList.map(l => { return { id: l._id?.toString(), name: l.name } })}
        selected={payee !== undefined ? {name: payee.name, id: payee._id?.toString()} : undefined}
      />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
}

export default AddMoniesForm;