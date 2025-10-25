import "../../index.css";


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-right">
                    Hi, I'm Christopher Holland
                </h1>
                <p className="text-gray-400 mb-8 text-3xl">
                    I'm a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.1
                </p>
            </div>

        </section>
    );
};