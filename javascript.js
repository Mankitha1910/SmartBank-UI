let balance = 0;
const balanceEl = document.getElementById("balance");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

function updateBalance() {
  balanceEl.textContent = `₹${balance.toFixed(2)}`;
}


updateBalance();


depositBtn.addEventListener("click", () => {
  const depositInput = document.getElementById("deposit");
  const depositAmount = parseFloat(depositInput.value);

  if (!isNaN(depositAmount) && depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    depositInput.value = "";
  } else {
    alert("Enter a valid amount to deposit");
  }
});


withdrawBtn.addEventListener("click", () => {
  const withdrawInput = document.getElementById("withdraw");
  const withdrawAmount = parseFloat(withdrawInput.value);

  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    if (withdrawAmount <= balance) {
      balance -= withdrawAmount;
      updateBalance();
    } else {
      alert("Insufficient balance!");
    }
    withdrawInput.value = "";
  } else {
    alert("Enter a valid amount to withdraw");
  }
});
