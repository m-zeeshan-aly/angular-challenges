export interface JobApplication {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
  };
  educationArray: {
    level: string;
    instituteName: string;
    degreeName: string;
    grade: number;
  }[];
  skills: {
    name: string;
    type: string;
    proficiency: string;
    experience: number;
  }[];
  experience: number;
  joinTime: number;
  acceptTerms: boolean;
  showDetails: boolean;
}


