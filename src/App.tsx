import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-4">
        <div className="min-h-screen grid place-content-center p-8 font-sans">
          <motion.div
            initial={{
              opacity: 0.5,
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-gray-600">Hi, I'm</p>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 mb-8">
              Raghavendra Bhat
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              I am an adaptable software engineer with experience in web and
              mobile development, as well as cloud solutions. With over 2 years
              of experience, I've developed and shipped cross-platform mobile
              apps, native mobile applications, and full-stack web applications
              for my clients. Additionally, I have hands-on experience in
              designing and deploying scalable cloud-based solutions, migrating
              on-premise infrastructure to the cloud, and ensuring high
              performance, reliability, and maintainability.
              <br />
              <br />
              This is my{" "}
              <span className="font-semibold text-teal-600 text-lg">
                portfolio project
              </span>
              , currently under construction 🚧. More content will be added
              soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8  py-4 border-2 bg-transparent border-gray-800 hover:bg-teal-600 hover:text-white ease-in-out transition-transform duration-200 hover:border-teal-600 focus:outline-none rounded-md font-semibold shadow-sm hover:shadow-lg"
            >
              Coming Soon
            </motion.button>
          </motion.div>
        </div>
      </div>
      <footer className="mt-auto p-8 text-gray-900 text-center ">
        <p className="font-medium">Designed and built by Raghavendra Bhat</p>
      </footer>
    </div>
  );
}
