import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import DatePicker from '../../src';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [selectedDay, setValue] = useState({ from: null, to: null });
  return <DatePicker selectedDayRange={selectedDay} onChange={setValue} isDayRange />;
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
