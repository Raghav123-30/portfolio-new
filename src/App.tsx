import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="min-h-screen grid place-content-center p-8 font-sans ">
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
            className="flex flex-col gap-8 "
          >
            <p className="text-xl text-teal-400">Hello, my name is</p>
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 inline-block">
              Raghavendra Bhat
            </h1>
            <p className="leading-relaxed text-teal-200">
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
              <span className="font-semibold text-teal-500 text-xl">
                portfolio project
              </span>
              , currently under construction 🚧. More content will be added
              soon.
            </p>
            <button className="px-8 py-4 border-2 border-teal-500 bg-transparent hover:bg-teal-500 hover:text-white ease-in-out transition-transform duration-200  hover:border-slate-900 focus:outline-none rounded-md font-bold w-fit">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </div>
      <footer className="mt-auto p-8 text-teal-500 text-center  bg-slate-800/40">
        <p>Designed and built by Raghavendra Bhat</p>
      </footer>
    </div>
  );
}
