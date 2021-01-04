import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('React');
    const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceSearchTerm(searchTerm);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm]);

    useEffect(() => {
        const searchWikipedia = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceSearchTerm
                }
            });
            setResult(data.query.search);
        };
            searchWikipedia();
    }, [debounceSearchTerm]);

    /*useEffect(() => {
        const searchWikipedia = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: searchTerm
               }
            });setResult(data.query.search);
            setResult(data.query.search);
        };

        if(searchTerm && !result.length) {
            searchWikipedia();
        } else {
            const timeoutId = setTimeout( () => {
                if(searchTerm)
                    searchWikipedia();
            }, 1000);
            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [searchTerm] /*second arg  could be nothing, an empty array or an array)
    */

    const renderedResult = result.map((r) => {
       return (
           <div key={r.pageid} className="item">
               <div className="right floated element">
                   <a
                       href={`https://en.wikipedia.org?curid=${r.pageid}`}
                       className="ui button">Go</a>
               </div>
               <div className="content">
                   <div className="header">
                       {r.title}
                   </div>
                   <span dangerouslySetInnerHTML={{__html: r.snipper}}></span>
               </div>
           </div>
       );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search term</label>
                    <input className="input"
                           type="text"
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value) }
                    />
                </div>
                <div className="ui celled list">
                    {renderedResult}
                </div>
            </div>
        </div>
    );

}

export default Search;