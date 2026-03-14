import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react' // Added nav icons
import { locations } from '#constants'
import clsx from 'clsx'
import useWindowStore from '#store/window'

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => { 
        if (item.fileType === 'pdf') return openWindow("resume");
        if (item.kind === 'folder') return setActiveLocation(item);
        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "blank");
        openWindow(`${item.fileType}${item.kind}`, item); //runs if not any of the above filetypes
        //we need to create a text file viewer and img file viewer using junie eap
    };
    const renderList = (items) => items.map((item) => (
        <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
                item.id === activeLocation.id ? "active" : "not-active",
            )}
        >
            <img src={item.icon} className='w-4' alt={ item.name}/>
            <p className="text-sm font-medium truncate">
                {item.name}
            </p>
        </li>
    ));
    return (
        <>
            <div id="window-header">
                <WindowControls target='finder' />
                <Search className='icon' />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>
                 
              
                    <div>
                        <h3>My Projects</h3>
                        <ul>{renderList(locations.work.children)}</ul>
                    </div>

                </div>
                <ul className="content flex flex-wrap content-start gap-8 p-8">
                    {activeLocation?.children.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
            </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;