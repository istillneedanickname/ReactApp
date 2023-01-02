import React, { useState } from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import './Catalog.scss';
import data from "../../api/data.json";

const classes = {
  aircraft: 'Aircraft',
  ships: 'Ships',
  cars: 'Cars'
}

const scale = {
  Large: '1:24',
  Medium: '1:96',
  Lower: '1:225',
  Small: '1:350'
}

const Catalog = () => {
  const [classes, setClasses] = useState([]);
  const [scale, setScale] = useState([]);

  const productList = data.productList;
  


  const handleFilterByClasses = (event) => {
    const { value } = event.target
    if (classes.includes(value)) {
      return setClasses(classes.filter((_classes) => _classes !== value))
    }
    setClasses([...classes, value])
  }

   const handleFilterByScale = (event) => {
    const { value } = event.target
    if (scale.includes(value)) {
      return setScale(scale.filter((_scale) => _scale !== value))
    }
    setScale([...scale, value])
  }

  const products = () => {
    const withFilterByClasses = classes.length > 0 ? productList.filter((product) => classes.includes(product.classes)) : productList
    const withFilterByScale = scale.length > 0 ? withFilterByClasses.filter((product) => scale.includes(product.scale)) : withFilterByClasses
    return withFilterByScale
  }

  return (<div className='Catalog'>
    <div className='containerOfFilter'>
    <div className='filter'>
          <h1>Filters by:</h1>
          <div className='filterByClasses'>
            <div>
              <h3>Classes:</h3>
            </div>
            <div className='class'>
              <div>
              <input id={classes.aircraft} type="checkbox" checked={classes.includes(classes.aircraft)} value={classes.aircraft} onChange={handleFilterByClasses} />
              <label htmlFor={classes.aircraft}>{classes.aircraft}</label>
            </div>
            <div>
              <input id={classes.ships} type="checkbox" checked={classes.includes(classes.ships)} value={classes.ships} onChange={handleFilterByClasses} />
              <label htmlFor={classes.ships}>{classes.ships}</label>
            </div>
            <div>
              <input id={classes.cars} type="checkbox" checked={classes.includes(classes.cars)} value={classes.cars} onChange={handleFilterByClasses} />
              <label htmlFor={classes.cars}>{classes.cars}</label>
            </div>
            </div>
          </div>
          <div className='filterByScale'>
            <div>
              <h3>Scale:</h3>
            </div>
            <div className='scale'>
              <div>
              <input id={scale.Large} type="checkbox" checked={scale.includes(scale.Large)} value={scale.Large} onChange={handleFilterByScale} />
              <label htmlFor={scale.Large}>{scale.Large}</label>
            </div>
            <div>
              <input id={scale.Medium} type="checkbox" checked={scale.includes(scale.Medium)} value={scale.Medium} onChange={handleFilterByScale} />
              <label htmlFor={scale.Medium}>{scale.Medium}</label>
            </div>
            <div>
              <input id={scale.Lower} type="checkbox" checked={scale.includes(scale.Lower)} value={scale.Lower} onChange={handleFilterByScale} />
              <label htmlFor={scale.Lower}>{scale.Lower}</label>
            </div>
            <div>
              <input id={scale.Small} type="checkbox" checked={scale.includes(scale.Small)} value={scale.Small} onChange={handleFilterByScale} />
              <label htmlFor={scale.Small}>{scale.Small}</label>
            </div>
            </div>
          </div>
    </div>
    </div>
            
    
    <div className='album py-5 bg-light'>

        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
         
            {
              products().map(item => {
                return (
                  <div class="col" key={item.id}>
                    <CatalogItem
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      price={item.price}
                      scale={item.scale}
                      img={item.img}
                      
                       />
                    </div>)
              })
            }
          </div>
        </div>
      </div>
  )
};

export default Catalog;
