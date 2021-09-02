import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;
        const {name,value}=event.target
        setNote((prevdata)=>{
            return {
                ...prevdata,
                [name]:value
            }
        });
        console.log(note)
    }



    const addEvent=()=>{
          props.passNote()    
    }
    return (

        <>
            <form> 
                <div className="main_note">
                    <form >
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={InputEvent}
                            placeholder="Title"
                            autoComplete="off"
                        />
                        <textarea
                            cols=""
                            rows=""
                            name="content"
                            value={note.content}
                            onChange={InputEvent}
                            placeholder="Take a Note..."

                        ></textarea>
                        <Button onClick={addEvent} >
                            <AddIcon className="plus-sign" />
                        </Button>
                    </form>
                </div>

            </form>

        </>
    )
}
export default CreateNote;