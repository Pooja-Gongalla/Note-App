import React from 'react';
import styles from '../style.module.css';

function AddNote({ currentNote, setCurrentNote, noteList, setNoteList, currentEditNote }) { //currentnote is a variable passed as a prop to the AddNote function component.
  console.log(currentNote, noteList);

  function handleNoteOnSubmit(event) {
    event.preventDefault();
    noteList.push({
      id: noteList.length + 1,
      label: currentNote,
    });
    setNoteList(noteList);// setnotelist(notelist): This line seems to be using a state-setting function, presumably from a React component. It updates the state variable notelist with the modified array after pushing the new note.
    setCurrentNote("");
  }
  return (
    <form onSubmit={handleNoteOnSubmit} className={styles.form}>
      <input className={styles.input}
        name="current-note"
        id="current-note"
        placeholder="enter note"
        value={currentNote }
        onChange={(event) => setCurrentNote(event.target.value)}
      />
      <button type="submit" className={styles.button}> 
        {!!currentEditNote ? 'Edit Note' : 'Add Note'} 
     </button>
    </form>
  );
}

export default AddNote;

/*

// setnotelist(notelist): This line seems to be using a state-setting function, presumably from a React component. It updates the state variable notelist with the modified array after pushing the new note.
   

2) onChange={(event) => setCurrentnote(event.target.value)}:

The onChange event handler is triggered whenever the value of the input field changes.
The function (event) => setCurrentnote(event.target.value) is called when the onChange event occurs.
event is the event object containing information about the event, and event.target.value represents the current value of the input field.
setCurrentnote(event.target.value) is a function passed as a prop to the AddNote component. It updates the currentnote state with the new value of the input field.


1) value={currentnote || ''}:

The value attribute is used to control the input field's value. In this case, it is set to the value of the currentnote state.
currentnote is a variable passed as a prop to the AddNote function component.
|| is the logical OR operator. If currentnote is falsy (e.g., undefined or null), it will default to an empty string ''.
Essentially, this line ensures that the input field displays the value of currentnote and defaults to an empty string if currentnote is falsy.


[
   { id: 1, label: 'pooja' },
   { id: 2, label: 'pooja' }
]
In the output, you have two notes with id values of 1 and 2, respectively. This indicates that two notes have been added to the notelist array. The label for both notes is 'pooja', as provided by the currentnote variable.

So, the mechanism for assigning unique id values seems to be working correctly. If you add more notes, each new note should get an id value that is one greater than the previous highest id


*/