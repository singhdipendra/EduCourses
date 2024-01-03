import React from "react";

const Filter = (props) => {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className="font-bold  w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center"> 
           {
            filterData.map( (data) => (
            
             <button
              className={`text-lg px-2 py-1 rounded-md font-medium 
                         hover:bg-opacity-50 border-2 transition-all duration-300
                          ${category===data.title ? "bg-opacity-70 border-white bg-indigo-700": "border-opacity-90 bg-indigo-400 border-transparent"}
                            `}
             key={data.id}
             
              onClick={()=>filterHandler(data.title)}

             >{data.title}
            </button>
             
            ))
           }
        </div>
    ) 
}

export default Filter