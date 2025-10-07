import Container from '../../Container/Container'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between text-accent">
      
      {/* === Left Section (Follow Us) === */}
      <div className="bg-secondary w-[30%] p-3 flex justify-center">
        <Container>
          <div className="flex items-center justify-center gap-3 text-lg">
            <span>Follow Us</span>
            <FaSquareFacebook className="text-accent hover:scale-110 duration-300" />
            <FaLinkedin className="text-accent hover:scale-110 duration-300" />
            <FaWhatsappSquare className="text-accent hover:scale-110 duration-300" />
            <FaYoutube className="text-accent hover:scale-110 duration-300" />
          </div>
        </Container>
      </div>

      {/* === Right Section (Contact Info) === */}
      <div className="bg-neutral w-[70%] p-3 flex justify-end">
        <Container>
          <div className="flex items-center justify-end text-lg">
            <div>25/B Milford Road, New York</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 mx-4 opacity-20"></div>
            <div>[email protected]</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 mx-4 opacity-20"></div>
            <div>+2 123 654 7898</div>
          </div>
        </Container>
      </div>
    </div>
  )
}
