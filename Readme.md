# UseEffect

Composant *input text* déporté dans le fichier *"./components/forms/Input.jsx"*

```javascript
export function Input({ placeholder, value, onChange }) {
    return <div>
        <input type="text" className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)} />
    </div>
}
```

Capture de l'évènement sur le champ *title* via le *useEffect* afin de l'afficher dans le titre de la page html.


```javascript
import { Input } from "./components/forms/Input.jsx"

function App() {
  return (
    <div className="container my-3">
      <EditTitle />
    </div>
  )
}

const EditTitle = () => {

  const [title, setTitle] = useState('')

  // Evènement global a exécuter lors du chargement de la page
  useEffect(() => {
    console.log("Init uniquement lors du chargement de la page")
  }, [])

  // N'est appelé que quand le champs title change (ex. si présence d'un second composant "Input").
  useEffect(() => {
    document.title = title // Affichage du champs title dans le titre de la page html
  }, [title])

  return <div className="vstack gap-2">
    <Input value={title}
      onChange={setTitle}
      placeholder="Modifier le titre" />
  </div>
}
```