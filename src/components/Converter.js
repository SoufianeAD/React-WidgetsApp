import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Converter = ({ language, text}) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState();

    useEffect( () => {
        const idTimeOut = setTimeout( () => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(idTimeOut);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h3 className="ui header">Output</h3>
            <h3>{translated}</h3>
        </div>
    );
}
export default Converter;