import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);

    const BASE_URL = "http://localhost:8000/";

    const getTasks = async () => {
        try {
            const { data } = await axios(`${BASE_URL}todo/`);
            setTasks(data);
        } catch (error) {
            console.log(error.message);
            return;
        }
    };

    return (
        <div className="bg-[url('https://wallpaperaccess.com/full/1390103.png')] pt-16 pb-20 min-h-[100vh]">
            <Header />
            <Form getTasks={getTasks} BASE_URL={BASE_URL} />
            <Tasks tasks={tasks} getTasks={getTasks} BASE_URL={BASE_URL} />
        </div>
    );
}

export default App;
