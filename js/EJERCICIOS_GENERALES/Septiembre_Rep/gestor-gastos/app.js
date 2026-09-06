const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');
const countElement = document.getElementById('count');
const averageElement = document.getElementById('average');
const emptyMessage = document.getElementById('empty-message');
const categoryFilter = document.getElementById('category-filter');

function actualizarEstadisticas() {
  const expenses = Array.from(expenseList.getElementsByTagName('li'));
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.dataset.amount), 0);
  const count = expenses.length;
  const average = count > 0 ? total / count : 0;

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    countElement.textContent = `Count: ${count}`;
    averageElement.textContent = `Average: $${average.toFixed(2)}`;
    emptyMessage.style.display = expenses.length === 0 ? 'block' : 'none';
}

function agregarGasto(event) {
  event.preventDefault();
    const amountInput = document.getElementById('amount');
    const categoryInput = document.getElementById('category');
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (isNaN(amount) || amount <= 0) {
        emptyMessage.textContent = 'Please enter a valid amount greater than 0.';
        emptyMessage.style.display = 'block';
        return;
    }

}


function filtrarGastos() {
  const selectedCategory = categoryFilter.value;
  const expenses = Array.from(expenseList.getElementsByTagName('li'));
    expenses.forEach(expense => {  
        if (selectedCategory === '' || expense.dataset.category === selectedCategory) {

            expense.style.display = 'block';
        } else {
            expense.style.display = 'none';
        }
    });
}





















