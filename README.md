

## Workflow development

docker-compose up will launch a nextjs development instance (`npm run dev`) and publish it on localhost:3000.

This setup will consist of temporary feature branches that add/remove features or fix bugs, and they will merge back to the development branch. These changes will be auto deployed to a development environment. 

A set number of features on the development environment will be branched into releases/staging/preproduction. Releases will follow semantic versioning.(semver.org)
These releases will be merged into prod.

merges to master will autodeploy into the production environment. 

## To do 

 - set up remote environment 
 - set up gh actions 
 - integrate with gh projects 
