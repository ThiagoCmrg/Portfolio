import React from 'react';
import { Box, Typography, LinearProgress, Avatar } from '@mui/material';

interface SkillCardProps {
  icon: string;
  skillName: string;
  progress: number;  
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, skillName, progress }) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar src={icon} alt={`${skillName} icon`} sx={{ width: 56, height: 56, mr: 2 }} />
      <Box width="100%">
        <Typography color= "white" variant="h6">{skillName}</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 15, borderRadius: 5 }} />
      </Box>
    </Box>
  );
};

export default SkillCard;
