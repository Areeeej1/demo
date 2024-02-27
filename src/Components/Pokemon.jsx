import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '40%',
      bottom: '-30%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color:"green",
    },
  };
 const Pokemon=()=> {
    const[num, setNum]=useState(1);
    const[movess, setMovess]=useState();
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(()=>
  {
     axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then(res=>
        {
        console.log(res);
         setMovess(res.data);
        }
      )
   }
   ,[num]
  );
  

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
    
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
   
    <div className='selectOpt'>
    <select  className='options' value={num} onChange={(event)=>{
       setNum(event.target.value);
     
    }}>
      <option value="1">1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
     <br></br>
    <button  style={{color:"red",fontSize:"25px"}} onClick={openModal}>Show</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}

        >
    <div><h1>you selected <span style={{color:"red"}}> {num}</span></h1>
    <h1>my name is <span style={{color:"red"}}> {movess?.name}</span></h1>
    <h1>i have <span style={{color:"red"}}> {movess?.moves.length} moves</span></h1>
    <img src={movess?.sprites.front_shiny}  style={{width:"25%", height:"200px"}}></img>
    </div>  
        <button onClick={closeModal} style={{color:"red",fontSize:"25px",marginLeft:"40%"}}>Close</button>

        </Modal>
        </div>
  
    );
}

export default Pokemon;