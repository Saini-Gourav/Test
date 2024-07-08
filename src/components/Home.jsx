import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllData } from '../features/Product';

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getAllData());
      }, [dispatch]);

  return (

<div className="container">
      <header className="header">
        <h1 className="title">Science Fiction Stories</h1>
        <div className="buttons">
          <button className="btn new">New</button>
          <button className="btn in-progress">In Progress</button>
          <button className="btn completed">Completed</button>
          <button className="btn clear-all">Clear All</button>
        </div>
      </header>
<div className="card-container">
        {data.data.map((item) => (
          <div key={item._id} className="card">
            <div className="card-image">
              <img src={`https://ik.imagekit.io/dev24/${item.Image[0]}`} alt="story" />
            </div>
            <div className="card-title">{item.Title}</div>
            <div>
              {item.Status}
            </div>
          </div>
        ))}
      </div>
      <div className='button-container'>
        <button>Previous</button>
        <button><Link style={{textDecoration:"none", color:"white"}} to='/nextpage'>Next</Link></button>
      </div>
    </div>
  );
};

export default Home;
