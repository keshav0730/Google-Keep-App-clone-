import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const addNote=()=>{
       alert('i am clicked')
  }
  return (
   <> 
     <Header/>
     <CreateNote passNote={addNote}/>
     <Note/>
     <Footer/>
    
   </>
  );
}

export default App;

