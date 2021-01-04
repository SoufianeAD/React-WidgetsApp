import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Converter from "./Converter";

const options = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Italian',
        value: 'it'
    }
];

const Translate = () => {
    const [text, setText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
                label='Select a language'
                options={options}
                selected={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
            />
            <Converter language={ selectedLanguage } text={ text } />
        </div>
    );
}

export default Translate;