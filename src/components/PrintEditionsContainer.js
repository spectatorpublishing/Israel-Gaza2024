import React from 'react';
import PrintEdition from './PrintEdition';
import editionsData from '../data/articles_final.json';
const PrintEditionsContainer = () => {
  return (
    <div>
      {Object.keys(editionsData).map((month) => (
        <div key={month}>
          <h2>{month}</h2>
          {editionsData[month].map((edition, index) => (
            <PrintEdition key={index} cover={{ image: edition.image_url, title: edition.article_title }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrintEditionsContainer;