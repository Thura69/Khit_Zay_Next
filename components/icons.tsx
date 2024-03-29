import {
    Phone,
    Menu,
    LucideIcon,
    LucideProps,
    UserRound,
    Search,
    ShoppingBag,
    ArrowRight,
    ArrowLeft,
    FacebookIcon,
    InstagramIcon,
    Mail,
    ChevronUp,
    XCircle,
    Plus,
    Minus,
    Loader2,
    ChevronRight,
    ChevronLeft,
    Expand,
    Forward,
    RefreshCcw,
    X,
    Eye,
    ListFilter,
    ChevronRightCircle,
    ChevronDown} from 'lucide-react'


    interface LucideIconProps {
    [key: string]: LucideProps | undefined;
}

interface IconsType {
    phone: (props: LucideProps) => JSX.Element;
    menu: LucideIcon;
    user: LucideIcon;
    search: LucideIcon;
    bag: LucideIcon;
    left: LucideIcon;
    right: LucideIcon;
    faceBook: LucideIcon;
    instagram: LucideIcon;
    down: LucideIcon;
    up: LucideIcon;
    bannerRight: LucideIcon;
    bannerLetf: LucideIcon;
    mail: LucideIcon;
    close: LucideIcon;
    plus: LucideIcon;
    minus: LucideIcon;
    expand: LucideIcon;
    loading: LucideIcon;
    forward: LucideIcon;
    closeX: LucideIcon;
    arrowRight: LucideIcon;
    update: LucideIcon;
    eye: LucideIcon,
    filter:LucideIcon
}


export const Icons:IconsType = {
    phone: (props: LucideProps) => (
        <svg {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    menu: Menu,
    user: UserRound,
    search: Search,
    bag: ShoppingBag,
    left: ArrowLeft,
    right: ArrowRight,
    faceBook: FacebookIcon,
    instagram: InstagramIcon,
    down: ChevronDown,
    up: ChevronUp,
    bannerRight: ChevronRight,
    bannerLetf:ChevronLeft,
    mail: Mail,
    close: XCircle,
    plus: Plus,
    minus: Minus,
    expand:Expand,
    loading: Loader2,
    forward: Forward,
    closeX: X,
    arrowRight: ChevronRightCircle,
    update: RefreshCcw,
    eye: Eye,
    filter:ListFilter
};
