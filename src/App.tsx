import { useState } from 'react';
import { ChangeEvent } from 'react';
import { names } from './names';
import './App.css';

const App = () => {
    let [namesList, setNamesList] = useState(names);

    const handleChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;

        if (value.length === 0) {
            setNamesList(names);
            return;
        }

        const newList = names.filter(name => name
            .toLowerCase()
            .includes(value)
        );

        setNamesList(newList);
    };

    return (
        <div className="App">
            <form>
                <div className="field-box">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="field"
                        placeholder="Type a name..."
                        onChange={handleChange}
                    />
                </div>
            </form>

            <div className="names-list">
                {namesList.map((name, index) => {
                    return <div key={index}>{name}</div>;
                })}
            </div>
        </div>
    );
};

export default App;
