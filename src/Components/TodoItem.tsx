//Importando o tipo do componente e do item tarefa:
import { PropsItem } from "@/Types/Types";

//Exportando o componente TodoItem:
export const TodoItem = ({id, label, checked, deleteItem, newChecked}:PropsItem) => {
    return(
        <li className="p-3 bg-gray-400 rounded-md my-2" key={id}>
              <textarea className="resize-none" disabled cols={40} defaultValue={label}></textarea>
              <div className="flex gap-3 items-center justify-between">
                <button className="bg-red-400 p-1 rounded-md cursor-pointer" onClick={() => deleteItem(id)}>Deletar</button>
                <input className="h-5 w-5" type="checkbox" checked={checked} onChange={() => newChecked(id)}/>
              </div>
        </li>
    )
}