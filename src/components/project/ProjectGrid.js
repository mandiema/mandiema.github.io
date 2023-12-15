import { PROJECTS } from './project_list.js';
import Project from './Project.js';

export default function ProjectGrid() {
    return (
        <section class=".ProjectGrid">
            <h3>Machine Learning</h3>
            <Project {...PROJECTS[0]} />
            <Project {...PROJECTS[1]} />
        </section>
    )
}