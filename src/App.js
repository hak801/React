import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 할 일 추가 함수
  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  // 🌟 추가된 부분: 엔터 키 감지 함수
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
      <div className="todo-container">
        <h2>My Groceries</h2>

        <div className="input-group">
          <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} /* 추가: 키보드 이벤트 연결 */
              placeholder="Add a new item..."
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
              <li key={index}>
                {todo}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;