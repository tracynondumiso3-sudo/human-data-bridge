# Data Insights Hub

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  User, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('tracynondumiso3@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Skill Distribution Data for the Pie Chart
  const skillData = [
    { name: 'Python (Pandas, NumPy)', value: 25, color: '#0d9488' }, // Teal
    { name: 'SQL & Database Queries', value: 20, color: '#10b981' }, // Emerald
    { name: 'Power BI & Visualization', value: 20, color: '#14b8a6' }, // Light Teal
    { name: 'Advanced Excel', value: 15, color: '#34d399' }, // Mint
    { name: 'Behavioral Science & Research', value: 20, color: '#059669' }, // Dark Emerald
  ];

  const projects = [
    {
      title: 'Data Privacy, Security & ICT4D Analysis',
      description: 'Exploratory data analysis investigating digital privacy perception, ethical data handling, and security trends across demographic clusters.',
      tech: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
      github: 'https://github.com/tracingdata',
      live: '#'
    },
    {
      title: 'HR & People Analytics Dashboard',
      description: 'Interactive Power BI dashboard evaluating employee retention metrics, performance distribution, and behavioral workplace trends.',
      tech: ['Power BI', 'Excel', 'SQL', 'DAX'],
      github: 'https://github.com/tracingdata',
      live: '#'
    },
    {
      title: 'Behavioral Survey Data Pipeline',
      description: 'Automated Python workflow designed to clean, transform, and structure messy raw survey data into statistical models.',
      tech: ['Python', 'Data Cleaning', 'Git', 'ETL'],
      github: 'https://github.com/tracingdata',
      live: '#'
    }
  ];

  return (
    


      
      {/* Sticky Navigation */}
      
        


          
            Nondumiso.data
          
          


            About
            Skills Breakdown
            Projects
            Education
            Contact
          


        


      

      {/* Hero Section */}
      


        


          
          Gauteng, South Africa | Open to Remote & On-site Roles
        



        


          Nondumiso Tracy Ngomane
        



        


          Data Analyst | Bridging Human Behavior & Quantitative Insights
        



        


          Combining a strong foundation in Psychology & Sociology with Postgraduate studies in Data Analytics to transform complex datasets into actionable, human-centered decisions.
        



        


          
            Explore Projects
          
          
            
            Download CV
          
          
            {copied ?  : }
            tracynondumiso3@gmail.com</span>
          
        
      

      {/* About Me Section */}
      


        


           About Me
        


        


          


            

Behavioral Lens


            


              Groundwork in Psychology and Sociology gives me deep intuition for quantitative user metrics, survey dynamics, organizational behavior, and ethically handling digital data privacy.
            


          


          


            

Quantitative Precision


            


              Equipped with technical skills in Python, SQL, Advanced Excel, and Power BI to clean unstructured raw datasets, construct dashboards, and perform exploratory statistical analysis.
            


          


        


      



      {/* Skills & Pie Chart Section */}
      


        


           Technical Core & Skill Distribution
        


        


          A quantitative breakdown of my technical domain competencies and analytical focus.
        



        


          {/* Recharts Pie Chart */}
          


            
              
                
                  {skillData.map((entry, index) => (
                    
                  ))}
                
                 [`${value}%`, 'Skill Weight']}
                />
              
            
          



          {/* Legend / Percentage Details */}
          


            {skillData.map((skill, index) => (
              


                


                  
                  {skill.name}
                


                {skill.value}%
              


            ))}
          


        


      



      {/* Projects Section */}
      


        


           Key Analytics Projects
        



        


          {projects.map((proj, idx) => (
            


              


                

{proj.title}


                

{proj.description}


                


                  {proj.tech.map((t, i) => (
                    
                      {t}
                    
                  ))}
                


              


              


                
                   Code
                
              


            


          ))}
        


      



      {/* Education & Certifications */}
      


        


           Education & Qualifications
        



        


          


            


              
            


            


              

Postgraduate Diploma in Data Analytics (NQF Level 8)


              

IIE Rosebank College • Distance Learning


              

Specialized research focus in Privacy, Security, and ICT4D.


            


          



          


            


              
            


            


              

Bachelor of Arts: Psychology & Sociology (NQF Level 7)


              

Undergraduate Degree


              

Core foundation in human behavioral science, research methodology, and qualitative data analysis.


            


          


        


      



      {/* Contact Section */}
      


        

Let's Connect


        


          Looking for entry-level data analyst, people analytics, or junior research opportunities.
        



        


          
            
          
          
            
          
          @gmail.com" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full text-slate-300 hover:text-teal-400 transition">
            
          
        

        


          © {new Date().getFullYear()} Nondumiso Tracy Ngomane. Built with React, Tailwind CSS & Recharts.
        


      

    
  );
}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://human-data-bridge.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/398d5e31-36c8-4ec4-890f-fb40aa84531f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
