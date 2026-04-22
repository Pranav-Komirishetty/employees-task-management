/**
 * @param {{ data: {
 *  taskId: number,
 *   taskTitle: string,
 *   taskDescription: string,
 *   taskDate: string,
 *   status: "new" | "active" | "completed" | "failed",
 *   priority: "High" | "Medium" | "Low",
 *   category: "Development" | "Desing" | "Testing" | "Management" | "DevOps" | "Database" | "Security",
 *}[] }} props
 */

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updatedTaskStatus } from "../../utils/LocalStorage";

const TaskList = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  const handleManageTask = (ele, status) =>{
    const updatedTasks = loggedInUser.userData.tasks.map((task) =>{
        if(task.taskId == ele.taskId){
            return {
                ...task, 
                status
            }
        }
        return task
    })
    
    const updatedEmp = {
            ...loggedInUser.userData,
            tasks: updatedTasks
    }
    const updateEmpTaskStatus = updatedTaskStatus([updatedEmp])

    const updatedUser = {
        ...loggedInUser,
        userData : updateEmpTaskStatus[0]
    }
    setLoggedInUser(updatedUser)
  }

  return (
    <div
      id="taskList"
      className="h-[60%] w-full mt-10 py-5 flex items-center justify-start overflow-x-auto flex-nowrap gap-4"
    >
      {loggedInUser.userData.tasks.map((ele) => {
        return (
          <div
            key={ele.taskId}
            className={`shrink-0 h-full rounded-xl w-75 p-5 ${
              ele.status == "active"
                ? "bg-yellow-400"
                : ele.category == "Design"
                  ? "bg-purple-400"
                  : ele.status == "completed"
                    ? "bg-green-400"
                    : ele.status == "failed"
                      ? "bg-red-400"
                      : ele.status == "new"
                        ? "bg-blue-400"
                        : ele.category == "Database"
                          ? "bg-lime-400"
                          : ele.category == "Security"
                            ? "bg-orange-400"
                            : "bg-gray-500"
            }`}
          >
            <div className="flex justify-between items-end">
              <h1
                className={`px-3 py-1 rounded text-sm ${
                  ele.priority == "High"
                    ? "bg-red-600"
                    : ele.priority == "Medium"
                      ? "bg-rose-500"
                      : ele.priority == "Low"
                        ? "bg-blue-600"
                        : ""
                }`}
              >
                {ele.priority}
              </h1>
              <h3 className="text-sm">{ele.taskDate}</h3>
            </div>
            <p className="text-md text-taupe-800! font-medium mt-1">Category: {ele.category}</p>
            <h1 className="text-xl font-semibold mt-3">{ele.taskTitle}</h1>
            <p className="text-sm font-normal mt-2">{ele.taskDescription}</p>
            <div className="flex justify-end items-end gap-2 sticky top-[80%]">
              {ele.status == "new" ? (
                <button className="px-3 rounded-md py-2 bg-neutral-800 font-medium hover:scale-103 active:scale-98 cursor-pointer"
                        onClick={()=>{
                            handleManageTask(ele, 'active')
                        }}
                >
                  Accept
                </button>
              ) : ele.status == "active" ? (
                <>
                  <button className="px-3 rounded-md py-2 bg-neutral-800 font-medium hover:scale-103 active:scale-98 cursor-pointer"
                          onClick={()=>{
                            handleManageTask(ele, 'completed')
                        }}
                  >
                    Completed
                  </button>
                  <button className="px-3 rounded-md py-2 bg-slate-800 font-medium hover:scale-103 active:scale-98 cursor-pointer"
                          onClick={()=>{
                            handleManageTask(ele, 'failed')
                        }}
                  >
                    Failed
                  </button>
                </>
              ) : ele.status == "completed" ? (
                <h2 className="px-3 rounded-md py-2 bg-neutral-800 font-medium">
                  Task Completed
                </h2>
              ) : ele.status == "failed" ? (
                <h2 className="px-3 rounded-md py-2 bg-slate-800 font-medium">
                  Task Failed
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
