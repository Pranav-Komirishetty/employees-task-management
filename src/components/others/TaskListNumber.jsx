/**
 * @param {{ data: { label: string, count: number }[] }} props
 */

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber = () => {

  const { loggedInUser } = useContext(AuthContext)

  return (
    <div className="flex justify-between gap-5 w-full flex-nowrap">
      {loggedInUser.userData.taskStatus.map((ele) => {
        return (
          <div
            key={ele.label}
            className={`text-white rounded-xl px-6 py-5 w-[25%] 
            ${
              ele.label == "Completed"
                ? "bg-green-400"
                : ele.label == "Failed"
                  ? "bg-red-400"
                  : ele.label == "Active"
                    ? "bg-yellow-400"
                    : ele.label == "New Tasks"
                      ? "bg-blue-400"
                      : ""
            }
            `}
          >
            <h1 className="text-3xl font-bold">{ele.count}</h1>
            <h2 className="text-xl font-medium mt-4">{ele.label}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListNumber;
