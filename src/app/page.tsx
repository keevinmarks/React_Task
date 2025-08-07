"use client"

import { useState } from "react";

//Importando componentes das tarefas:
import { TodoItem } from "@/Components/TodoItem";

//Importando as propriedades do componente TodoItem:
import { PropsItem } from "@/Types/Types";

let id = 0;
const Page = () => {
  //Criando state para para receber nova tarefa:
  const  [newTask, setNewTask] = useState("");

  //Criando o state da lista de tarefas:
  const [list, setList] = useState<PropsItem[]>([]);
  
  //Função para atualizar a lista de tarefa:
  const addNewTask = () => {

    //Verificando se a nova tarefa é vazia:
    if(newTask.trim() === ""){return}

    //Atualizando o state da lista de tarefa:
    setList([...list, {id: id, label: newTask, checked: false, deleteItem, newChecked}]);

    //Limpando o campo de input da nova tarefa:
    setNewTask("");

    //Atualizando o id:
    id+=1;
  }

  //Função para deletar uma tarefa pelo id:
  const deleteItem = (id:number) => {

    //Atualizando a lista sem a tarefa com o id deletado:
    setList(list.filter(item => item.id !== id ));
    console.log(list);
  
  }

  //Função para atualizar o checked da tarefa na lista pelo id:
  const newChecked = (id:number) => {
    //Criando um cópia do array:
    const newArray = [...list];

    //Atualizando o checked da terefa com o id específico:
    for(const item of newArray){
      if(item.id === id){
        item.checked = !item.checked
        break;
      }
    }

    //Atualizando o state da lista de tarefa
    setList(newArray);
  }

  
  
  return(
    //Div princiapal de retorno
    <div>
      <div className="w-full flex items-center justify-center overflow-x-hidden">
        <div className="">
          <h1 className="text-center text-4xl">Lista de tarefas</h1>
          <div className="flex px-3 py-4 bg-gray-600 rounded-t-md gap-4">
            <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" className="bg-gray-400 rounded-sm text-black placeholder:text-gray-700 px-1" placeholder="Nova tarefa" />
            <button onClick={addNewTask} className="p-2 bg-gray-800 text-white rounded-md cursor-pointer">Adicionar</button>
          </div>
          
          <ul className="min-h-5 bg-gray-500 rounded-b-md text-white p-2">
            {list.map(item => <TodoItem key={item.id} id={item.id} label={item.label} checked={item.checked} deleteItem={deleteItem} newChecked={newChecked}/>)}  
          </ul>
        </div>
      </div>
    </div>
  )
}

//Exportando a função principal por padrão:
export default Page;