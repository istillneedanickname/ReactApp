import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';

const Box = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const loadImg = () => {
      fetch(`https://picsum.photos/v2/list`, {
          method: 'GET',
      })
          .then((response) => {
              console.log('response', response);
              return response.json();
          })
          .then((responseJson) => {
          console.log('responseJson', responseJson);
          setItems(responseJson);
          setIsLoaded(true);
      });
  }

  const sendUser = () => {
    const url =  'https://jsonplaceholder.typicode.com/posts'
    let user = {
      firstName: "Eugene",
      lastName: "Opolonyk",
      email: "z.opolonyk@gmail.com"
    }
    fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then((response) => {
    console.log('response', response);
    return response.json();
})

.then((responseJson) => {
  console.log('responseJson', responseJson);
  })

}



  useEffect(() => {
  }, [items])

  return (
      <div className={styles.Box}>
          <div id="demo">
              <h2>Let AJAX change this text</h2>
              <button type="button" onClick={sendUser}>Change Content</button>
          </div>
          {/* {
              isLoaded ?
                  <div>
                      {
                          items.map(item => {
                              return (
                                  <div>
                                      <img width='300px' height='200px' src={item.download_url} alt="img"/>
                                  </div>
                              )
                          })
                      }
                  </div>
              : ''
          } */}

      </div>
  );
}

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
