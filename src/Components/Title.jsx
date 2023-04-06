import React from 'react';
import { useState } from 'react';
import data from '../assets/data.js'

function Title() {
    const titleData = data.find(title => title.title === "WEB DEVELOPPEUR & WEB MOBILE");

    if (titleData) {
        const newTitle = `${titleData.title}`;
        return <div>
            <h1 className="title">{newTitle}</h1>
        </div>;
    } else {
        console.error(`Title not found`);
        return <div></div>;
    }
}

export default Title;
