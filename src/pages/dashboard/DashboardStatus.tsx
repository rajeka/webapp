import DateUtils from "../../utils/DateUtils";
import CurrencyUtils from "../../utils/CurrencyUtils";

interface Props {
  loggedInUser: string;
  totalExpenses: number;
}

const DashboardStatus = ({ loggedInUser, totalExpenses }: Props) => {
  return (
    <div className="mt-2">
      <div className="text-center">
        <h5 className="mb-3">Total Expenses</h5>
        <h3>
          <span className="badge rounded-pill app-primary-bg-color">
            {CurrencyUtils.formatToUSD(totalExpenses)}
          </span>
        </h3>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <div>
          Welcome, <b className="app-primary-color">{loggedInUser}</b>
        </div>
        <div>{DateUtils.getFormattedDate(new Date())}</div>
      </div>
    </div>
  );
};
export default DashboardStatus;
