const expenses = document.querySelector('.expenses');

document.addEventListener('DOMContentLoaded', function () {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  // add expense form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});

// render expense data
const renderExpense = (data, id) => {
  //this takes number object and converts to a string date to display.
  // But for ordering number(data.date) will be required
  const x = data.date;
  const date1 = new Date(x).toLocaleDateString('en-GB');



  const html = `
    <div class="card-panel expense white row" data-id="${id}">
      <img src="/img/dish.png" alt="expense thumb">
      <div class="expense-details">
        <div class="expense-sum">sum =$${data.sum}</div>
        <div class="expense-other">where =${data.shop}</div>
        <div class="expense-other">category =${data.category}</div>
        <div class="expense-other">billable =${data.billable}</div>
        <div class="expense-other">comment =${data.comment}</div>
        <div class="expense-other">date =${date1}</div>
      </div>
      <div class="expense-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  expenses.innerHTML += html;

};

// remove expense
const removeExpense = (id) => {
  const expense = document.querySelector(`.expense[data-id=${id}]`);
  expense.remove();
};