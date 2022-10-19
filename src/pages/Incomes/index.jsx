import React, { useMemo } from "react";
import MonthFilter from "../../common/components/MonthFilter";
import StatCard from "../../common/components/StatCard";
import TransectionTable from "../../common/components/TransectionTable";
import { useTransectionContext } from "../../common/contexts/transectionContext";

const Incomes = () => {
  const { filteredState: state } = useTransectionContext();

  // total incomes
  const income = state.reduce((prev, current) => {
    if (current.type == "income") {
      return prev + current.amount;
    }
    return prev;
  }, 0);

  // income data
  const incomesData = useMemo(
    () => state.filter((item) => item.type == "income"),
    [state]
  );

  return (
    <>
      {/* page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Incomes</h2>

        {/* <!-- header actions --> */}
        <div className="flex items-center gap-2">
          <MonthFilter />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        <StatCard
          type="income"
          title="income"
          amount={income}
          icon="graph-up-arrow"
        />
      </div>

      <TransectionTable className="mt-10" data={incomesData} />
    </>
  );
};

export default Incomes;
