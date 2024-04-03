import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';
import axios from 'axios';

const url ='https://cwbarry.pythonanywhere.com/menu/';

function App() {
  const [menu, setMenu] = useState([]);
  const [ category, setCategory] = useState([]);
  const [search, setSearch] = useState('all');

  useEffect(() => {
    const getData= async () => {
    const res = await axios.get(url);
    console.log(res.data.menu);
    setMenu(res.data.menu);

    const temp = ['all'];
    for (let item of res.data.menu) {
      if (!temp.includes(item.category)) {
        temp.push(item.category);
      }
    }

    setCategory(temp);
  };

  getData();
 }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} setSearch={setSearch} />
        <Menu data={menu} search={search}/>
      </section>
    </main>
  );
}

export default App;
