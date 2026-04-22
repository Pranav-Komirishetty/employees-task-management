import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const { empsData } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] w-full flex flex-col h-75 p-5 mt-4 rounded-md">
      <div className="flex justify-start p-1 px-8 mb-2 rounded-lg bg-red-400 font-semibold">
        <h2 className="w-2/6">Employee Name</h2>
        <h4 className="w-1/6">Active</h4>
        <h4 className="w-1/6">Completed</h4>
        <h4 className="w-1/6">New Tasks</h4>
        <h4 className="w-1/6">Failed</h4>
      </div>
      <div id="allTasks" className="overflow-auto p-0">
        {empsData &&
          empsData.map((ele, idx) => (
            <div key={idx}
              className={`flex justify-start p-3 px-8 mb-3 rounded-lg ${idx % 2 == 0 ? "bg-indigo-950/80" : "bg-teal-950/80"}`}
            >
              <h2 className="w-2/6">{ele.name}</h2>
              {ele.taskStatus.map((item) => (
                <h4 key={item.label}
                  className={` font-semibold w-1/6 ps-5 ${
                    item.label == "Active"
                      ? "text-yellow-400!"
                      : item.label == "Completed"
                        ? "text-green-400!"
                        : item.label == "New Tasks"
                          ? "text-blue-400!"
                          : item.label == "Failed"
                            ? "text-red-400!"
                            : ""
                  }`}
                >
                  {item.count}
                </h4>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTasks;
