import { useState } from "react";

const Home = () => {
    const [items, setItems] = useState('');
    const [list, setList] = useState([]);
    const groceryItem = {items};

    const handleSubmit = (e) => {
        e.preventDefault();
        addItemToArray(groceryItem);
        console.log(list);
    };

    const addItemToArray = (item) => {
        setList(oldValue => [...oldValue, item]);
    };

    const crossLine = (e) => {
        const element = e.target;
        element.classList.toggle("crossed-line");
    };

    const clearFields = () => {
        document.getElementById("form-box").value = "";
    };
    
    return ( 
        <div className="home-page">
            <div className="add-form">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    id="form-box" 
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                    />
                    <button onClick={clearFields}>Add</button>
                </form>
            </div>
            {list.map(listItems => {
                return (
                    <div key={listItems.id}>
                        <p onClick={crossLine}>{listItems.items}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Home;