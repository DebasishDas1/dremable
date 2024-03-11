import { useState } from 'react';
import { nav_options, nav_sub_options } from '@/components/constants';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Home, ArrowDropDown, Menu, AutoFixHigh } from '@mui/icons-material';
import ContactForm from '@/containers/ContactForm';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { rule } from 'postcss';

interface NavOption {
    name: string;
    linkUrl: string;
    icon: JSX.Element;
}

const MobileNav: React.FC = () => {
    const [showSubOptions, setShowSubOptions] = useState<boolean>(false);
    const pathname: string[] = usePathname().split('/');

    const handleMagiciansButton = (): void => {
        setShowSubOptions((prevState: boolean) => !prevState);
    };

    const renderNavItem = (option: NavOption): JSX.Element => (
        <SheetClose asChild key={option.linkUrl}>
            <Link href={option.linkUrl} className={`flex regular-16 cursor-pointer pb-5 items-center pt-2 ${pathname.map(item => item.toLowerCase().replace(/\s+/g, '')).includes(option.name.toLowerCase().replace(/\s+/g, '')) ? 'font-black' : 'font-light'}`}>
                <button type="submit" className="outline-none flex items-center">
                    <span className='mr-2'>
                        {option.icon}
                    </span>
                    <span>{option.name}</span>
                </button>
            </Link>
        </SheetClose>
    );

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="inline-block cursor-pointer lg:hidden" />
                </SheetTrigger>
                <SheetContent className="backdrop-blur-3xl bg-white/30 text-2xl" side="top">
                    {renderNavItem({
                        name: 'Home',
                        linkUrl: '/',
                        icon: <Home />
                    })}
                    <div
                        className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center pt-2 font-bold ${(showSubOptions) ? 'font-black' : 'font-light'}`}
                        onClick={handleMagiciansButton}
                    >
                        <div className='mr-2'><AutoFixHigh /> </div>
                        Magicians
                        <ArrowDropDown />
                    </div>
                    {showSubOptions && (
                        <div>
                            {nav_sub_options.map((option) => renderNavItem(option))}
                        </div>
                    )}
                    {nav_options.filter(option => option.name !== 'Magicians').map(renderNavItem)}
                    <ContactForm />
                    {/* <SucessAlert /> */}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
