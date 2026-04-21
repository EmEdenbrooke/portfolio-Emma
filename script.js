/*JavaScript
Students must implement:
● DOM selection
● event listeners
● functions
● conditional logic
● interactive UI behavior*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
