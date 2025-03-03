export const theme = {
  root: {
    base: 'fixed z-30 bg-transparent px-10 py-2.5 dark:border-gray-700 dark:bg-transparent sm:px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto top-0 left-0 right-0',
    rounded: {
      on: '',
      off: ''
    },
    bordered: {
      on: 'border',
      off: ''
    },
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
      fluid: {
        on: '',
        off: 'container'
      }
    }
  },
  brand: {
    base: 'flex items-center'
  },
  collapse: {
    base: 'w-full md:block md:w-auto transition-all duration-300 ease-in-out',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    hidden: {
      on: 'hidden',
      off: ''
    }
  },
  link: {
    base: "hover:bg-transparent block py-2 pl-3 pr-4 md:p-0 cursor-pointer text-gray-800 dark:hover:text-yellow-500 hover:text-cyan-700 dark:hover:text-yellow-500 transition-all duration-300 border-b-2 border-cyan-500",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: 'inline-flex items-center rounded p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden',
    icon: 'h-6 w-6 shrink-0'
  }
};
