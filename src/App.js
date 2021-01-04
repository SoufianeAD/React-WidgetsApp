import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'React',
        content: 'Javascript framework'
    },
    {
        title: 'Why use React ?',
        content: 'Favourite JS library among Engineers'
    },
    {
        title: 'How do you use React ?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container center align">
            <Header />
            <br/>

            <Route path="/">
                <Accordion items={items}/>
            </Route>

            <Route path="/search">
                <Search/>
            </Route>

            <Route path="/translate">
                <Translate/>
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
        </div>
    );
}