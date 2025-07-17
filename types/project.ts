export interface ProjectDetail {
    label: string;
    value: string;
  }
  
  export interface Comment {
    author: string;
    text: string;
    rating: number;
  }
  
  export    interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    category: string;
    type: string;
    inspiration?: string;
    features: string[];
    details: ProjectDetail[];
    gallery: string[];
    comments?: Comment[];
  }
  