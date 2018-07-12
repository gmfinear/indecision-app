console.log("App.js is running!")

//JSX - JavaScript XML

const appInfo = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    {appInfo.options.length > 0 ? 'Here are your options' : 'No options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
    name: 'Gabby',
    age: 19,
    location: 'Seattle, WA'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

 const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);