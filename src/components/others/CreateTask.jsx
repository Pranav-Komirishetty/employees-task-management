import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useState, useEffect } from "react";
import { updatedTaskStatus } from "../../utils/LocalStorage";

const CreateTask = () => {
  const {empsData, setEmpsData} = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  const [empsList, setEmpsList] = useState(null);
  const [categoryList] = useState([
    "Development",
    "Design",
    "Testing",
    "Management",
    "DevOps",
    "Database",
    "Security",
  ]);
  const [priorityList] = useState(["High", "Medium", "Low"]);

  const [openEmp, setOpenEmp] = useState(false);
  const [openPriority, setOpenPriority] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  useEffect(() => {
    const emps = empsData.map((emp) => emp.name);
    setEmpsList(emps);
  }, [empsData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !date ||
      !assignTo ||
      !priority ||
      !category
    ) {
      alert("Enter all details");
      return;
    }

    const updatedEmployees = empsData.map((emp)=>{
      if(emp.name === assignTo){
        const taskId = emp.tasks.length + 1

        return {
          ...emp,
          tasks: [
            ...emp.tasks,
            {
            taskId,
            taskTitle: title,
            taskDescription: description,
            taskDate: date,
            status: 'new',
            priority,
            category
          }
          ]
        }
      }
      return emp
    })

    const updateEmpTaskStatus = updatedTaskStatus(updatedEmployees)

    setEmpsData(updateEmpTaskStatus)

    setTitle('')
    setDescription('')
    setDate('')
    setCategory('')
    setPriority('')
    setAssignTo('')
  };

  return (
    <div>
      <form
        className="w-full h-full flex justify-start items-start p-5 rounded-md bg-[#1C1C1C]"
        action=""
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <div className="w-2/5 flex flex-col justify-between gap-3">
          <div className="gap-1">
            <h3>Description</h3>
            <textarea
              className="w-11/12 h-30 bg-transparent border border-gray-300 outline-none rounded-md p-2"
              name=""
              id=""
              placeholder="enter description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="w-3/5 flex justify-start flex-wrap">
          <div className="w-1/3 mb-3">
            <h3>Task title</h3>
            <input
              className="w-5/6 h-10 bg-transparent border border-gray-300 outline-none rounded-md p-2"
              type="text"
              placeholder="enter task title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="w-1/3 mb-3">
            <h3>Date</h3>
            <input
              className="w-5/6 h-10 bg-transparent border border-gray-300 outline-none rounded-md p-2"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="w-1/3 mb-3">
            <h3>Category</h3>
            <div className="relative w-5/6">
              <div
                onClick={() => {
                  setOpenCategory(!openCategory);
                  setOpenEmp(false);
                  setOpenPriority(false);
                }}
                className="border p-2 rounded cursor-pointer flex justify-between ro"
              >
                {category || "Select category"}
                <span className={`${openCategory ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </div>

              {openCategory && (
                <div className="absolute w-full bg-gray-800 border mt-1 rounded z-10">
                  {categoryList.map((ele, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setCategory(ele);
                        setOpenCategory(false);
                      }}
                      className="p-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {ele}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="gap-1 w-1/3">
            <h3>Priority</h3>
            <div className="relative w-5/6">
              <div
                onClick={() => {
                  setOpenPriority(!openPriority);
                  setOpenEmp(false);
                  setOpenCategory(false);
                }}
                className="border p-2 rounded cursor-pointer flex justify-between ro"
              >
                {priority || "Select Priority"}
                <span className={`${openPriority ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </div>

              {openPriority && (
                <div className="absolute w-full bg-gray-800 border mt-1 rounded z-10">
                  {priorityList.map((ele, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setPriority(ele);
                        setOpenPriority(false);
                      }}
                      className="p-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {ele}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="gap-1 w-1/3">
            <h3>Assign to</h3>
            <div className="relative w-5/6">
              <div
                onClick={() => {
                  setOpenEmp(!openEmp);
                  setOpenCategory(false);
                  setOpenPriority(false);
                }}
                className="border p-2 rounded cursor-pointer flex justify-between ro"
              >
                {assignTo || "Select employee"}
                <span className={`${openEmp ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </div>

              {openEmp && (
                <div className="absolute w-full bg-gray-800 border mt-1 rounded z-10">
                  {empsList.map((emp, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setAssignTo(emp);
                        setOpenEmp(false);
                      }}
                      className="p-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {emp}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="gap-1 w-1/3 self-end">
            <button className="w-5/6 h-10 bg-black font-semibold rounded-md py-2 cursor-pointer hover:scale-105 active:scale-100 transition-all ease-in-out">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
