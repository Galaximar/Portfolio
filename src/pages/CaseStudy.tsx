import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProjectCaseStudy from '../components/templates/ProjectCaseStudy';
import { allProjectCaseStudies } from '../data/projectCaseStudies';

const CaseStudy: React.FC = () => {
  const { id } = useParams();
  const project = allProjectCaseStudies.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectCaseStudy project={project} />;
};

export default CaseStudy;

