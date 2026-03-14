import React, { useRef } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check, Flag } from "lucide-react";
import { WindowControls } from '#components/index';
import { techStack } from '#constants/index';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Terminal = () => {
    const terminalRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".terminal-line", 
            { opacity: 0, x: -10 }, 
            { 
               opacity: 1, 
                x: 0, 
                stagger: 0.2, 
                duration: 0.4, 
                ease: "power1.out",
                delay: 0.5 
            }
        );
    }, { scope: terminalRef });

    return (
      <div ref={terminalRef}>

            <div id="window-header" className="relative flex items-center justify-center py-1">
            <div className="absolute left-3 z-10">
                <WindowControls target="terminal" />
            </div>
            <h2 className="terminal-line font-semboldibold">Tech Stack</h2>
        </div>
            
            <div className="techstack font-mono bg-black/90 text-green-400 p-4 rounded-b-lg">
                <p className='terminal-line'>
                    <span className="font-bold">@Mosammad ~ % </span>
                    show tech stack
                </p>
                <div className="label flex terminal-line">
                    <p className="w-32 font-bold">Category</p>
                    <p className="w-32 font-bold">Technologies</p>
                </div>

                <ul className="content space-y-2">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex items-center terminal-line'>
                        <Check className="check" size={20} />
                        <h3 className="font-extrabold mr-2 text-green-400">{category}</h3>
                        <ul>
                        {items.map(( item, i ) => (
                            <li key={i}>
                                {item}
                                {i < items.length - 1 ? "." : ""}
                            </li>
                         ))}
                        </ul>
                    </li>
                    ))}
                </ul>

                <div className="footnote font-bold text-green-400 terminal-line">
                    <p>
                      <Check  size={20}/> {techStack.length} of {techStack.length} stacks loaded successfully (100%)

                    </p>
                    <p className="text-black">
                      <Flag size={15} color="#4ade80" fill="#4ade80" /> 

                    </p>
                </div>
            </div>
        </div>        
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;