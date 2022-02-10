import React, {useState} from "react";
import propTypes from "prop-types";


function Input({ addPost }) {
    const [input, setInput] = useState('');

    function onChange(event){
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const title = event.target.value;

        if(event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">เรื่องที่คุณอยากจะเล่า</div>
            <input className="Input__field" type="text" value={input} onChange={onChange} onKeyDown={onKeyDown}/>

        </div>
    );
}

Input.propTypes = {
    addPost:propTypes.func.isRequired
};

export default Input;