import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
    const navigate = useNavigate(); // useNavigate 호출
    const [val, setVal] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => navigate("/registSuccess/")) // navigate 호출
        .catch(error => alert(error));
    };

    const handleChange = event => {
        setVal(event.target.value);
    }

    return (
        <div>
            <form
                data-netlify="true"
                name="pizzaOrder"
                method="post"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="pizzaOrder" />
                <label>
                    What order did the pizza give to the pineapple?
                    <input name="order" type="text" value={val} onChange={handleChange} />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Test;
