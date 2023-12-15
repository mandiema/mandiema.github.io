import { PROJECTS } from './project_list.js';
import Project from './Project.js';

export default function ProjectGrid() {
    return (
        <section class=".ProjectGrid">
            <h1>Projects</h1>
            <Project {...PROJECTS[0]} />
            <Project {...PROJECTS[1]} />
        </section>
    )
}