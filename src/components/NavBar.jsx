import '../App.css';

function NavBar(props) {
    return (
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded z-50">
    <div class="flex flex-wrap justify-end items-end mx-auto">
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden absolute top-10 left-10 right-10 w-auto xl:block xl:w-auto z-50" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 mb-4 rounded-lg bg-white xl:bg-transparent xl:flex-row justify-end xl:space-x-8 xl:mt-0 font-medium xl:border-0">
        <li>
          <a href="#work" class="py-2 pr-4 pl-3 text-gray-700 rounded xl:bg-transparent xl:p-0">Work</a>
        </li>
        <li>
          <a href="#education" class="py-2 pr-4 pl-3 text-gray-700 rounded xl:hover:bg-transparent xl:border-0 xl:p-0">Education</a>
        </li>
        <li>
          <a href="#projects" class="py-2 pr-4 pl-3 text-gray-700 rounded xl:hover:bg-transparent xl:border-0 xl:p-0">Projects</a>
        </li>
        <li>
          <a href="#contact" class="py-2 pr-4 pl-3 text-gray-700 rounded xl:hover:bg-transparent xl:border-0 xl:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default NavBar