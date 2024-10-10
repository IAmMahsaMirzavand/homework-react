
import { useState } from "react";

// export default function Toggle() {

//     const [darkTheme,setDarkTheme] = useState(false)
    
// function ToggleThem() {
    
//   setDarkTheme(!darkTheme)
   
// }

//   return (

//     <>
// <button onClick={ToggleThem}>Change Color</button>
// {!darkTheme ? <p className="light-theme" >light</p >: <p className="dark-theme" >dark</p>}
//     </>
//   )
// }




// export default function Toggle() {

//     const [darkTheme,setDarkTheme] = useState(false)

// function ToggleTheme() {
    
//     setDarkTheme(!darkTheme)
//     // (!darkTheme ? <p>Light Mood</p> : <p>Dark Mood</p>)
// }

//   return (
//     <>
     
//         <div >
//             <button onClick={ToggleTheme}>Change Color</button>
//           {  !darkTheme ? <p className="light-theme">Light Mood</p> : <p className="dark-theme">Dark Mood</p>}
         
//         </div>
      
//     </>
//   );
// }

// ;




// export default function Toggle() {
//   const [isDarkTheme, setisDarkTheme] = useState(false); 

//   function ToggleTheme() {
//     setIsDarkTheme(!isDarkTheme); 
//   }

//   return (
//     <>
//       <div>
//         <button onClick={ToggleTheme}>Change Color</button>
//         {darkTheme ? (
//           <p className="dark-theme">Dark Mood</p>
//         ) : (
//           <p className="light-theme">Light Mood</p>
//         )}
//       </div>
//     </>
//   );
// }




// function App() {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   return (
//     <div style={{
//       backgroundColor: isDarkTheme ? '#333' : '#FFF',
//       color: isDarkTheme ? '#FFF' : '#000',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <p>{isDarkTheme ? 'dark' : 'light'}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }

// export default App;




export default function Toggle() {
  const [isDarkTheme, setDarkTheme] = useState(false); 

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? 'black' : 'white',
        color: isDarkTheme ? 'white' : 'black',
        padding: '20px',
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{isDarkTheme ? 'Dark' : 'Light'}</p>
    </div>
  );
}


