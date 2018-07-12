console.log("App.js is running!")

//JSX - JavaScript XML

var appInfo = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

var template = (
  <div>
    <h1>{appInfo.title}</h1>
    <p>{appInfo.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
    name: 'Gabby',
    age: 19,
    location: 'Seattle, WA'
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);