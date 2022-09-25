import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiBehanceFill,
} from "react-icons/ri";
export const navigation = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Vr Static 360",
    url: "/static-vr-360",
  },
  {
    id: 3,
    label: "Vr RealTime",
    url: "/vr-realtime",
  },
  {
    id: 5,
    label: "360",
    url: "/360",
  },
  {
    id: 6,
    label: "Contact",
    url: "/contact",
  },
];
export const footer = [
  {
    id: 1,
    label: "Instagram",
    url: "/",
    icon: RiInstagramFill,
  },
  {
    id: 2,
    label: "Facebook",
    url: "/",
    icon: RiFacebookCircleFill,
  },
  {
    id: 3,
    label: "Linkedin",
    url: "/",
    icon: RiLinkedinBoxFill,
  },
  {
    id: 4,
    label: "Twitter",
    url: "/",
    icon: RiTwitterFill,
  },
  {
    id: 5,
    label: "Behance",
    url: "/",
    icon: RiBehanceFill,
  },
];

export const data = [
  {
    id: 1,
    name: "Koridor",
    color: "red",
    position: [50, 0, 40],
    url: "ozak/a1.jpg",
    link: 1,
  },
  {
    id: 2,
    name: "Salon",
    color: "lightblue",
    position: [-30, 0, -45],
    url: "ozak/a2.jpg",
    link: 0,
  },
  {
    id: 3,
    name: "Holl",
    color: "lightblue",
    position: [-50, 0, 40],
    url: "ozak/a3.jpg",
    link: 2,
  },
];

export const project = [
  {
    id: 1,
    image: "works-01.jpg",
    title: "Ozak Gyo",
    subtitle: "Göktürk 2",
    href: "360/ozakgyo",
  },
  {
    id: 2,
    image: "works-01.jpg",
    title: "Ozak Gyo",
    subtitle: "Göktürk 2",
    href: "360/ozakgyo",
  },
];
const positionHoll = [20, 0, 0];

const positionKoridor = [30, 0, 40];
const positionKoridor2 = [-50, 0, 0];
const positionSalon = [-30, 0, -45];
export const data360 = [
  {
    id: 1,
    name: "Koridor",
    color: "red",
    position: positionKoridor,
    url: "/ozak/a1.jpg",
    link: 1,
    detail: [
      {
        id: 1,
        name: "Koridor",
        link: 1,
        position: positionKoridor,
      },
    ],
  },
  {
    id: 2,
    name: "Salon",
    position: positionSalon,
    url: " /ozak/a2.jpg",
    link: 0,
    detail: [
      {
        id: 2,
        name: "Salon",
        link: 0,
        position: positionSalon,
      },
      {
        id: 3,
        name: "Holl",
        link: 2,
        position: positionHoll,
      },
    ],
  },
  {
    id: 3,
    name: "Holl",
    color: "lightblue",
    position: positionHoll,
    url: " /ozak/a3.jpg",
    link: 2,
    detail: [
      {
        id: 1,
        name: "Koridor",
        link: 1,
        position: positionKoridor2,
      },
    ],
  },
];
