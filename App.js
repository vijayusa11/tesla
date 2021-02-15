import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__itemContainer'>
        <Item 
        title= 'Model S'
        desc= 'Order Online for Touchless Delivery'
        descLink=''
        backgroungImage= {ModelS}
        leftBtnText= 'CUSTOM ORDER'
        leftBtnLink= ''
        rightBtnText= 'EXISTING INVENTORY'
        rightBtnLink= ''
        twoButtons='true'
        first
  />
       <Item 
        title= 'Model Y'
        desc= 'Order Online for Touchless Delivery'
        descLink=''
        backgroungImage= {ModelY}
        leftBtnText= 'CUSTOM ORDER'
        leftBtnLink= ''
        rightBtnText= 'LEARN MORE'
        rightBtnLink= ''
        twoButtons='true'
  />
     <Item 
        title= 'Model 3'
        desc= 'Order Online for Touchless Delivery'
        descLink=''
        backgroungImage= {Model3}
        leftBtnText= 'CUSTOM ORDER'
        leftBtnLink= ''
        rightBtnText= 'EXISTING INVENTORY'
        rightBtnLink= ''
        twoButtons='true'
  /> 
      <Item 
      title= 'Model X'
      desc= 'Order Online for Touchless Delivery'
      descLink=''
      backgroungImage= {ModelX}
      leftBtnText= 'CUSTOM ORDER'
      leftBtnLink= ''
      rightBtnText= 'EXISTING INVENTORY'
      rightBtnLink= ''
      twoButtons='true'
    />
    <Item 
            title= 'Lowest Cost Solar Panels in America'
            desc= 'Money-back guarantee'
            descLink=''
            backgroungImage= {SolarPanels}
            leftBtnText= 'ORDER NOW'
            leftBtnLink= ''
            rightBtnText= 'LEARN MORE'
            rightBtnLink= ''
            twoButtons='true'
      />
    <Item 
          title= 'Solar for New Roofs'
          desc= 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLink=''
          backgroungImage= {SolarRoof}
          leftBtnText= 'ORDER NOW'
          leftBtnLink= ''
          rightBtnText= 'LEARN MORE'
          rightBtnLink= ''
          twoButtons='true'
    />
    <Item 
          title= 'Accessories'
          desc= 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLink=''
          backgroungImage= {Accessories}
          leftBtnText= 'SHOP NOW'
          leftBtnLink= ''
          rightBtnText= 'LEARN MORE'
          rightBtnLink= ''
          twoButtons='true'
    />
      </div>
    </div>
  );
}

export default App;
