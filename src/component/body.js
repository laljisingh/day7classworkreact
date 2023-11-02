function Body({ text, author }) {
    const stl = {
        marginTop:"80px",
        width:"80%"
    };
    return (
        <>
            <div style={stl} class="w-100 p-9 pt-5 mt-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-10 dark:bg-gray-800 dark:border-gray-700 hover:bg-cyan-200 p-4 transition duration-300">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{text}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{author}</p>
            </div>

        </>
    );
}
export default Body;