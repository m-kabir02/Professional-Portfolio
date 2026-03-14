import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import clsx from 'clsx'

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div className="flex flex-col h-full bg-white">
            <div id="window-header">
                <WindowControls target='imgfile' />
                <h2>{name}</h2>
            </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center p-8">
                {imageUrl ? (
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-200">
                        <img
                            src={imageUrl}
                            alt={name}
                            className={clsx(
                                "w-full h-full object-cover",
                                "scale-125",        
                                "origin-top",       
                                "object-top"
                            )}
                        />
                    </div>
                ): null}
            </div>
        </>
    );

};


const ImageWindow = WindowWrapper(ImageWindowContent, 'imgfile');

export default ImageWindow;