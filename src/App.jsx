import User from './assets/yawarali.jpg';
import Exp1 from './assets/codeplanet.jpg';
import Exp2 from './assets/acutech.jpg';
import { ConfettiButton } from "@/components/magicui/confetti";
import BlurFade from "@/components/magicui/blur-fade";
 
function App() {
  return (
    <> 
    <BlurFade delay={0.5} inView>
    <section className="mt-12 max-w-2xl mx-auto">
    
      <div className="flex gap-14 items-center">
        <div>
          <h1 className='text-4xl font-black'>Hey, I am Yawar👋</h1>
          <p className='font-light text-lg mt-2'>Fullstack Developer. I love building things and helping people. Very active on LinkedIn.</p>
        </div>
        <img src={User} className='h-40 w-40 object-cover rounded-full' alt="" />
      </div>
    </section>
    <section className="mt-12 max-w-2xl mx-auto">
          <h1 className='text-2xl font-black'>About Me</h1>
          
          <p className='font-light text-neutral-600'>During the pandemic, I discovered my passion for software development, transitioning from a Fine Arts graduate to a proficient full-stack developer, <span className="underline text-black">After graduating in 2021, I honed my skills in backend and frontend development,</span>Now, I'm eager to share my knowledge through my YouTube channel, offering tutorials to help aspiring developers learn and succeed in tech. </p>
    </section>


    <section className="mt-12 max-w-2xl mx-auto">
          <h1 className='text-2xl font-black'>Work Experiece</h1>
          <p className='font-light text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam?</p>
          
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <img src={Exp1} className='h-12 rounded-full' alt="" />
                  <div className="">
                    <h2 className='text-sm'>Code Planet Technologies</h2>
                    <p className='text-xs'>FullStack Intern</p>
                  </div>
              </div>
              <p className='text-neutral-500 font-light text-sm'>May 2023 - June 2024</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <img src={Exp2} className='h-12 rounded-full' alt="" />
                  <div className="">
                    <h2 className='text-sm'>Acutech Global Services</h2>
                    <p className='text-xs'>Technical Support Engineer</p>
                  </div>
              </div>
              <p className='text-neutral-500 font-light text-sm'>Nov 2022 - April 2023</p>
            </div>
          </div>
    </section>
  

    <section className="mt-12 mb-36 max-w-2xl mx-auto">
    <h1 className='text-2xl font-black'>Get in Touch</h1>
          <p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.</p>
          <div className="relative">
      <ConfettiButton className="mt-4 px-5 font-light rounded-full">Text me on Twitter</ConfettiButton>
    </div>
    </section>
    </BlurFade>
    </>
  )
}

export default App
