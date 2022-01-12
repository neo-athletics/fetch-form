import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Modal from "./Modal";

function App() {
    let [modal, setModal] = useState(false);
    return (
        <div className="App">
            <Modal modal={modal} setModal={setModal} />
            <Form setModal={setModal} />
        </div>
    );
}

export default App;
