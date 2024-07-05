import { useEffect, useState } from 'react'
import { Checkbox } from "./components/forms/Checkbox.jsx"
import { Input } from "./components/forms/Input.jsx"

function App() {

  const [showControl, setShowControl] = useState(true)


  return (
    <div className="container my-3 vstack gap-2">
      <Checkbox id="stocked"
        checked={showControl}
        onChange={setShowControl} // onChange={() => null} Lors de la construction
        label="Afficher les controles" />
      {showControl && <EditTitle />}


      <div style={{ height: '100px', width: '150px', overflowY: 'scroll', backgroundColor: 'lightblue' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis distinctio adipisci odit, laborum similique, non nemo atque consectetur id omnis quas praesentium maiores mollitia earum veniam reiciendis modi. Delectus.
      </div>

    </div>
  )
}

const EditTitle = () => {

  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')


  useEffect(() => {
    console.log("Init uniquement lors du chargement de la page")
  }, [])

  useEffect(() => {
    document.title = title
  }, [title])

  return <div className="vstack gap-2">

    <Input value={title}
      onChange={setTitle}
      placeholder="Modifier le titre" />

    <Input value={firstName}
      onChange={setFirstName}
      placeholder="Prénom" />

  </div>
}

export default App
