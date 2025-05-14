📝 To-Do List App (React + Tailwind CSS)
A simple, responsive To-Do list app built using React and Tailwind CSS, with task persistence using localStorage.
Users can add, delete, and toggle tasks as complete/incomplete, and all tasks remain saved even after refreshing the page.

🚀 Features
✅ Add new tasks.

✅ Mark tasks as complete/incomplete.

✅ Delete tasks.

✅ Persist tasks in localStorage.

✅ Clean and minimal UI with Tailwind CSS.

✅ Reusable components and clean state management.

📸 Screenshots
Home Screen	Task Completed

(Add your screenshots in a screenshots folder inside your repo)

💻 Tech Stack
React (useState, useEffect, useRef)

Tailwind CSS

localStorage API

Clean component structure

📂 Folder Structure
cpp
Copy
Edit
src/
├── assets/
│   ├── todo_icon.png
│   ├── tick.png
│   └── not_tick.png
│   └── delete.png
├── components/
│   ├── Todo.js
│   └── TodoList.js
└── App.js
⚙ Setup & Run Locally
bash
Copy
Edit
git clone https://github.com/yourusername/todo-list-react.git
cd todo-list-react
npm install
npm run dev
🛠 How It Works
The Todo component handles the app logic and UI.

Tasks are stored in state (toDoTask) and updated using setToDoTask.

Changes are persisted automatically to localStorage via useEffect.

TodoList component renders individual tasks, and receives props for text, toggle, and delete actions.

Users can:

Click the checkbox icon or text to toggle completion.

Click the trash icon to delete.

Enter tasks using the input field and 'Add +' button.



