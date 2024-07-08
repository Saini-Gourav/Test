import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NextPage = () => {
    const data = useSelector((state) => state.data);
    
  return (
    <>
      <header className="header">
        <h1 className="title" style={{ paddingBottom: "40px" }}>
          The Lost City of Future Earth
        </h1>
        <div className="buttons">
          <button className="btn in-progress">Word Explorer</button>
          <button className="btn completed">Story Adventure</button>
          <button className="btn clear-all">Brain Quest</button>
        </div>
      </header>
      <div className="card-container">
        {data.data.map((item) => (
          <div key={item._id} className="card">
            <div className="card-image">
              <img
                src={`https://ik.imagekit.io/dev24/${item.Image[0]}`}
                alt="story"
              />
            </div>
            <div className="card-title">{item.Title}</div>
            <div>{item.Status}</div>
          </div>
        ))}
      </div>
      <div className='button-container'>
        <button><Link style={{textDecoration:"none", color:"white"}} to='/'>
        previous</Link></button>
      </div>
    </>
  );
};

export default NextPage;
