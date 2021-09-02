import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import Button from '@material-ui/core/Button';
const Note = () => {
    
    return (
        <>
            
              <div className="note">
                  <h1>Title</h1>
                  <br />
                  <p>This is the content</p>
                  {/* <Button></Button> */}
                   <button className="btn"><DeleteOutlineIcon className="deleteIcon"/> </button> 
              </div>
                  
        </>
    )
}
export default Note;