document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement('li');
  
      // Create span for task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskSpan.classList.add('task-text');
  
      // Create tick span (hidden by default)
      const tick = document.createElement('span');
      tick.textContent = " ✅";
      tick.classList.add('tick');
      tick.style.display = 'none';
  
      // Toggle completion
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        tick.style.display = li.classList.contains('completed') ? 'inline' : 'none';
      });
  
      // Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
      });
  
      // Append elements
      li.appendChild(taskSpan);
      li.appendChild(tick);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });
  