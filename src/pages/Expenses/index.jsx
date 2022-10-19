import React, { useMemo } from "react";
import MonthFilter from "../../common/components/MonthFilter";
import StatCard from "../../common/components/StatCard";
import TransectionTable from "../../common/components/TransectionTable";
import { useTransectionContext } from "../../common/contexts/transectionContext";

const Expenses = () => {
  const { filteredState: state } = useTransectionContext();

  // total expenses
  const expense = state.reduce((prev, current) => {
    if (current.type == "expense") {
      return prev + current.amount;
    }
    return prev;
  }, 0);

  // expenses data
  const expensesData = useMemo(
    () => state.filter((item) => item.type == "expense"),
    [state]
  );

  return (
    <>
      {/* page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Expense</h2>

        {/* <!-- header actions --> */}
        <div className="flex items-center gap-2">
          <MonthFilter />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        <StatCard
          type="expense"
          title="expense"
          amount={expense}
          icon="graph-down-arrow"
        />
      </div>

      <TransectionTable className="mt-10" data={expensesData} />
    </>
  );
};

export default Expenses;
