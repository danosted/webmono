"use client"
import Money from "@/models/money";
import Payee from "@/models/payee";
import { ObjectId, WithId } from "mongodb";
import { FormEvent, useEffect, useState } from "react";
import SelectPicker from "../SelectPicker";

type AddMoniesFormProps = {
  callback: (money: Money) => Promise<void>;
  payeeList: Array<Payee>;
}

const AddMoniesForm = ({ callback, payeeList }: AddMoniesFormProps) => {

  const [amount, setAmount] = useState(0);
  const [payee, setPayee] = useState<WithId<Payee>>();
  const [localPayeeList, setLocalPayeeList] = useState<Array<WithId<Payee>>>([]);

  useEffect(() => {
    setLocalPayeeList([]);
  }, [payeeList])

  const addToCol = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!payee) return;
    await callback({
      currentAmount: amount,
      payee: { name: payee.name, _id: new ObjectId(payee._id) },
    });
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
        selected={{ name: payee?.name ?? "please select", id: payee?._id?.toString() }}
      />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
}

export default AddMoniesForm;