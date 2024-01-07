import { Info, AutoFixHigh, Feed, AddAPhoto, FormatListBulleted, ColorLens } from '@mui/icons-material';

export const nav_options = [
    {
        name: 'Magicians',
        linkUrl: '/magicians/planners',
        icon: <AutoFixHigh />
    },
    {
        name: 'Blog',
        linkUrl: '/blog',
        icon: <Feed />
    },
    {
        name: 'Community',
        linkUrl: '/community',
        icon: <Feed />
    },
    {
        name: 'About',
        linkUrl: '/about',
        icon: <Info />
    },
]

export const nav_sub_options = [
    {
        name: 'Planners',
        linkUrl: '/magicians/planners',
        icon: <FormatListBulleted />
    },
    {
        name: 'Photographers',
        linkUrl: '/magicians/photographers',
        icon: <AddAPhoto />
    },
    {
        name: 'Artists',
        linkUrl: '/magicians/artists',
        icon: <ColorLens />
    },
]

export const benifits = [
    {
        title: 'Browse by category',
        describe: `Explore a curated directory of wedding planners,
        photographers, caterers, DJs, musicians, stationers, decorators, venues, and
        more.`,
    },
    {
        title: 'Filter with ease',
        describe: `Refine your search based on location, budget, style, and
        availability. Find exactly what you're looking for without any fuss.`,
    },
    {
        title: 'Real stories, real trust',
        describe: `Read honest reviews from real couples who used these
        vendors, making informed decisions with confidence.`,
    },
    {
        title: 'Get inspired, get creative',
        describe: `Discover stunning portfolios and unique offerings,
        sparking amazing ideas for your own celebration.`,
    },
    {
        title: 'Connect and relax',
        describe: `Get in touch with vendors and receive personalized quotes
        directly, skipping the hassle.`,
    },
    {
        title: 'Plan like a pro',
        describe: `Manage your vendor communication, contracts, and schedules
        all in one convenient platform.`,
    },
]