function CoffeeMethodSelector({ methods, setSelectMethod }) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            className="py-6 cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setSelectMethod(method.id)}
          >
            {method.name}
          </button>
        ))}
      </div>
    );
}

export default CoffeeMethodSelector;
