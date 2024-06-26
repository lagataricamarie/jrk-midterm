import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Students from './Students';
import Gradebook from './Gradebook';
import Settings from './Settings';
import Logout from './Logout';
import Home from './Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home', 'students', 'gradebook','report', 'settings', 'logout');
    const [toggle, setToggle] = useState(true);   

    const handlePageChange = (page) => {
      setCurrentPage(page);
  };

    const Toggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='container-fluid bg-light min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-4 col-md-2  bg-white vh-100'>
                        <Sidebar setPage={handlePageChange} />
                    </div>
                )}
                <div className={`col ${toggle ? 'col-md-8 col-lg-10' : 'col-md-12'}`}>
                  {currentPage === 'home' && <Home Toggle={Toggle} />}
                  {currentPage === 'students' && <Students Toggle={Toggle} />}
                  {currentPage === 'gradebook' && <Gradebook Toggle={Toggle} />}
                  {currentPage === 'settings' && <Settings Toggle={Toggle} />}
                  {currentPage === 'logout' && <Logout Toggle={Toggle} />}
                </div>
            </div>
        </div>
    );
}

export default App;