import { useState } from "react";
import Button from "./Button";

function SplitForm({ currentFriend, onSplitBill }) {
  const { name } = currentFriend;
  const [billAmount, setBillAmount] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("you");

  function onSubmit(e) {
    e.preventDefault();
    if (!billAmount || !yourExpense) return;
    const FriendBill = billAmount - yourExpense;
    let updatedFriend;
    if (payer === "you")
      updatedFriend = {
        ...currentFriend,
        balance: currentFriend.balance + FriendBill,
      };
    if (payer === "friend")
      updatedFriend = {
        ...currentFriend,
        balance: currentFriend.balance - yourExpense,
      };
    onSplitBill(updatedFriend);
  }
  return (
    <div className="right-container">
      <h2>Split bill with {name}</h2>
      <form>
        <label htmlFor="bill">💰 Bill value</label>
        <input
          type="text"
          id="bill"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
        />
        <label htmlFor="expense">🤵 Your expense</label>
        <input
          type="text"
          id="expense"
          value={yourExpense}
          onChange={(e) => {
            if (Number(e.target.value) > billAmount) return;
            setYourExpense(Number(e.target.value));
          }}
        />
        <label htmlFor="rest-bill">👬 {name}'s expense</label>
        <input
          type="number"
          id="rest-bill"
          value={billAmount - yourExpense}
          disabled
        />
        <label htmlFor="payer">Who's paying</label>
        <select
          id="payer"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        >
          <option value="you">You</option>
          <option value="friend">{name}</option>
        </select>
        <Button onClick={onSubmit}>Split Bill</Button>
      </form>
    </div>
  );
}

export default SplitForm;
