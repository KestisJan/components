import React from 'react'
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


const surveyJson = {
    elements: [{
        name: "Firstname",
        title: "Enter your first name:",
        type: "text"
    },{
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    },{
        name: "Email",
        title: "Enter your email adress",
        type: "text"
    }]
}

function Form() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}

export default Form