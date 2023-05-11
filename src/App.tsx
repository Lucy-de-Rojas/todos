import React, {useState, useEffect} from 'react';
import './styles/App.scss';




import InputField from './components/inputField';











const App:React.FC = () => {











  return (
    <div className="App">
      <span className='heading'>Taskify with sass</span>



      <InputField />


    </div>
  );
}

export default App;
