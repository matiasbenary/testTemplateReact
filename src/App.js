import React, { useEffect } from 'react';
import { useDispatch,  useSelector } from "react-redux";
import { actions } from './store/ducks/activities.duck';
import Header from './components/organisms/Navbar3';
import Card from './components/molecules/Card';


function App() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);
  const activitiesLoading = useSelector(state => state.activities.loading);

  useEffect(() => {
    //   // props.getUsers();as
      if (!activities) {
        dispatch(actions.getActivities(activities));
      }
    }, []);

    const renderUser = () => {
      if(activities){
          return activities.data.map((value) => (<Card 
          key={value.id}
          title={value.title} 
          description={value.short_description} 
          img={value.description_image}
          id={value.id}
          />));
      }else if(activitiesLoading){
          return <div>cargando</div>
      }
  
      return <div></div>
  }

  return (
      <div className="bg-gray-200 h-full">
        <Header />
        <div className="flex flex-wrap justify-around p-2 mx-48">
          {renderUser()}
        </div>

        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button> */}
      </div>

  );
}

export default App;
