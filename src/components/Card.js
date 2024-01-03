import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course =props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
       //liked
       if(likedCourses.includes(course.id)){
           setLikedCourses((prev)=>prev.filter((cid)=>(cid!=course.id)));
           toast.warning("LIKE REMOVED");
       }
       else{
           if(likedCourses.length===0){
            setLikedCourses([course.id]);
           }
           else{
              setLikedCourses((prev)=>[...prev,course.id]);
           }
           toast.success("LIKE ADDED");
       }
    }

    return (
        <div className="w-[300px] bg-indigo-500 bg-opacity-90  rounded-md overflow-hidden ">

            <div className="relative ">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2
                            grid place-items-center bottom-[-11px]">
                <button onClick={clickHandler}>
                  {
                     likedCourses.includes(course.id) ? 
                     (<FcLike fontSize="1.75rem"/>) : 
                     (<FcLikePlaceholder fontSize="1.75rem"/>)
                  }
                </button>
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-bold tex-lg leading-6 "> {course.title} </p>
            <p className="text-white mt-2">
              {
                course.description.length > 100 ? 
                (course.description.substr(0,100))+"..."
                :
                (course.description)
              }
                </p>
          </div>

        </div>
    ) 
}

export default Card