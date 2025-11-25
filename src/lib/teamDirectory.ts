export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  code: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "digital-dynamo",
    name: "Digital Dynamo",
    role: "Versatile Marketing Strategist",
    bio: "Builds multi-channel marketing strategies that keep e-commerce funnels growing.",
    image: "/teams/1.jpg",
    email: "herigold.wealth@omninetpro.com",
    code: "10105",
  },
  {
    id: "sales-with-heritage",
    name: "Sales with Heritage",
    role: "Brand Developer",
    bio: "Shapes recognizable e-commerce brands that connect with the right customers.",
    image: "/teams/2.jpg",
    email: "heritageheritage50@gmail.com",
    code: "10108",
  },
  {
    id: "learnwithmayowa",
    name: "LearnwithMayowa",
    role: "Marketing Specialist",
    bio: "Drives campaigns that help online stores reach and convert the right audience.",
    image: "/teams/3.jpg",
    email: "mayowauriel@gmail.com",
    code: "08181",
  },
  {
    id: "masterwithella",
    name: "MasterwithElla",
    role: "Sales Funnel Expert",
    bio: "Designs funnels that guide shoppers from curiosity to confident purchase.",
    image: "/teams/4.jpg",
    email: "thomaschisom@gmail.com",
    code: "10107",
  },
  {
    id: "john-leni",
    name: "John Leni",
    role: "Market Analyst",
    bio: "Analyzes market signals to uncover high-performing product opportunities.",
    image: "/teams/5.jpg",
    email: "johnleni@omninetpro.com",
    code: "24245",
  },
  {
    id: "kennex",
    name: "Kennex",
    role: "Conversion Strategist",
    bio: "Optimizes every store touchpoint for clarity, trust, and higher conversions.",
    image: "/teams/6.jpg",
    email: "tiamiutaiwo715@gmail.com",
    code: "106007",
  },
  {
    id: "mothic",
    name: "Mothic",
    role: "Product Researcher",
    bio: "Finds trending products and winning offers that keep brands scaling.",
    image: "/teams/7.jpg",
    email: "tunmiseibitoye339@gmail.com",
    code: "300718",
  },
  {
    id: "daniel",
    name: "Daniel",
    role: "Brand Strategist",
    bio: "Builds bold positioning and storytelling for premium e-commerce brands.",
    image: "/teams/8.jpg",
    email: "daneil@omninetpro.com",
    code: "10106",
  },
  {
    id: "dawn",
    name: "Dawn",
    role: "A.I. Marketing Strategist",
    bio: "Applies AI insights to personalize campaigns and boost store performance.",
    image: "/teams/9.jpg",
    email: "a3ola10567@gmail.com",
    code: "201030",
  },
  {
    id: "adesewa",
    name: "Adesewa",
    role: "Shopify Specialist",
    bio: "Builds seamless Shopify storefronts tailored for fast launches and scale.",
    image: "/teams/10.jpg",
    email: "adesewaopeyemi2005@gmail.com",
    code: "10108",
  },
  {
    id: "anny-mandy",
    name: "Anny Mandy",
    role: "Product Analyst",
    bio: "Turns customer insights into product roadmaps that move the brand forward.",
    image: "/teams/11.jpg",
    email: "annymandy02@gmail.com",
    code: "20051",
  },
  {
    id: "dassy",
    name: "Dassy",
    role: "E-commerce Design Expert",
    bio: "Creates immersive storefront experiences that feel premium and effortless.",
    image: "/teams/12.jpg",
    email: "dassy@omninetpro.com",
    code: "28084",
  },
  {
    id: "miracle",
    name: "Miracle",
    role: "Shopify Sales & Marketing Expert",
    bio: "Launches data-backed campaigns that keep sales pipelines active and growing.",
    image: "/teams/13.jpg",
    email: "wonderfulsaw5@gmail.com",
    code: "75026",
  },
];

export const teamDirectory = teamMembers.reduce<Record<string, TeamMember>>(
  (acc, member) => {
    acc[member.id] = member;
    return acc;
  },
  {},
);

