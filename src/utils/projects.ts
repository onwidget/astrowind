import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from '~/types';
import { APP_PROJECTS } from '~/utils/config';
import { cleanSlug, trimSlash, PROJECTS_BASE, PROJECT_PERMALINK_PATTERN, PROJECTS_CATEGORY_BASE } from './permalinks';

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category,
}: {
  id: string;
  slug: string;
  publishDate: Date;
  category: string | undefined;
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = PROJECT_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedProject = async (project: CollectionEntry<'project'>): Promise<Project> => {
  const { id, slug: rawSlug = '', data } = project;
  const { Content, remarkPluginFrontmatter } = await project.render();

  const {
    publishDate: rawPublishDate = new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    category: rawCategory,
    draft = false,
    metadata = {},
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),

    publishDate: publishDate,
    updateDate: updateDate,

    title: title,
    excerpt: excerpt,
    image: image,

    category: category,

    draft: draft,

    metadata,

    Content: Content,
    // or 'content' in case you consume from API

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const getRandomizedProjects = (array: Project[], num: number) => {
  const newArray: Project[] = [];

  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return newArray;
};

const load = async function (): Promise<Array<Project>> {
  const projects = await getCollection('project');
  const normalizedProjects = projects.map(async (project) => await getNormalizedProject(project));

  const results = (await Promise.all(normalizedProjects))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((project) => !project.draft);

  return results;
};

let _projects: Array<Project>;

/** */
export const isProjectsEnabled = APP_PROJECTS.isEnabled;
export const isRelatedProjectsEnabled = APP_PROJECTS.isRelatedProjectsEnabled;
export const isProjectsListRouteEnabled = APP_PROJECTS.list.isEnabled;
export const isProjectRouteEnabled = APP_PROJECTS.project.isEnabled;
export const isProjectsCategoryRouteEnabled = APP_PROJECTS.category.isEnabled;

export const projectsListRobots = APP_PROJECTS.list.robots;
export const projectRobots = APP_PROJECTS.project.robots;
export const projectsCategoryRobots = APP_PROJECTS.category.robots;

export const projectsPerPage = APP_PROJECTS?.projectsPerPage;

/** */
export const fetchProjects = async (): Promise<Array<Project>> => {
  if (!_projects) {
    _projects = await load();
  }

  return _projects;
};

/** */
export const findProjectsBySlugs = async (slugs: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(slugs)) return [];

  const projects = await fetchProjects();

  return slugs.reduce(function (r: Array<Project>, slug: string) {
    projects.some(function (project: Project) {
      return slug === project.slug && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findProjectsByIds = async (ids: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(ids)) return [];

  const projects = await fetchProjects();

  return ids.reduce(function (r: Array<Project>, id: string) {
    projects.some(function (project: Project) {
      return id === project.id && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findLatestProjects = async ({ count }: { count?: number }): Promise<Array<Project>> => {
  const _count = count || 4;
  const projects = await fetchProjects();

  return projects ? projects.slice(0, _count) : [];
};

/** */
export const getStaticPathsProjectsList = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isProjectsEnabled || !isProjectsListRouteEnabled) return [];
  return paginate(await fetchProjects(), {
    params: { projects: PROJECTS_BASE || undefined },
    pageSize: projectsPerPage,
  });
};

/** */
export const getStaticPathsProject = async () => {
  if (!isProjectsEnabled || !isProjectRouteEnabled) return [];
  return (await fetchProjects()).flatMap((project) => ({
    params: {
      projects: project.permalink,
    },
    props: { project },
  }));
};

/** */
export const getStaticPathsProjectsCategory = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isProjectsEnabled || !isProjectsCategoryRouteEnabled) return [];

  const projects = await fetchProjects();
  const categories = new Set<string>();
  projects.map((project) => {
    typeof project.category === 'string' && categories.add(project.category.toLowerCase());
  });

  return Array.from(categories).flatMap((category) =>
    paginate(
      projects.filter((project) => typeof project.category === 'string' && category === project.category.toLowerCase()),
      {
        params: { category: category, projects:  PROJECTS_CATEGORY_BASE || undefined },
        pageSize: projectsPerPage,
        props: { category },
      }
    )
  );
};


/** */
export function getRelatedProjects(allProjects: Project[], currentSlug: string, currentCategory: string) {
  if (!isProjectsEnabled || !isRelatedProjectsEnabled) return [];

  const relatedProjects = getRandomizedProjects(
    allProjects.filter((project) => project.slug !== currentSlug && project.category === currentCategory),
    APP_PROJECTS.relatedProjectsCount
  );

  if (relatedProjects.length <  APP_PROJECTS.relatedProjectsCount) {
    const moreProjects = getRandomizedProjects(
      allProjects.filter(project => project.slug !== currentSlug).filter(project => project.category !== currentCategory),
      APP_PROJECTS.relatedProjectsCount - relatedProjects.length
    );
    relatedProjects.push(...moreProjects);
  }

  return relatedProjects;
}
