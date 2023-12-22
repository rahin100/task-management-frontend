import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdCreateNewFolder } from "react-icons/md";
import Container from "../../Components/Container/Container";
import DashboardItems from "./DashboardItems";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const email = form.email.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    console.log(title, description, deadline, priority,email);

    const taskData = {
      email: user?.email,
      title: title,
      description: description,
      deadline: deadline,
      priority: priority,
      taskStatus: "todo", // Default status
    };
    console.log(taskData);

    axiosPublic.post("/tasks", taskData).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-xl text-white bg-[#050505] text-center p-4 mb-[30px]">
        {user?.displayName}, Welcome to your task management dashboard
      </h1>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-[10px]">
          <div className="mb-4 md:mb-0 md:mr-4">
            <input
              type="text"
              placeholder="Search Task...."
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* create new task  */}
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-warning w-full md:w-auto text-white"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Create New Task <MdCreateNewFolder className="text-[24px]" />
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">ADD TASK</h3>
                <p className="py-4">
                  <div className="card flex-shrink-0 max-w-full shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleAddTask}>
                      {/* 1st row  */}
                      {user?.email ?(
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
                      ) : ""
                    }

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
                            <span className="label-text">Priority Level</span>
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
                          Add Task
                        </button>
                      </div>
                    </form>
                  </div>
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>

        <div>
          <DashboardItems></DashboardItems>
        </div>
      </Container>
    </div>
  );
};

export default DashboardHome;
