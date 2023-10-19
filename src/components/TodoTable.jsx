export default function TodoTable(props) {

    return (
        <table>
            <tbody>
                <tr>
                    <th>Todos</th>
                </tr>
                {props.todos.map((todo, index) => (
                <tr key={index}>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td>{todo.priority}</td>
                    <td><button onClick={() => props.onDelete(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
