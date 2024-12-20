import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App122';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import FeedbackSubmitted from './FeedbackSubmitted';
import SlotBooked from './SlotBooked';
import Feedback from './Feedback';
import SelectionProcess from './SelectionProcess';
import MyhackathonSelectionProcess from './MyhackathonSelectionProcess';
import MyplacementSelectionProcess from './MyplacementSelectionProcess';
import Workshopfbsubmitted from './Workshopfbsubmitted';
import Webinarfbsubmitted from './Webinarfbsubmitted';
import Projectfbsubmitted from './Projectfbsubmitted';
import Trainingfbsubmitted from './Trainingfbsubmitted';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Workshopfbsubmitted/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
