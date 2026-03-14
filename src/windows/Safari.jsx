import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'
import { ChevronLeft, ChevronRight, PanelLeft, Search, Plus, Copy, Share, ShieldHalf, MoveRight } from 'lucide-react';
import { blogPosts } from '#constants';
const Safari = () => {
    return (
        <div className="flex flex-col h-full bg-white dark:bg-[#1e1e1e] rounded-b-lg overflow-hidden">
            {/* 1. TOP NAVIGATION BAR (The "Safari" Header) */}
            <div id="window-header" className="flex items-center p-2 gap-4 border-b border-gray-200 dark:border-gray-800">
                <WindowControls target="safari" />
                
                <PanelLeft className='ml-10 icon' />
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className='icon'/>
                    <ChevronRight className='icon'/>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="search flex items-center bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 w-full max-w-md gap-2">
                        <ShieldHalf className='icon size-4' />
                        <Search className='icon size-4' />
                        <input
                            type='text'
                            placeholder='Search or enter website name'
                            className='bg-transparent outline-none text-sm flex-1'
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5 mr-2">
                    <Share className='icon'/>
                    <Plus className='icon'/>
                    <Copy className='icon'/>
                </div>
            </div>

            {/* 2. BROWSER CONTENT (The "Website" part) */}
            <div className="flex-1 overflow-y-auto p-8 text-black dark:text-white">
                <div className="blog max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">My Tech Blog</h2>
                    <div className="space-y-12">
                        {blogPosts.map(({ id, title, date, link }) => (
                            <div key={id} className='blog-posts border-b border-gray-100 dark:border-gray-800 pb-8'>
                                <div className="content">
                                    <p className="text-gray-500 text-sm mb-2">{date}</p> 
                                    <h3 className="text-xl font-semibold mb-4">{title}</h3>
                                    <a 
                                        href={link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 text-blue-500 hover:underline"
                                    >
                                        Check out the full post <MoveRight className='size-4' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SafariWindow = WindowWrapper(Safari, 'safari');


export default SafariWindow;