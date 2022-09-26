import React, { useState } from "react";
import './Filter.scss';

const FilterCar = (props) => {
    const {setNewFilterData, mainFilterData, setMainFilterData, moreFilterData, setMoreFilterData} = props;
    const [showMoreItem, setShowMoreItem] = useState(false);
    
    const modalHandler = () => {
        if(showMoreItem === false){
            setShowMoreItem(true);
        } else {
         setShowMoreItem(false);   
        }
    } 
    
    const selectedHandler = index => e => {
        let newMainFilterData = [...mainFilterData];
        if(newMainFilterData[index].selected === false){
            newMainFilterData[index].selected = true;
            setMainFilterData(newMainFilterData);
        } else {
            newMainFilterData[index].selected = false
            setMainFilterData(newMainFilterData);
        }   
        setNewFilterData(mainFilterData)
    }
    
    const moreHandler = index => e => {
        let updatedValue = e.target.value;
        if (updatedValue === "true" || updatedValue == "false") {updatedValue = JSON.parse(updatedValue);}
        let newMoreFilterData = [...moreFilterData];
        if(newMoreFilterData[index].selected === updatedValue) {
            newMoreFilterData[index].selected = true;
            setMoreFilterData(newMoreFilterData);
        } else {
            newMoreFilterData[index].selected = updatedValue;
            setMoreFilterData(newMoreFilterData);
        }
        setNewFilterData(moreFilterData)
    }

    let selected;
    if (moreFilterData !== '') {
        selected = (moreFilterData.filter(main => main.selected === true)) 
    }

    const resetHandler = () =>{
        let newMore = [...moreFilterData];
        for (let x = 0; x < moreFilterData.length; x++) {
            newMore[x].selected = false;
            setMoreFilterData(newMore);
        }
        setShowMoreItem(false)
    }

    return (
        <div className="optionList">
            <div className="mainOption">
                {mainFilterData.map((car, index) => (
                    <button
                        key={index} 
                        className={(!car.selected ? "optionItem" : "optionItem1")} 
                        onClick={selectedHandler(index)}
                        >
                            <img className="lineImage" src={car.src} alt={car.size}/>
                            <div className="lineContent">{car.size}</div>
                            <div className="tooltip">
                                <span className="tooltiptext">{car.price}</span>
                            </div>
                    </button>
                ))}
                {selected.length === 0 ? <button className={(!showMoreItem ? "optionItem" : "optionItem1")}  onClick={modalHandler}>
                     More 
                </button> : 
                <div className="optionItemSelected" onClick={modalHandler}>
                    <div className="selectedDiv">
                        <div className="selectedItem">More</div>
                        <div className="selectedItem1">{selected.length} selected</div> 
                    </div>
                    <div className='buttonDiv'>
                       <button className="selectButton" onClick={resetHandler}>X</button> 
                    </div>
                </div>}
            </div>
            {showMoreItem ? 
                <div className="moreOption">
                    {moreFilterData.map((car, index) => (
                        <label 
                            key={index} 
                            className="moreItem"
                            >   
                            {!car.selected ? 
                                <input type="checkbox" value={true} onClick={moreHandler(index)} id="terms" required/> 
                            : 
                                <input type="checkbox" value={false} onClick={moreHandler(index)} id="terms" checked/>
                            } 
                            <img className="lineImage" src={car.src} alt={car.size}/>
                            <div className="lineContent">{car.size}</div>
                            <div className="priceContent">{car.price}</div>
                        </label>   
                    ))}
                </div> 
            :
                ""
            }
        </div>
    )
} 

export default FilterCar;