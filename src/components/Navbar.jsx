import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/juaodantas/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    className="text-stone-300 hover:text-stone-400"
                ><FaLinkedinIn/></a>
                     <a href="https://github.com/juaodantas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub" 
                    className="text-stone-300 hover:text-stone-400"
                ><FaGithub/></a>
                     <a href="https://www.instagram.com/juao.dantas/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram" 
                    className="text-stone-300 hover:text-stone-400"
                ><FaInstagram/></a>
            </div>
        </nav>
    )
}

export default Navbar;