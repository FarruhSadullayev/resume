import React from "react";
import NavbarContainer from '../Components/Navbar'
import'./Home.css'


const HomePage = ()=>{
    return(
        <>
            <NavbarContainer />
           

           <div style={{textAlign:'center',marginTop:'150px',}} className="containner">
            <p style={{color:'grey'}}>Hello,I'm </p>
            <img src="./" alt="" />
            <h1>Farruh</h1>
            <h2 style={{color:'grey'}}>Fronted Developer</h2>
            <button style={{borderRadius:'20%',width:'130px', height:'50px'}} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Dowland CV</button>
            <button style={{borderRadius:'20%',width:'130px', height:'50px',marginLeft:'20px'}} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Contact Info</button>
           </div>


           <div style={{display:'flex', justifyContent:'center', }} className="container">
           <img style={{width:'30px', height:'30px', marginTop:'10px'}} src="" alt="" />
           <img style={{width:'80px', height:'50px'}} src="" alt="" />
           </div><div style={{textAlign:'center', marginTop:'200px'}} className="container44">
       <p style={{color:'grey'}}>Get to know More</p>
       <h1>About me</h1>
       <div style={{border:'grey 2px solid', borderRadius:'20%',width:'1100px',marginLeft:'200px'}}>
       <svg style={{width:'30px', marginTop:'20px'}} class="w-2 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
</svg>
<h3>Education</h3>
<p style={{color:'grey'}}>CoddyCamp IT Academy</p>
<p style={{color:'grey'}}>High Cercificate</p>
<p style={{color:'grey'}}>03/2024</p>

       </div>
</div>


<div style={{marginLeft:'200px'}} className="box">
    <h1>Summary</h1>
    <p style={{color:'grey'}}>Hi I am Frontend Developer, Hardworking and passionate person and positive person, I like working in a team, and I work hard and get along well with the team, I am looking for a good team and job, ready to help team achieve company goals.</p>
</div>


<div style={{textAlign:'center',marginTop:'100px'}} className="boxx4">
<p>Explore My</p>
<h1>Skills</h1>

</div>

<div style={{display:'flex',justifyContent:'center'}}>
<div  style={{border:'grey 2px solid', borderRadius:'20%',width:'600px'}} className="boxx67">
    <h1 style={{color:'grey',textAlign:'center'}}>Fronted Development</h1>
  
    <div style={{display:'flex',justifyContent:'center'}} className="box5">
        <div>
        <h5>HTML</h5>
        <h5>JAVASCRIPT</h5>
        <h5>BOOTSTRAP</h5>
        </div>
        <div style={{marginLeft:'100px'}} className="box6">
        <h5>CSS</h5>
        <h5>REACT JS</h5>
        <h5>TAILWIND CSS</h5>
        </div>
    </div>
  
</div>

<div  style={{border:'grey 2px solid', borderRadius:'20%',width:'600px',marginLeft:'200px',}} className="boxx67">
    <h1 style={{color:'grey',textAlign:'center'}}>Fronted Development</h1>
  
    <div style={{display:'flex',justifyContent:'center'}} className="box5">
        <div>
        <h5>HTML</h5>
        <h5>JAVASCRIPT</h5>
        <h5>BOOTSTRAP</h5>
        </div>
        <div style={{marginLeft:'100px'}} className="box6">
        <h5>CSS</h5>
        <h5>REACT JS</h5>
        <h5>TAILWIND CSS</h5>
        </div>
    </div>
  
</div>
</div>












<div style={{textAlign:'center',marginTop:'100px'}} className="contaiinerr4">
    <p style={{color:'grey'}}>Get in Touch</p>
    <h1>Contact me</h1>
</div>









            {/* <FooterContainer/> */}
           
        </>
    )
}

export default HomePage;