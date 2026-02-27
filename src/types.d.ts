// Explicitly declare CSS files to prevent "Cannot find module" TS errors
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
