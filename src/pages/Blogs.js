import React, { useState , useEffect} from "react";
import GroovyWalk from "../component/groovyWalk";
import jwt_decode from "jwt-decode";
import Login from "./Login";



  

const Blogs = () => {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  

  if (localStorage.getItem('access-token') !== null) {
    const accessToken = JSON.parse(localStorage.getItem('access-token'));
    //console.log(`token is ${accessToken}`);
    console.log(`token is avalible1`);
  
    try {
      if (jwt_decode(accessToken).exp < Date.now() / 1000) {
        console.log(`token is expired`);
        localStorage.clear();
        return <Login />;
      }else{
        console.log('token is valid2');
        //return <Home />;
        //localStorage.clear();
      } 
      } catch (e) {
        //window.location = "/login";
        localStorage.clear();
        console.log(e)
        return <Login />;
      }
      
  
    
  } else {
    console.log(`token not found`);
    return <Login />;
  }





    return (
      <div>
      {loading ? (
        <GroovyWalk />
      ) : (
      <div  className={'app-parent'}>
  
            <div>
        <h1>shirpala.ir </h1>
        <p>https://shirpala.ir/blog</p>
        <br />
      </div>


  
  
  
      </div>
      
      )}
      </div>
    );


  };
  
  export default Blogs;