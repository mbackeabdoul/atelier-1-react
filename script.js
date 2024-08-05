class Todos extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        inputTodo:"", 
        todos: []
      } 
      
    }

    supprimerTache(index) {
                const newTodos = this.state.todos.filter((_, i) => i !== index);
                this.setState({ todos: newTodos });
            }

            // modif
        
      render(){   

          return (
            <div className="container mt-4">
              <h1>To-Do List</h1>
                {/* <p>{this.state.inputTodo}</p> */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={this.state.inputTodo}
                  onChange={(e) =>{
                    this.setState({inputTodo: e.target.value})
                  }}
                  className="form-control"
                  placeholder="Ajoutez une tâche"
                  />
                <button className="btn btn-primary"  onClick={()=>{
                    this.setState({todos:[...this.state.todos, this.state.inputTodo],inputTodo:""})
                }}>ajouter</button>
              </div>
              <ul className="list-group">
                {
                this.state.todos.map((todo, index) =>{
                    return (
                        <li key={index}>{todo}
                        <div>
                            <button className="btn-danger btn-sm" onClick={() => this.supprimerTache(index)}>X</button>
                            <button className=" btn-primary btn-sm ms-1" onClick={() => this.modifierTache(index)}>Modifier</button>

                            </div>
                            </li>
                    )
                })
                 
                }
              </ul>
            </div>
          );
        }
  }
  ReactDOM.render(<Todos/>, document.getElementById("root"))

//   this.state.todos.map((todo, index) => {
    //                             return (
    //                                 <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
    //                                     {todo}
    //                                     <div>
    //                                         <button className="btn btn-warning btn-sm me-2" onClick={() => this.modifierTache(index)}>Modifier</button>
    //                                         <button className="btn btn-danger btn-sm" onClick={() => this.supprimerTache(index)}>X</button>
    //                                     </div>
    //                                 </li>

// class Todos extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputTodo: "",
//             todos: []
//         }
//     }

//     supprimerTache(index) {
//         const newTodos = this.state.todos.filter((_, i) => i !== index);
//         this.setState({ todos: newTodos });
//     }

//     modifierTache(index) {
//         const nouveauTodo = prompt("Modifier la tâche:");
//         const newTodos = this.state.todos.slice(); // Faire une copie du tableau
//         newTodos[index] = nouveauTodo; // Modifier l'élément spécifié
//         this.setState({ todos: newTodos });
//     }

//     render() {
//         return (
//             <div className="container mt-3">
//                 <h1>Todo List</h1>
//                 <div className="input-group mb-3">
//                     <input
//                         type="text"
//                         value={this.state.inputTodo}
//                         onChange={(e) => {
//                             this.setState({ inputTodo: e.target.value})
//                         }}
//                         className="form-control"
//                         placeholder="Ajouter une tâche"
//                     />
//                     <button className="btn btn-primary" onClick={() => {
//                         this.setState({ todos: [...this.state.todos, this.state.inputTodo], inputTodo: "" })
//                     }}>Ajouter</button>
//                 </div>
//                 <ul className="list-group">
//                     {
//                         this.state.todos.map((todo, index) => {
//                             return (
//                                 <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                                     {todo}
//                                     <div>
//                                         <button className="btn btn-warning btn-sm me-2" onClick={() => this.modifierTache(index)}>Modifier</button>
//                                         <button className="btn btn-danger btn-sm" onClick={() => this.supprimerTache(index)}>X</button>
//                                     </div>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Todos />, document.getElementById("root"));