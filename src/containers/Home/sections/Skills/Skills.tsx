import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SkillCard from "../../../../components/SkillCard/SkillCard";

import htmlIcon from "../../../../assets/html.png";
import cssIcon from "../../../../assets/css.png";
import jsIcon from "../../../../assets/javascript.png";
import reactIcon from "../../../../assets/react.png";
import javaIcon from "../../../../assets/java.png";
import githubIcon from "../../../../assets/git.png";

const skills = [
  { icon: htmlIcon, skillName: 'HTML', progress: 60 },
  { icon: cssIcon, skillName: 'CSS', progress: 50 },
  { icon: jsIcon, skillName: 'JavaScript', progress: 30 },
  { icon: reactIcon, skillName: 'React', progress: 45 },
  { icon: javaIcon, skillName: 'Java', progress: 40 },
  { icon: githubIcon, skillName: 'Git/Github', progress: 55 },
];

const Skills: React.FC = () => {
  return (
    <Container
      style={{
        backgroundColor: '#232323',
        minHeight: '100vh',
        padding: '20px',
        maxWidth: '100%',
        margin: 0,  
      }}
      disableGutters 
    >
      <Typography variant="h1" color="white" textAlign="center" pb={12}>
        Skills
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.skillName}
            icon={skill.icon}
            skillName={skill.skillName}
            progress={skill.progress}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;