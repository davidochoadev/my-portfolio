import { Octokit } from "octokit";

export async function getAllGits() {
   const octokit = new Octokit({ 
      auth: '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',
    });
    
    const res = await octokit.request("GET /users/{owner}/repos", {
    owner: "davideochoaa"
   });

   return res;

}

export async function getLangs(name : any) {
   const repoName = name
   const octokit = new Octokit({ 
      auth: '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',
    });
    
    const res = await octokit.request("GET /repos/{owner}/{repo}/languages", {
    owner: "davideochoaa",
    repo: `${repoName}`,
   });

   return res;
}

export async function getLinkLanguages() {
   const gits = getAllGits();
   const repos = (await gits).data;
   const languagesLinks = repos.map(( repo: any ) => repo.name);
   return await languagesLinks;
}

