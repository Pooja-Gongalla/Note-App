import styles from '../style.module.css';
function NodeList({ noteList, setcurrentEditNote, setCurrentNote,setNoteList}) {
    function handleEdit(getCurrentItem) {
        console.log(getCurrentItem);
        setcurrentEditNote(getCurrentItem);
        setCurrentNote(getCurrentItem.label); //the entered item need to populate in the input text box
      }
      function HandleDelete(getCurrentId)
      {
         console.log(getCurrentId);
         setNoteList(noteList.filter(item=> item.id!==getCurrentId));

      }
    return (
      <ul className={styles.noteList}>
        {noteList && noteList.length > 0 ? (
          noteList.map((noteItem) => (
            <li key={noteItem.id}>

{/* key={noteItem.id}:

The key attribute is a special attribute in React used to help identify which items have changed, been added, or been removed from a list. It aids in efficient updates to the UI by providing a unique identifier for each item.
In this case, the key is set to the id of each noteItem. Assuming that each noteItem has a unique id (as seen in your previous code snippet where notes have unique identifiers), using noteItem.id as the key is a good practice. */}
       <label className={styles.NodeList}>{noteItem.label}</label>
              <div>
                <button onClick={()=>handleEdit(noteItem)}>Edit</button>
                <button onClick={()=>HandleDelete(noteItem.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <div className={styles.noNotes}>No Notes found</div>
        )}
      </ul>
    );
  }
  
  export default NodeList;


  /*
   if i refresh the page no notes added will show
  */