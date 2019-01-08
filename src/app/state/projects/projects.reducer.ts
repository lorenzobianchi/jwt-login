import { Project } from './project.model';

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

// 1 - define the shape of the state
export interface ProjectsState {
  projects: Project[],
  selectedProject: number | null
}

// 2 - define the initial state
export const initialState: ProjectsState {
  projects: initialProjects,
  selectedProject: null
}

// 3 - define the simplest reducer we can
export function projectsReducer(state: initialState, action): ProjectsState {
  switch(action.type) {
    default:
      return state
  }
}
