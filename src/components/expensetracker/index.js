import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import "./style.css";
import { GlobalProvider } from "./context/GlobalState";
function IncomeExpensesTracker() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default IncomeExpensesTracker;
