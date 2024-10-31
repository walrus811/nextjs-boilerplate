import { format, formatDistance, subDays } from "date-fns";
import { ko } from "date-fns/locale";

export interface DateLabelProps {
  date: Date;
}

function DateLabel({ date }: DateLabelProps) {
  return (
    <div className="text-xl text-indigo-300 flex flex-col gap-3">
      <span>{format(date, "오늘은 eeee", { locale: ko })}</span>
      <span>
        {formatDistance(subDays(new Date(), 3), new Date(), {
          addSuffix: true,
          locale: ko,
        })}
      </span>
    </div>
  );
}

export default DateLabel;
