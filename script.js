class Todos extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        inputTodo:"", 
        todos: []
      } 
      
    }

    // supp

    supprimerTodo(index) {
                const newTodos = this.state.todos.filter((_, i) => i !== index);
                this.setState({ todos: newTodos });
            }

            // modifier
            
    modifierTodo(index) {
        const nouveauTodo = prompt("Modifier");
        const newTodos = this.state.todos.slice();
        newTodos[index] = nouveauTodo; 
        this.setState({ todos: newTodos });
    }
        
      render(){   

          return (
            <div className="container mt-4">
              <h1>To-Do List</h1>
                <p>{this.state.inputTodo}</p>
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
                            <button className="btn-danger btn-sm" onClick={() => this.supprimerTodo(index)}>X</button>
                            <button className=" btn-primary btn-sm ms-1" onClick={() => this.modifierTodo(index)}>Modifier</button>

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
