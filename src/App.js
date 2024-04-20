import { useState } from 'react';
import logo from './logo.svg';
import styles from './style.module.css'; // Change 'classes' to 'styles'
import AddNote from './Components/AddNote';
import NodeList from './Components/NodeList';
function App() {
  const [currentNote, setCurrentNote] = useState('');
  const [noteList, setNoteList] = useState([]);
  const [currentEditNote,setcurrentEditNote]=useState(null);
  return (
    <div className={styles.App}> {/* Change 'classes' to 'styles' */}
      <h1>Hello</h1>
      <AddNote currentNote={currentNote} setCurrentNote={setCurrentNote} noteList={noteList} setNoteList={setNoteList} /> {/* we are passing as props.  Rendering the AddNote component and passing two props to it: */}
      <NodeList
  noteList={noteList}
  setcurrentEditNote={setcurrentEditNote}
  setCurrentNote={setCurrentNote}
  currentEditNote={currentEditNote}
  setNoteList={setNoteList}
/>
     </div>
  );
}
export default App;
/*
<div className="classes.App">  (this line will refer to the style.module.css) */
