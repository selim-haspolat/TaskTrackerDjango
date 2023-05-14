import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ getTasks, BASE_URL }) => {
    const [formInfo, setFormInfo] = useState({ title: "", description: "" });

    useEffect(() => {
        getTasks();
    }, []);

    const postTask = async ({ title, description }) => {
        try {
            console.log(title, description);
            await axios.post(`${BASE_URL}todo/`, {
                title: title,
                description: description,
            });
            getTasks();
        } catch (error) {
            console.log(error.message);
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postTask(formInfo);
        setFormInfo({ title: "", description: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-20 gap-5"
        >
            <input
                className="outline-none px-3 w-96 py-3 border bg-black text-yellow-300 border-yellow-200 focus:border-yellow-400 rounded-md placeholder:text-yellow-200"
                type="text"
                placeholder="Title"
                value={formInfo.title}
                required
                onChange={(e) =>
                    setFormInfo({ ...formInfo, title: e.target.value })
                }
            />
            <textarea
                className="outline-none px-3 w-96 py-3 border bg-black text-yellow-300 border-yellow-200 focus:border-yellow-400 rounded-md placeholder:text-yellow-200"
                type="text"
                placeholder="Deascription"
                value={formInfo.description}
                required
                onChange={(e) =>
                    setFormInfo({ ...formInfo, description: e.target.value })
                }
            />
            <button
                className="w-28 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors rounded-md"
                type="submit"
            >
                OK
            </button>
        </form>
    );
};

export default Form;
