import './App.css';
import inquirer from 'inquirer';

const questions = [{
  type: 'input',
  name: 'employeeID',
  message: 'Please enter employee ID: '
}, /* {
  type: 'list',
  name: 'license',
  message: 'What liscense should your project have?',
  choices: ['APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
} */];

inquirer.prompt(questions).then(answers => {

});

function App() {
  return (
    <div>Hello</div>
  );
}

export default App;
