
# 📝 React To-Do List
A simple React To-Do List application that allows users to add, delete, and clear all tasks. Tasks are stored in LocalStorage, so they persist even after reloading the page. The UI features a stylish gradient background and responsive design.

---

## 🚀 Features

- Add tasks dynamically.

- Delete individual tasks.

- Delete all tasks at once.

- Persistent data using LocalStorage.

- Scrollable list for long tasks.

- Responsive design for desktop and mobile.

- Smooth UI animations and hover effects.

- Gradient animated background for a modern look.

---

## 🎨 Technologies Used

- **React.js**  
- **JavaScript (ES6)**  
- **HTML5 & CSS3**  
- **LocalStorage API**  

---

## 📸 Screenshot
### Screenshot 1
<img src="https://github.com/user-attachments/assets/82f60243-40f2-49e1-9672-438a248dcdcd"   alt="Screenshot 1" width="600" />

### Screenshot 2
<img src="https://github.com/user-attachments/assets/c5368ae0-c1cc-45ab-89f1-3d06db708a87" alt="Screenshot 2" width="600" />

---

## 🛠 Installation & Run


- ### Clone the repository
  git clone https://github.com/SaraSalah1/To_Do_List.git

- ###  Navigate to the project folder
      cd To_Do_List

- ###  Install dependencies
      npm install

- ###  Start the development server
      npm start

- ###  Open your browser at:
      http://localhost:3000

  ---

## 📦 Usage

- Type a task in the input field.

- Click Add to append it to the list.

- Click Delete next to a task to remove it.

- Click Delete All to clear the entire list.

- Scroll the list if tasks exceed container height.

---

## 💻 Code Example

App.js

```
const [item, setItem] = useState('');
const [list, setList] = useState(() => {
  const saved = localStorage.getItem('todo-list');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('todo-list', JSON.stringify(list));
}, [list]);

const handleAdd = () => {
  if (item.trim() !== '') {
    setList([...list, item]);
    setItem('');
  }
};

const handleDelete = (index) => {
  setList(list.filter((_, i) => i !== index));
};

```
---

## 🤝 Contributing

Contributions are always welcome! Follow these steps:


- #### Fork the repository
  
- #### Create your feature branch
      git checkout -b feature/YourFeature

- #### Commit your changes
      git commit -m "Add some feature"

- #### Push to the branch
      git push origin feature/YourFeature

- #### Open a Pull Request


---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 [View the project on GitHub](https://github.com/SaraSalah1/To_Do_List)

---

## 📝 License

This project is licensed under the MIT License
