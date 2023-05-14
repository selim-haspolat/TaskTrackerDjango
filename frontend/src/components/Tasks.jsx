import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import axios from "axios";

const Tasks = ({ tasks, getTasks, BASE_URL }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}todo/${id}/`);
            getTasks();
        } catch (error) {
            console.log(error.message);
            return;
        }
    };

    const handleIsDone = async (id) => {
        try {
            await axios(`${BASE_URL}change_is_done/${id}`);
            getTasks();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container mx-auto text-yellow-400 text-center mt-20 backdrop-blur-md">
            <div className="uppercase tracking-wide text-5xl pt-3">Tasks</div>
            <div className="px-7 py-3">
                {tasks.length > 0 ? (
                    tasks?.map((task) => (
                        <div className="flex justify-between items-center text-left m-7">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl">-- {task.title} --</h2>
                                <p className="text-xl indent-8">
                                    {task.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <RiDeleteBinLine
                                    className="text-3xl cursor-pointer"
                                    onClick={() => handleDelete(task.id)}
                                />
                                {task.is_done ? (
                                    <BsCheckSquare
                                        className="text-2xl"
                                        onClick={() => handleIsDone(task.id)}
                                    />
                                ) : (
                                    <BsSquare
                                        className="text-2xl"
                                        onClick={() => handleIsDone(task.id)}
                                    />
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-red-500 text-2xl font-light">--- There is no Task ---</div>
                )}
            </div>
        </div>
    );
};

export default Tasks;
