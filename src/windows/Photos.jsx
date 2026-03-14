import React from 'react'
import { Mail, Search } from "lucide-react"
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { gallery, photosLinks } from '#constants'
import useWindowStore from '#store/window'

const Photos = () => {
    const { openWindows } = useWindowStore();
    
    return (
        <>
            <div id="window-header">
                    <WindowControls target='photos' />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className='icon'/>
                    <Search className='icon'/>
                    </div>
            </div>
            
            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 overflow-y-auto h-125 p-4 bg-white"> {/* Added height and scroll for the gallery container */}
                    <ul className="grid grid-cols-3 gap-2"> {/* Change 1: Added Grid layout */}
                        {gallery.map(({ id, img }) => (
                            <li key={id}
                                className="aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity" // Change 2: Forced square shape
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery Image",
                                        icon: "./images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img, // Fixed: passed 'img' variable instead of the string "img"
                                    })
                                }
                                >
                                <img 
                                    src={img} 
                                    alt={ `Gallery image ${id}`} 
                                    className="w-full h-full object-cover" // Change 3: Crucial for making diff sizes fit
                                />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );

};

const PhotosWindow = WindowWrapper(Photos, 'photos');

export default PhotosWindow;