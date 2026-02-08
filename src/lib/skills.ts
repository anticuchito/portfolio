import { skills } from "../lib/data";

// Mapeo de keywords a categorías
export const keywordToCategory: Record<string, string> = {
    Frontend: "Frontend",
    Backend: "Backend",
    Cloud: "Cloud & AWS",
    "Base de Datos": "Bases de Datos",
    API: "APIs",
    "CI/CD": "DevOps & Tools",
    DevOps: "DevOps & Tools",
    "Control de Versiones": "DevOps & Tools",
    "Gestión de Proyectos": "DevOps & Tools",
    Sistemas: "DevOps & Tools",
};

// Orden de categorías
export const categoryOrder = [
    "Frontend",
    "Backend",
    "Cloud & AWS",
    "Bases de Datos",
    "APIs",
    "DevOps & Tools",
];

// Skills principales (top)
export const topSkills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS Lambda",
    "DynamoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "GraphQL",
];

// Obtener la categoría principal de una skill
export function getSkillCategory(skill: (typeof skills)[0]): string | null {
    for (const keyword of skill.keywords) {
        const category = keywordToCategory[keyword];
        if (category) return category;
    }
    return null;
}

// Obtener skills por categoría sin duplicados
export function getSkillsByCategory(category: string) {
    return skills.filter((s) => getSkillCategory(s) === category);
}

// Separar skills en principales y otras
export function getTopAndOtherSkills() {
    const topSkillsList = skills.filter((s) => topSkills.includes(s.name));
    const otherSkillsList = skills.filter((s) => !topSkills.includes(s.name));
    return { topSkillsList, otherSkillsList };
}
