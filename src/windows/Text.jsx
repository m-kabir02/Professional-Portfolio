import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { clsx } from 'clsx';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;
    return (
        <>
            <div id="window-header">
                <WindowControls target='txtfile' />
                <h2>{name}</h2>
            </div>
            
            <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-6 bg-white">
                {image ? (
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-200">
                        <img src={image}
                            alt={name}
                            className={clsx(
                                "w-full h-full object-cover",       
                                "origin-top",       
                                "object-top"
                            )}
                        />
                    </div>
                ) : null}

                {subtitle ? <h3 className='text-lg font-semibold'>{subtitle}</h3> : null}
                
                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );

};


const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;