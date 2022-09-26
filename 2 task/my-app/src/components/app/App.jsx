import React, {useState} from "react";
import "./App.scss"
import mainFilter from "../data/MainFilter";
import moreFilter from "../data/MoreFilter";
import FilterCar from "../filter/FilterCar";

const App = () => {
    const [mainFilterData, setMainFilterData] = useState(mainFilter);
    const [moreFilterData, setMoreFilterData] = useState(moreFilter);
    const [newFilterData, setNewFilterData] = useState('');

    let selected;
    if (newFilterData !== '') {
        selected = (newFilterData.filter(main => main.selected === true)) 
    }
    
    const resetHandler = () =>{
        setNewFilterData('');
        let newMain = [...mainFilterData];
        let newMore = [...moreFilterData];
        for (let x = 0; x < mainFilterData.length; x++) {
            newMain[x].selected = false;
            setMainFilterData(newMain);
        }
        for (let x = 0; x < moreFilterData.length; x++) {
            newMore[x].selected = false;
            setMoreFilterData(newMore);
        }   
    }
    
    return(
        <div className="container">
            <div className="header">
                <div className="headerTitle">Car type</div>
                {selected?.length > 0 ? 
                    <div role="button" 
                        className="reset" 
                        onClick={resetHandler}>
                            Reset
                    </div> 
                : 
                    ""
                }
            </div>
            <div className="carFilter">
                <FilterCar 
                setNewFilterData={setNewFilterData} 
                mainFilterData={mainFilterData} 
                moreFilterData={moreFilterData}
                setMainFilterData={setMainFilterData}
                setMoreFilterData={setMoreFilterData}
                />
            </div>
        </div>
    )
}

export default App;