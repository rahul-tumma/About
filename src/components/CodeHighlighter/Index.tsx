//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import "./custom.css";

function CodeHighlighter() {
  const [highlightedCode, setHighlightedCode] = useState("");

  const codeSample = `class RahulTumma {
    constructor() {
        this.name = 'Rahul Tumma';
        this.dateOfBirthTimestamp = 1059888000;
        this.email = 'rahultumma2@gmail.com';
    }

    workExperience() {
        return [
            { period: 'September 2023 - April 2024', role: 'Full-stack Intern at AlgobrainAI' },
            { period: 'April 2024 - now', role: 'Full-stack Developer at AlgobrainAI' }
        ];
    }

    education() {
        return [
            { period: '2021 - 2024', degree: "Bachelor of Computer Applications",
             institution: 'Bhulabhai Vanmalibhai Patel Institute of Computer Science, UKA TARSADIA University' 
            }
        ];
    }

    skills() {
        return {
            'Programming Languages': ['C#', 'C++', 'Java'],
            'Web Development': ['Bootstrap', 'Express.js', 'HTML/CSS/JS', 'React.js'],
            'Server-side Technologies': ['ASP.net', 'Java Servlet', 'Node.js', 'PHP'],
            'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
            'Mobile Development': ['Android Studio', 'Dart', 'Flutter'],
            'UI/UX Design': ['Figma'],
            'Machine Learning': ['TensorFlow'],
            'Testing Frameworks': ['JUnit', 'JMeter', 'Katalon', 'Postman', 'Selenium'],
            'CI/CD Tools': ['Jenkins'],
            'Version Control': ['Git']
        };
    }
  }`;

  useEffect(() => {
    const highlight = async () => {
      // Dynamically import Shiki and its functions
      const shiki = await import("shiki");
      
      // Create a custom theme using CSS variables
      const customTheme = shiki.createCssVariablesTheme({
        name: 'css-variables',
        variablePrefix: '--shiki-'
      });

      // Generate highlighted HTML
      const html = await shiki.codeToHtml(codeSample, {
        lang: 'typescript',
        theme: customTheme,
      });

      setHighlightedCode(html);
    };

    highlight();
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div 
        className="code-container"
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
      />
    </div>
  );
}

export default CodeHighlighter;
