/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import useTasksCollection from "../../Components/Hooks/useTasksCollection";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const DashboardItems = () => {
  const [tasks, refetch] = useTasksCollection();
  const { user } = useContext(AuthContext);

  const handleUpdateTask = (e, taskId) => {
    e.preventDefault();
    const form = e.target;
  
    const title = form.title.value;
    const email = form.email.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
  
    const updateTask = {
      title: title,
      description: description,
      email: email, // Use the email obtained from the form instead of user?.email
      deadline: deadline,
      priority: priority,
    };
  
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateTask,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task edited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${taskId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-around gap-4">
      <div className="flex-1">
        <div>
          <h3 className="text-white text-3xl font-semibold text-center py-3">
            To-Do
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 border-2">
          {tasks?.map((singleTask) => (
            <div key={singleTask._id} className="card bg-black shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-white">{singleTask.title}</h2>
                <p className="text-white">{singleTask.description}</p>
                <p className="text-white">Deadline: {singleTask.deadline}</p>
                <p className="text-white">Priority: {singleTask.priority}</p>
                <div className="flex justify-end gap-2">
                  <div className="card-actions justify-end">
                    {/* The button to open modal */}
                    <label
                      htmlFor="my_modal_7"
                      className="btn btn-warning text-white"
                    >
                      <MdEdit className="text-[24px]" />
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">UPDATE TASK</h3>
                        <p className="py-4">
                          <form className="card-body" onSubmit={(e) => handleUpdateTask(e, singleTask._id)}>
                            {/* 1st row  */}
                            {user?.email ? (
                              <div className="form-control mb-4 md:w-full lg:ml-4">
                                <label className="label">
                                  <span className="label-text">User Email</span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue={user?.email}
                                  className="input input-bordered w-full"
                                  required
                                />
                              </div>
                            ) : (
                              ""
                            )}

                            <div className="form-control mb-4 md:w-full lg:ml-4">
                              <label className="label">
                                <span className="label-text">Title</span>
                              </label>
                              <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="input input-bordered w-full"
                                required
                              />
                            </div>

                            <div className="form-control mb-4 md:w-full lg:ml-4">
                              <label className="label">
                                <span className="label-text">Description</span>
                              </label>
                              <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                className="textarea textarea-bordered textarea-lg w-full max-w-full mb-3 h-[145px]"
                                required
                              />
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center">
                              <div className="form-control mb-4 md:w-full lg:ml-4">
                                <label className="label">
                                  <span className="label-text">Deadline</span>
                                </label>
                                <input
                                  type="date"
                                  name="deadline"
                                  placeholder="Deadline"
                                  className="input input-bordered w-full"
                                  required
                                />
                              </div>
                              <div className="form-control mb-4 md:w-full lg:ml-4">
                                <label className="label">
                                  <span className="label-text">
                                    Priority Level
                                  </span>
                                </label>
                                <select
                                  className="w-full border-2 py-[6px]"
                                  name="priority"
                                >
                                  <option value="low">Low</option>
                                  <option value="moderate">Moderate</option>
                                  <option value="high">High</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-control mt-6">
                              <button className="btn btn-warning text-white">
                                Update Task
                              </button>
                            </div>
                          </form>
                        </p>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                      </label>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDelete(singleTask._id)}
                      className="btn btn-error text-white"
                    >
                      <AiFillDelete className="text-[24px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 border-4">
        <div>
          <h3 className="text-white text-3xl font-semibold py-3">On-Going</h3>
        </div>
      </div>

      <div className="flex-1 border-4">
        <div>
          <h3 className="text-white text-3xl font-semibold py-3">Completed</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
