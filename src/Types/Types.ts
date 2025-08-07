//Exportando o tipo do componente e do item tarefa:
export type PropsItem = {
    id:number;
    label:string;
    checked:boolean;
    deleteItem: (id:number) => void;
    newChecked: (id:number) => void;
}