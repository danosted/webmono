"use client"

import Money from "@/models/money";
import Payee from "@/models/payee";
import { ObjectId, OptionalId, WithId } from "mongodb";
import { FormEvent, useEffect, useState } from "react";
import SelectPicker from "../SelectPicker";

type AddMoniesFormProps = {
  callback: (money: Money) => Promise<void>;
  // payeeList: Array<WithId<Payee>>;
}

const AddMoniesForm = ({ callback }: AddMoniesFormProps) => {

  const [amount, setAmount] = useState(0);
  // const [payee, setPayee] = useState<WithId<Payee>>();
  // const [localPayeeList, setLocalPayeeList] = useState<Array<WithId<Payee>>>([]);

  // useEffect(() => {
  //   setLocalPayeeList([{ name: "Select payee", _id: new ObjectId() }, ...payeeList]);
  // }, [payeeList])

  // const addToCol = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!payee) return;
  //   await callback({
  //     currentAmount: amount,
  //     name: 'test',
  //     payee: payee
  //   });
  //   setAmount(0);
  //   setPayee(undefined);
  // }

  // const payeeSelectCallback = (id?: string) => {
  //   if (!id) return;
  //   const match = localPayeeList.find(p => p._id?.equals(id));
  //   if (!match) return;
  //   setPayee(match);
  // }

  const addToCol = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await callback({
      currentAmount: amount,
      name: 'test',
    });
    setAmount(0);
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
      {/* <SelectPicker
        onChange={v => payeeSelectCallback(v.id)}
        pickList={localPayeeList.map(l => { return { id: l._id?.toString(), name: l.name } })}
        selected={{ name: payee?.name ?? "please select", id: payee?._id?.toString() }}
      /> */}
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
}

export default AddMoniesForm;