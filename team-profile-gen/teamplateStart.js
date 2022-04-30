const cardMakeManager = (employee) => {
  return `<div class="card col-3">
  <div class="container">
  <h2> Manager </h2>
    <h4><b>${employee.name}</b></h4> 
    <p>Employee Id: ${employee.id}<br/>
    Email: <a href="mailto:${employee.email}">${employee.email}</a><br/>
    Phone: ${employee.officeNum}
    </p>
  </div>
</div>`;
};
const cardMakeEngineer = (employee) => {
  return `<div class="card col-3 m-2">
  <div class="container">
  <h2> Engineer </h2>
    <h4><b>${employee.name}</b></h4> 
    <p>Employee Id: ${employee.id}<br/>
    Email: <a href="mailto:${employee.email}">${employee.email}</a><br/>
    Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>
    </p>
  </div>
</div>`;
};
const cardMakeIntern = (employee) => {
  return `<div class="card col-3">
  <div class="container">
  <h2> Intern </h2>
    <h4><b>${employee.name}</b></h4> 
    <p>Employee Id: ${employee.id}<br/>
    Email: <a href="mailto:${employee.email}">${employee.email}</a><br/>
    School: ${employee.getSchool()}
    </p>
  </div>
</div>`;
};

const templateStart = (data) => {
  return data.reduce((acc, employee) => {
    const role = employee.getRole();
    switch (role) {
      case "Manager":
        return (acc += cardMakeManager(employee));
      case "Engineer":
        return (acc += cardMakeEngineer(employee));
      case "Intern":
        return (acc += cardMakeIntern(employee));
      default:
        return acc;
    }
  }, "");
};

module.exports = templateStart;
