/* import { prisma } from "~/db.server"; */
import { Octokit } from "octokit";

export async function getLangs(repo : any) {
   const octokit = new Octokit({
      auth: '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'
    });

   const res = await octokit.request("GET /repos/{owner}/{repo}/languages", {
      owner: "davideochoaa",
      repo: `${repo}`,
    })

    return res.data;
}


export async function getRepos(owner : string) {
   const octokit = new Octokit({
      auth: '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'
    });
    const res = await octokit.request("GET /users/{owner}/repos", {
      owner: owner,
    });
    const reposName : any[] = []
    const langs : any[] = [];
    const vans : any[] = [];

    res.data.map((repo : any) => {
      return reposName.push(repo.name);
    })

    for(var i = 0; i<reposName.length; i++){
      const lang = await octokit.request("GET /repos/{owner}/{repo}/languages", {
         owner: "davideochoaa",
         repo: `${reposName[i]}`,
       })
      langs.push(lang.data);
    }

    for(var a = 0; a<langs.length; a++){
      switch(Object.keys(langs[a])[a]){
        case("TypeScript") :
        vans.push(Object.values(langs)[a]);
        break;
        case("JavaScript") :
        vans.push(Object.values(langs)[a]);
        break;
      }
      
    }

    return vans;



/*     return prisma.coding.update({
      where:{
        userId: "clap0z9fb0000yiqxutj49gbz",
      },
      data: {
        typescript: typeScript,
        javascript: javaScript,
        html: html,
        css: css,
        others: others,
      }
    }); */
}