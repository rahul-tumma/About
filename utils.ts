export function getProjectUrl(projectName: string) {
  return {
    url: `/projects/${projectName.toLowerCase().split(" ").join("-")}`,
    slug: projectName.toLowerCase().split(" ").join("-"),
  };
}
